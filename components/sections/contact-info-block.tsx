'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfoBlock() {
  return (
    <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-jmc-card-dark rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* Info */}
            <div className="lg:col-span-1 space-y-4">
              <span className="section-pill">
                <MessageSquare size={13} className="text-jmc-green" />
                Find Us
              </span>
              <h3 className="font-montserrat font-bold text-3xl text-jmc-navy dark:text-white">
                Contact <span className="text-gradient">Information</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Have any inquiries, suggestions or collaboration ideas? Feel free to reach out to us. We are always ready to collaborate!
              </p>
            </div>

            {/* Grid details */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-jmc-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-jmc-dark-green dark:text-jmc-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-jmc-navy dark:text-white mb-1">Campus Location</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    JMC Lab, Media Center, Green University of Bangladesh, Purbachal American City.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-jmc-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-jmc-dark-green dark:text-jmc-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-jmc-navy dark:text-white mb-1">Email Address</h4>
                  <a href="mailto:jmcmediaclub@gmail.com" className="text-xs text-gray-500 dark:text-gray-400 hover:text-jmc-green transition-colors leading-relaxed">
                    jmcmediaclub@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-jmc-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-jmc-dark-green dark:text-jmc-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-jmc-navy dark:text-white mb-1">Phone Helpline</h4>
                  <a href="tel:+8801700000000" className="text-xs text-gray-500 dark:text-gray-400 hover:text-jmc-green transition-colors leading-relaxed">
                    +880 1700-000000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-jmc-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={18} className="text-jmc-dark-green dark:text-jmc-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-jmc-navy dark:text-white mb-1">Office Hours</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Sunday – Thursday: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
