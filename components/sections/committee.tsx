'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Committee() {
  const committee = [
    {
      id: 1,
      name: 'Dr. Ahmed Hassan',
      role: 'Faculty Advisor',
      bio: 'Lead mentor and faculty advisor',
      initials: 'AH',
    },
    {
      id: 2,
      name: 'Faisal Riyad',
      role: 'President',
      bio: 'Leading the media club vision',
      initials: 'FR',
    },
    {
      id: 3,
      name: 'Saida Khan',
      role: 'Vice President',
      bio: 'Co-leading media initiatives',
      initials: 'SK',
    },
    {
      id: 4,
      name: 'Rabiul Islam',
      role: 'General Secretary',
      bio: 'Managing club operations',
      initials: 'RI',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-jmc-green/5 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-2 text-jmc-navy dark:text-white">
              Executive <span className="text-gradient">Committee</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Meet the leaders driving our vision</p>
          </div>
          <Link
            href="/executives"
            className="hidden md:flex items-center gap-2 text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            View Full Committee
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {committee.map((member) => (
            <motion.div
              key={member.id}
              className="group p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-jmc-green/50 transition-all text-center"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-jmc-green to-jmc-orange rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:shadow-lg group-hover:shadow-jmc-green/50 transition-all">
                  {member.initials}
                </div>
              </div>
              <h3 className="font-semibold text-lg text-jmc-navy dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-jmc-green font-semibold text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 md:hidden text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/executives"
            className="inline-flex items-center gap-2 text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            View Full Committee
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
