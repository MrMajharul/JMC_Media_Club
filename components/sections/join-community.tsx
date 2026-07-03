'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Camera, Users, Trophy, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Hands-on journalism & media workshops',
  'Professional network with 500+ members',
  'Access to real production equipment',
  'Internship & career opportunities',
  'National & international recognition',
  'Free for all Green University students',
]

const stats = [
  { icon: Users,  value: '500+', label: 'Active Members' },
  { icon: Trophy, value: '50+',  label: 'Awards Won' },
  { icon: Zap,    value: '40+',  label: 'Events/Year' },
  { icon: Camera, value: '100+', label: 'Projects Done' },
]

export default function JoinCommunity() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jmc-green/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-jmc-dark-green/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-4">
              <Users size={13} />
              Membership
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-4 mb-5">
              Amplify Your Voice.<br />
              <span className="text-gradient">Join the Club.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-lg">
              Become part of Bangladesh&apos;s most dynamic student media community. Build your skills,
              tell impactful stories, and grow into the media leader you&apos;re meant to be.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-jmc-green/12 border border-jmc-green/25 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-jmc-dark-green dark:text-jmc-green" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl shadow-lg shadow-jmc-green/25 hover:shadow-jmc-green/40 transition-all duration-200 hover:-translate-y-0.5"
                id="join-community-cta"
              >
                Apply for Membership
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-jmc-dark-green/25 dark:border-jmc-green/20 hover:border-jmc-green text-jmc-dark-green dark:text-jmc-green hover:bg-jmc-green/5 font-semibold rounded-xl transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {/* Main CTA card */}
            <div className="relative bg-jmc-navy rounded-3xl p-10 overflow-hidden border border-jmc-green/10">
              {/* Inner grid */}
              <div className="absolute inset-0 grid-pattern" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-jmc-green/6 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="p-5 rounded-2xl bg-white/5 border border-white/8 text-center group hover:border-jmc-green/30 transition-colors duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="p-2.5 bg-jmc-green/15 group-hover:bg-jmc-green/20 rounded-xl transition-colors">
                          <Icon size={18} className="text-jmc-green" />
                        </div>
                      </div>
                      <p className="font-montserrat font-bold text-3xl text-white">{value}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-t border-white/8 pt-8">
                  <p className="text-white/80 italic text-base leading-relaxed text-center mb-4">
                    &ldquo;Every great journalist started exactly where you are now.
                    The only difference is they took the first step.&rdquo;
                  </p>
                  <p className="text-jmc-green text-sm font-semibold text-center">— JMC Media Club</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
