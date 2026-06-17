'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Committee', href: '/committee' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-jmc-green/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/android-chrome-192x192.png"
              alt="JMC Media Club logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-cover"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="font-montserrat font-bold text-lg text-jmc-navy dark:text-white">
                JMC Media Club
              </h1>
              <p className="text-xs text-jmc-green font-semibold">Green University</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-jmc-navy dark:text-white hover:text-jmc-green dark:hover:text-jmc-orange transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/membership"
              className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-jmc-green to-jmc-orange text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Join Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-jmc-navy dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/membership"
                className="px-4 py-2 bg-gradient-to-r from-jmc-green to-jmc-orange text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
