'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, ExternalLink } from 'lucide-react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const FacebookIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const socials = [
  {
    label: 'Facebook Page',
    handle: '@JMCMediaClub',
    description: 'Follow us for news, events, and updates from JMC Media Club.',
    url: 'https://www.facebook.com/JMCMediaClub',
    icon: FacebookIcon,
    color: 'bg-[#1877F3]',
    hoverShadow: 'hover:shadow-[#1877F3]/25',
  },
]

export default function SocialsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">Stay Connected</span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              Follow <span className="text-gradient-light">Our Story</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Connect with JMC Media Club on social media for the latest news, events, and behind-the-scenes content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social cards */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-5 mb-14">
            {socials.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-2xl shadow-md ${item.hoverShadow} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Background */}
                  <div className={`${item.color} p-8 flex items-center gap-6`}>
                    {/* Icon circle */}
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={32} className="text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.handle}</p>
                      <h3 className="text-white font-bold text-xl mb-1">{item.label}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold text-sm rounded-xl hover:bg-white/90 transition-colors duration-200"
                    >
                      Visit
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Email contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 shadow-sm text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-jmc-green/10 flex items-center justify-center mx-auto mb-5">
              <Mail size={24} className="text-jmc-dark-green dark:text-jmc-green" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-jmc-navy dark:text-white mb-2">Have a question?</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
              For queries, collaborations, or membership — reach us directly by email.
            </p>
            <a
              href="mailto:jmcmediaclub@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-jmc-green/30"
            >
              <Mail size={15} />
              jmcmediaclub@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}