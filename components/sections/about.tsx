'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be the leading student media organization, fostering excellence in journalism, creativity, and professional development at Green University.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To cultivate skilled storytellers, develop future media leaders, and create impactful content that informs and inspires our university community.',
    },
    {
      icon: Lightbulb,
      title: 'Core Values',
      description:
        'Innovation, Integrity, Inclusion, and Impact. We believe in ethical journalism, creative excellence, and community engagement.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-24 bg-white dark:bg-jmc-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-pill mb-4">
            Who We Are
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 text-jmc-navy dark:text-white mt-4">
            About <span className="text-gradient">JMC Media Club</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The Department of Journalism and Media Communication&apos;s premier student organization
            dedicated to excellence in media production and journalistic practice.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
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
                className="group relative p-8 rounded-2xl bg-jmc-light dark:bg-jmc-bg-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 dark:hover:border-jmc-green/20 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                variants={itemVariants}
              >
                {/* Subtle top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-jmc-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-jmc-dark-green/10 group-hover:bg-jmc-dark-green/15 flex items-center justify-center transition-colors duration-300">
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
      </div>
    </section>
  )
}
