'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { PenLine, Camera, Mic, Users } from 'lucide-react'

const pillars = [
  {
    icon: PenLine,
    title: 'Journalism',
    description: 'Promoting ethical journalism and media professionalism through hands-on reporting.',
    color: 'bg-[#0D1B2A]/5 dark:bg-jmc-green/5',
    iconBg: 'bg-[#0D1B2A] dark:bg-jmc-green/20',
    iconColor: 'text-jmc-navy dark:text-white dark:text-jmc-green',
  },
  {
    icon: Camera,
    title: 'Media Production',
    description: 'Creating impactful visual and digital content that tells compelling stories.',
    color: 'bg-jmc-dark-green/5 dark:bg-jmc-green/5',
    iconBg: 'bg-jmc-dark-green dark:bg-jmc-green/20',
    iconColor: 'text-jmc-navy dark:text-white dark:text-jmc-green',
  },
  {
    icon: Mic,
    title: 'Communication',
    description: 'Enhancing skills in public speaking, broadcasting, and effective storytelling.',
    color: 'bg-[#0D1B2A]/5 dark:bg-jmc-green/5',
    iconBg: 'bg-[#0D1B2A] dark:bg-jmc-green/20',
    iconColor: 'text-jmc-navy dark:text-white dark:text-jmc-green',
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Building the next generation of leaders for the future media and communication world.',
    color: 'bg-jmc-dark-green/5 dark:bg-jmc-green/5',
    iconBg: 'bg-jmc-dark-green dark:bg-jmc-green/20',
    iconColor: 'text-jmc-navy dark:text-white dark:text-jmc-green',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function OurFocus() {
  return (
    <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-pill mb-4">What We Do</span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-4">
            Our <span className="text-gradient">Focus</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Four pillars that drive everything we create, every story we tell, and every leader we develop.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={i}
                className="group relative p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 dark:hover:border-jmc-green/20 shadow-sm hover:shadow-xl hover:shadow-jmc-green/8 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                variants={itemVariants}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-jmc-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={pillar.iconColor} size={24} />
                </div>

                <h3 className="font-montserrat font-bold text-lg text-jmc-navy dark:text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom number */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    Pillar {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-jmc-green/10 group-hover:bg-jmc-green/20 flex items-center justify-center transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-jmc-green" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
