'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home',       href: '/' },
    { label: 'About',      href: '/about' },
    { label: 'Events',     href: '/events' },
    { label: 'Gallery',    href: '/gallery' },
    { label: 'Executives', href: '/executives' },
    { label: 'Blog',       href: '/blog' },
    { label: 'Contact',    href: '/contact' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 dark:bg-jmc-navy/98 backdrop-blur-xl shadow-md shadow-black/5 border-b border-gray-100 dark:border-white/5'
          : 'bg-white dark:bg-jmc-navy border-b border-gray-100 dark:border-white/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ───────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-jmc-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <div className="relative w-11 h-11 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
              <Image
                src="/android-chrome-192x192.png"
                alt="JMC Media Club logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="font-montserrat font-bold text-sm text-jmc-navy dark:text-white leading-tight">
              JMC Media Club
            </p>
            <p className="text-[10px] text-jmc-dark-green dark:text-jmc-green font-semibold tracking-wider leading-tight uppercase">
              Green University
            </p>
          </div>
        </Link>

        {/* ── Desktop Navigation ─────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'text-jmc-dark-green dark:text-jmc-green bg-jmc-green/8 dark:bg-jmc-green/10'
                  : 'text-gray-600 dark:text-gray-300 hover:text-jmc-dark-green dark:hover:text-jmc-green hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-jmc-dark-green dark:bg-jmc-green"
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* ── CTA + Mobile Toggle ────────────────────────────────────── */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/membership"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-jmc-dark-green hover:bg-[#15803d] text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-jmc-green/25 hover:-translate-y-0.5"
            id="header-join-cta"
          >
            Join Us
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile Navigation ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-gray-100 dark:border-white/5 bg-white dark:bg-jmc-navy"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-0.5 pb-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      isActive(item.href)
                        ? 'text-jmc-dark-green dark:text-jmc-green bg-jmc-green/8 dark:bg-jmc-green/10 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-jmc-dark-green dark:hover:text-jmc-green'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100 dark:border-white/5">
                <Link
                  href="/membership"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-jmc-dark-green hover:bg-jmc-green text-white rounded-xl font-semibold text-sm text-center transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Join JMC Media Club
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
