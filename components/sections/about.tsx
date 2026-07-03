'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Target, Eye, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the leading student media organization, fostering excellence in journalism, creativity, and professional development at Green University.',
    number: '01',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To cultivate skilled storytellers, develop future media leaders, and create impactful content that informs and inspires our university community.',
    number: '02',
  },
  {
    icon: Lightbulb,
    title: 'Core Values',
    description:
      'Innovation, Integrity, Inclusion, and Impact. We believe in ethical journalism, creative excellence, and community engagement.',
    number: '03',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function About() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-4">Who We Are</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-4">
              About <span className="text-gradient">JMC Media Club</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mt-3 leading-relaxed">
              The Department of Journalism and Media Communication&apos;s premier student organization
              dedicated to excellence in media production and journalistic practice.
            </p>
          </div>
          <Link
            href="/about"
            className="flex-shrink-0 hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group"
          >
            Learn More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 dark:hover:border-jmc-green/20 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                variants={itemVariants}
              >
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-jmc-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number badge */}
                <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 dark:text-white/5 select-none leading-none transition-colors duration-300 group-hover:text-jmc-green/8">
                  {value.number}
                </div>

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-2xl bg-jmc-dark-green/10 group-hover:bg-jmc-dark-green/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-jmc-dark-green" size={26} />
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-xl mb-3 text-jmc-navy dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile link */}
        <motion.div
          className="mt-10 md:hidden text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
