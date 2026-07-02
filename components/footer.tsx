'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, ExternalLink, Camera, Newspaper, Mic } from 'lucide-react'

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home',          href: '/' },
    { label: 'About Us',      href: '/about' },
    { label: 'Events',        href: '/events' },
    { label: 'Gallery',       href: '/gallery' },
    { label: 'Executives',    href: '/executives' },
    { label: 'Blog',          href: '/blog' },
    { label: 'Membership',    href: '/membership' },
  ]

  const pillars = [
    { icon: Camera,    label: 'Photography' },
    { icon: Newspaper, label: 'Journalism' },
    { icon: Mic,       label: 'Broadcasting' },
  ]

  return (
    <footer className="bg-jmc-navy dark:bg-jmc-bg-dark text-white">

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-jmc-dark-green via-jmc-green to-jmc-dark-green" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-jmc-green/30 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/favicon.png"
                    alt="JMC Media Club logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="font-montserrat font-bold text-base leading-tight">JMC Media Club</p>
                <p className="text-[11px] text-jmc-green font-semibold tracking-wide">Green University</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Official student club of the Department of Journalism and Media Communication at Green University of Bangladesh.
            </p>
            {/* Pillars */}
            <div className="flex flex-wrap gap-2">
              {pillars.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-jmc-green/10 border border-jmc-green/20 text-jmc-green text-xs font-medium"
                >
                  <Icon size={12} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-jmc-green text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-jmc-green transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-jmc-green mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Green University of Bangladesh, Purbachal American City, Kanchan, Rupganj, Narayanganj‑1461
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} className="text-jmc-green flex-shrink-0" />
                <a
                  href="mailto:jmcmediaclub@gmail.com"
                  className="hover:text-jmc-green transition-colors"
                >
                  jmcmediaclub@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Follow */}
          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/JMCMediaClub"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 bg-white/5 hover:bg-jmc-green border border-white/10 hover:border-jmc-green text-gray-400 hover:text-white rounded-xl transition-all duration-200"
                aria-label="Facebook Page"
              >
                <FacebookIcon />
              </a>
              <a
                href="mailto:jmcmediaclub@gmail.com"
                className="group p-2.5 bg-white/5 hover:bg-jmc-green border border-white/10 hover:border-jmc-green text-gray-400 hover:text-white rounded-xl transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Join CTA */}
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-jmc-dark-green hover:bg-jmc-green text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow hover:shadow-lg hover:shadow-jmc-green/30 hover:-translate-y-0.5"
            >
              <Camera size={15} />
              Join the Club
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} JMC Media Club. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/majharul-islam-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-jmc-green hover:text-jmc-green/80 transition-colors inline-flex items-center gap-1"
            >
              Majharul Islam
              <ExternalLink size={12} />
            </a>
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-jmc-green transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-jmc-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
