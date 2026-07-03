'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Quote, Camera } from 'lucide-react'

interface LeaderMessage {
  name: string
  role: string
  title: string
  image: string
  message: string
  initials: string
}

const leaders: LeaderMessage[] = [
  {
    name: 'Habib Mohammad Ali',
    role: 'Chairperson, JMC Department',
    title: "Chairperson's Message",
    image: '/executives/Chairperson.png',
    initials: 'HA',
    message:
      'As the Chairperson of the Department of Journalism and Media Communication, I am truly proud of the JMC Media Club and the remarkable work it continues to accomplish. This club serves as a vibrant platform where students can hone their skills in journalism, storytelling, and media production beyond the classroom. I encourage every student to actively participate, explore their creative potential, and contribute to building a strong media community at Green University of Bangladesh.',
  },
  {
    name: 'Jannatul Ferdous Meem',
    role: 'Lecturer, JMC Department',
    title: "Moderator's Message",
    image: '/executives/Moderator.png',
    initials: 'JM',
    message:
      'As the Moderator of the JMC Media Club, I am inspired by the passion and dedication our students bring to every initiative. The Media Club is more than just an organization — it is a family that nurtures creativity, fosters teamwork, and empowers future media professionals. Together, we are building a legacy of excellence in journalism and media communication. I look forward to guiding our members as they grow into skilled, responsible, and impactful storytellers.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function LeadershipMessages() {
  return (
    <section
      id="leadership-messages"
      className="py-24 bg-white dark:bg-jmc-card-dark relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-jmc-green/6 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-jmc-dark-green/8 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-pill mb-4">Leadership</span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 text-jmc-navy dark:text-white mt-4">
            Messages from{' '}
            <span className="text-gradient">Our Leaders</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Words of inspiration and guidance from the visionaries leading JMC Media Club
          </p>
        </motion.div>

        {/* Leader Cards */}
        <motion.div
          className="flex flex-col gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="group"
              variants={cardVariants}
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 bg-white dark:bg-jmc-bg-dark shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-500 hover:-translate-y-1">

                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-jmc-dark-green via-jmc-green to-jmc-dark-green" />

                <div className="p-8 md:p-10">
                  {/* Header: photo + info */}
                  <div className="flex items-center gap-6 mb-8">

                    {/* Profile photo */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-jmc-dark-green to-jmc-green opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-jmc-bg-dark bg-gradient-to-br from-jmc-dark-green to-jmc-green">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 80px, 96px"
                          onError={(e) => {
                            // Fallback handled by parent bg gradient
                            (e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                        {/* Fallback initials */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-jmc-navy dark:text-white font-bold text-xl select-none">{leader.initials}</span>
                        </div>
                      </div>
                    </div>

                    {/* Name and role */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Camera size={13} className="text-jmc-green" />
                        <span className="text-xs font-semibold text-jmc-green uppercase tracking-wider">
                          {leader.title}
                        </span>
                      </div>
                      <h3 className="font-montserrat font-bold text-xl md:text-2xl text-jmc-navy dark:text-white">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-0.5">{leader.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-1 w-9 h-9 text-jmc-green/10 dark:text-jmc-green/15" />
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-6 text-sm md:text-base italic">
                      &ldquo;{leader.message}&rdquo;
                    </p>
                  </div>

                  {/* Decorative bottom */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-jmc-green/25 to-transparent" />
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`rounded-full bg-jmc-green ${i === 1 ? 'w-3 h-1.5' : 'w-1.5 h-1.5'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
