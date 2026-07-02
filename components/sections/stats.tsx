'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Users, Zap, Trophy, Calendar } from 'lucide-react'

export default function Stats() {
  const stats = [
    { icon: Users,    label: 'Members',       value: '500+', desc: 'Active student members' },
    { icon: Calendar, label: 'Events Per Year',value: '40+',  desc: 'Workshops & seminars' },
    { icon: Trophy,   label: 'Achievements',   value: '50+',  desc: 'Awards & recognitions' },
    { icon: Zap,      label: 'Projects',       value: '100+', desc: 'Media productions' },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="group relative p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                variants={itemVariants}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-jmc-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-jmc-green/10 group-hover:bg-jmc-green/15 flex items-center justify-center transition-colors duration-300">
                    <Icon className="text-jmc-dark-green group-hover:text-jmc-green transition-colors duration-300" size={22} />
                  </div>
                </div>

                {/* Value */}
                <p className="font-montserrat font-bold text-4xl text-jmc-navy dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="font-semibold text-sm text-jmc-dark dark:text-gray-300">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
