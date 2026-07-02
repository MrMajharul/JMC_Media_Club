'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Camera } from 'lucide-react'
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
          ? 'bg-white/90 dark:bg-jmc-navy/95 backdrop-blur-xl shadow-lg shadow-jmc-navy/10 border-b border-jmc-green/10'
          : 'bg-white/70 dark:bg-jmc-navy/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-jmc-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
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
              <p className="font-montserrat font-bold text-base text-jmc-navy dark:text-white leading-tight">
                JMC Media Club
              </p>
              <p className="text-[11px] text-jmc-green font-semibold tracking-wide leading-tight">
                Green University
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-jmc-green bg-jmc-green/10 dark:bg-jmc-green/10'
                    : 'text-jmc-dark dark:text-gray-300 hover:text-jmc-green dark:hover:text-jmc-green hover:bg-jmc-green/5 dark:hover:bg-jmc-green/5'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-jmc-green"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/membership"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-jmc-dark-green hover:bg-jmc-green text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-jmc-green/30 hover:-translate-y-0.5"
            >
              <Camera size={16} />
              Join Us
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-jmc-green/10 dark:hover:bg-jmc-green/10 rounded-lg transition-colors text-jmc-dark dark:text-gray-300"
              aria-label="Toggle navigation menu"
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
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-jmc-green/10 flex flex-col gap-1 pb-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-jmc-green bg-jmc-green/10 font-semibold'
                          : 'text-jmc-dark dark:text-gray-300 hover:bg-jmc-green/5 hover:text-jmc-green dark:hover:text-jmc-green'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/membership"
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-jmc-dark-green hover:bg-jmc-green text-white rounded-xl font-semibold text-sm text-center transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Camera size={16} />
                  Join Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
