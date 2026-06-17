'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading student media organization, fostering excellence in journalism, creativity, and professional development at Green University.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To cultivate skilled storytellers, develop future media leaders, and create impactful content that informs and inspires our university community.',
    },
    {
      icon: Lightbulb,
      title: 'Core Values',
      description: 'Innovation, Integrity, Inclusion, and Impact. We believe in ethical journalism, creative excellence, and community engagement.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-jmc-green/5 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 text-jmc-navy dark:text-white">
            About <span className="text-gradient">JMC Media Club</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The Department of Journalism and Media Communication's premier student organization dedicated to excellence in media production and journalistic practice.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                className="p-8 rounded-xl glass border border-white/30 hover:border-jmc-green/50 transition-all group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="p-4 bg-gradient-to-br from-jmc-green to-jmc-orange rounded-lg w-fit mb-4 group-hover:shadow-xl group-hover:shadow-jmc-green/50 transition-all">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-jmc-navy dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
