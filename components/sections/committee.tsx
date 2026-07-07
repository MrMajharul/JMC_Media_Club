'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

interface CommitteeMember {
  id: number
  name: string
  role: string
  bio: string
  initials: string
  email: string
  photo: string
}

const committee: CommitteeMember[] = [
  { id: 1, name: 'Emu Akter Mim',      role: 'President',          bio: 'Leading the media club vision with passion',   initials: 'EM', email: 'emuaktermim@gmail.com', photo: '/executives/232033021.png' },
  { id: 2, name: 'Sadia Afrin Nijhum', role: 'Vice President',     bio: 'Co-leading media and creative initiatives',    initials: 'SN', email: 'nijhumsabira2002@gmail.com', photo: '/executives/232033020.png' },
  { id: 3, name: 'Sabikun Islam Shorna',role: 'General Secretary',  bio: 'Managing club operations & communications',    initials: 'SS', email: 'Sabikunswarnaa@gmail.com', photo: '/executives/241033002.png' },
  { id: 4, name: 'Sakib Al Hasan',     role: 'Joint Secretary',     bio: 'Supporting operations and student engagement', initials: 'SH', email: 'sakibalhasanjmc@gmail.com', photo: '/executives/242033016.png' },
]

function CommitteeCard({ member, variants }: { member: CommitteeMember; variants: Variants }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      className="group relative p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 dark:hover:border-jmc-green/20 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 text-center"
      variants={variants}
      whileHover={{ y: -6 }}
    >
      {/* Avatar */}
      <div className="mb-5 flex justify-center">
        <div className="relative w-20 h-20">
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-jmc-green/20 group-hover:border-jmc-green/60 transition-colors duration-300 scale-110" />
          {/* Avatar circle */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-jmc-dark-green to-jmc-green flex items-center justify-center shadow-lg group-hover:shadow-jmc-green/40 transition-shadow duration-300 overflow-hidden">
            {member.photo && !imgError ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-jmc-navy dark:text-white font-bold text-xl select-none">{member.initials}</span>
            )}
          </div>
        </div>
      </div>

      <h3 className="font-semibold text-base text-jmc-navy dark:text-white mb-1 leading-snug">
        {member.name}
      </h3>
      <p className="text-jmc-green font-semibold text-xs mb-2.5 uppercase tracking-wide">
        {member.role}
      </p>
      <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed mb-4">
        {member.bio}
      </p>

      {/* Email link */}
      <a
        href={`mailto:${member.email}`}
        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-jmc-green transition-colors duration-250"
      >
        <Mail size={12} />
        <span>Contact</span>
      </a>
    </motion.div>
  )
}

export default function Committee() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-3">Leadership</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              Executive <span className="text-gradient">Committee</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Meet the leaders driving our vision</p>
          </div>
          <Link
            href="/executives"
            className="hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group"
          >
            View Full Committee
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {committee.map((member) => (
            <CommitteeCard key={member.id} member={member} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Mobile link */}
        <motion.div
          className="mt-10 md:hidden text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/executives"
            className="inline-flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            View Full Committee
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
