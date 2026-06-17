'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Share2, Mail, MapPin, Phone, Share } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-jmc-navy dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <Image
              src="/favicon.png"
              alt="JMC Media Club logo"
              width={120}
              height={120}
              className="w-24 h-auto mb-4"
            />
            <h3 className="font-montserrat font-bold text-lg mb-4">JMC Media Club</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Official student club of the Department of Journalism and Media Communication at Green University of Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-jmc-green transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-jmc-green transition-colors">About Us</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-jmc-green transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-jmc-green transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-jmc-green mt-0.5 flex-shrink-0" />
                <span>Green University of Bangladesh, Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-jmc-green flex-shrink-0" />
                <a href="mailto:contact@jmc.green.edu.bd" className="hover:text-jmc-green transition-colors">contact@jmc.green.edu.bd</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-jmc-green flex-shrink-0" />
                <span>+880 1700-000000</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-jmc-green/10 hover:bg-jmc-green text-jmc-green hover:text-white rounded-lg transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 bg-jmc-green/10 hover:bg-jmc-green text-jmc-green hover:text-white rounded-lg transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 bg-jmc-green/10 hover:bg-jmc-green text-jmc-green hover:text-white rounded-lg transition-all">
                <Share size={20} />
              </a>
              <a href="#" className="p-2 bg-jmc-green/10 hover:bg-jmc-green text-jmc-green hover:text-white rounded-lg transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} JMC Media Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-jmc-green transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-jmc-green transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
