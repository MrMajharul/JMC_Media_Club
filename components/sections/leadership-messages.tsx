'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface LeaderMessage {
  name: string
  role: string
  title: string
  image: string
  message: string
}

const leaders: LeaderMessage[] = [
  {
    name: 'Habib Mohammad Ali',
    role: 'Chairperson, JMC',
    title: "Chairperson's Message",
    image: '/executives/Chairperson.png',
    message:
      'As the Chairperson of the Department of Journalism and Media Communication, I am truly proud of the JMC Media Club and the remarkable work it continues to accomplish. This club serves as a vibrant platform where students can hone their skills in journalism, storytelling, and media production beyond the classroom. I encourage every student to actively participate, explore their creative potential, and contribute to building a strong media community at Green University of Bangladesh.',
  },
  {
    name: 'Jannatul Ferdous Meem',
    role: 'Lecturer, JMC',
    title: "Moderator's Message",
    image: '/executives/Moderator.png',
    message:
      'As the Moderator of the JMC Media Club, I am inspired by the passion and dedication our students bring to every initiative. The Media Club is more than just an organization — it is a family that nurtures creativity, fosters teamwork, and empowers future media professionals. Together, we are building a legacy of excellence in journalism and media communication. I look forward to guiding our members as they grow into skilled, responsible, and impactful storytellers.',
  },
]

export default function LeadershipMessages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="leadership-messages"
      className="py-24 bg-gradient-to-b from-white via-jmc-green/5 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-jmc-green/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-jmc-orange/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 text-jmc-navy dark:text-white">
            Messages from{' '}
            <span className="text-gradient">Our Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Words of inspiration and guidance from the visionaries leading JMC
            Media Club
          </p>
        </motion.div>

        {/* Leader Cards */}
        <motion.div
          className="flex flex-col gap-10 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="group relative"
              variants={cardVariants}
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-jmc-green/10 transition-all duration-500">
                {/* Top gradient accent bar */}
                <div
                  className={`h-1.5 w-full ${
                    index === 0
                      ? 'bg-gradient-to-r from-jmc-green via-jmc-green/80 to-jmc-orange'
                      : 'bg-gradient-to-r from-jmc-orange via-jmc-orange/80 to-jmc-green'
                  }`}
                ></div>

                <div className="p-8 md:p-10">
                  {/* Header: photo + info */}
                  <div className="flex items-center gap-6 mb-8">
                    {/* Profile photo */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute -inset-1 rounded-full ${
                          index === 0
                            ? 'bg-gradient-to-br from-jmc-green to-jmc-orange'
                            : 'bg-gradient-to-br from-jmc-orange to-jmc-green'
                        } opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 80px, 96px"
                        />
                      </div>
                    </div>

                    {/* Name and role */}
                    <div>
                      <h3 className="font-montserrat font-bold text-xl md:text-2xl text-jmc-navy dark:text-white">
                        {leader.title}
                      </h3>
                      <p className="font-semibold text-jmc-green mt-1">
                        {leader.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote
                      className={`absolute -top-2 -left-1 w-10 h-10 ${
                        index === 0
                          ? 'text-jmc-green/15'
                          : 'text-jmc-orange/15'
                      }`}
                    />
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-6 text-base md:text-lg italic">
                      &ldquo;{leader.message}&rdquo;
                    </p>
                  </div>

                  {/* Decorative bottom element */}
                  <div className="mt-8 flex items-center gap-3">
                    <div
                      className={`h-0.5 flex-1 ${
                        index === 0
                          ? 'bg-gradient-to-r from-jmc-green/40 to-transparent'
                          : 'bg-gradient-to-r from-jmc-orange/40 to-transparent'
                      }`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-jmc-green/40' : 'bg-jmc-orange/40'
                      }`}
                    ></div>
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
