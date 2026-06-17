'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Share2 } from 'lucide-react'

export default function CommitteePage() {
  const committee = [
    {
      id: 1,
      name: 'Dr. Ahmed Hassan',
      role: 'Faculty Advisor',
      department: 'Department of JMC',
      bio: 'Dr. Ahmed Hassan is the faculty advisor and a senior professor at the Department of Journalism and Media Communication with 15+ years of industry experience.',
      initials: 'AH',
    },
    {
      id: 2,
      name: 'Faisal Riyad',
      role: 'President',
      batch: 'Batch 2024',
      bio: 'Visionary leader driving innovation and excellence in student media at Green University.',
      initials: 'FR',
    },
    {
      id: 3,
      name: 'Saida Khan',
      role: 'Vice President',
      batch: 'Batch 2024',
      bio: 'Co-leading media initiatives and event coordination with passion for storytelling.',
      initials: 'SK',
    },
    {
      id: 4,
      name: 'Rabiul Islam',
      role: 'General Secretary',
      batch: 'Batch 2025',
      bio: 'Managing club operations and ensuring smooth coordination across all activities.',
      initials: 'RI',
    },
    {
      id: 5,
      name: 'Tasnia Ahmed',
      role: 'Treasurer',
      batch: 'Batch 2025',
      bio: 'Managing finances and budgeting for club events and projects.',
      initials: 'TA',
    },
    {
      id: 6,
      name: 'Karim Rahman',
      role: 'Event Coordinator',
      batch: 'Batch 2025',
      bio: 'Organizing workshops, seminars, and competitions throughout the year.',
      initials: 'KR',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main>
      <Header />

      <section className="min-h-[40vh] flex items-center pt-20 pb-12 bg-gradient-to-b from-jmc-green/10 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 text-jmc-navy dark:text-white">
              Executive <span className="text-gradient">Committee</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the dedicated team leading JMC Media Club
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {committee.map((member) => (
              <motion.div
                key={member.id}
                className="group overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 hover:border-jmc-green/50 transition-all hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="h-32 bg-gradient-to-br from-jmc-green/10 to-jmc-orange/10"></div>
                <div className="p-6 text-center -mt-12 relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-jmc-green to-jmc-orange rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-white dark:border-slate-900 shadow-lg">
                      {member.initials}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-jmc-navy dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-jmc-green font-semibold text-sm mb-2">{member.role}</p>
                  {member.batch && (
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{member.batch}</p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <button className="p-2 hover:bg-jmc-green/10 rounded-lg transition-colors">
                      <Mail size={20} className="text-jmc-green" />
                    </button>
                    <button className="p-2 hover:bg-jmc-green/10 rounded-lg transition-colors">
                      <Share2 size={20} className="text-jmc-green" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
