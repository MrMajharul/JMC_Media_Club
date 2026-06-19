'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Zap, Trophy, Calendar } from 'lucide-react'

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Members', value: '500+' },
    { icon: Calendar, label: 'Events Per Year', value: '40+' },
    { icon: Trophy, label: 'Achievements', value: '50+' },
    { icon: Zap, label: 'Projects', value: '100+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                className="p-8 rounded-xl bg-gradient-to-br from-jmc-green/10 to-jmc-orange/10 border border-jmc-green/20 hover:border-jmc-green/50 transition-all hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-jmc-green to-jmc-orange rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-jmc-navy dark:text-white mb-2 font-montserrat">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
