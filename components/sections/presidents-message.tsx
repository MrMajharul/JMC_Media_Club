'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// President data — update photo path as needed
const president = {
  name: 'Emu Akter Mim',
  role: 'President, JMC Media Club',
  batch: 'Journalism & Media Communication',
  photo: '/executives/232033021.png',
  initials: 'EM',
  quote: 'Every story has the power to change a mind, move a heart, and shift a world.',
  message: `Welcome to JMC Media Club — where stories are born, leaders are made, and voices find their purpose.

When I took on the responsibility of leading this club, I made one promise: to make JMC the place where every student who loves journalism, photography, filmmaking, or communication finds not just a club, but a home.

This year, we have grown beyond expectations — organizing 40+ events, launching our podcast, screening a documentary at an international festival, and winning national recognition. But the real achievement is the 500+ passionate individuals who showed up every week to learn, create, and inspire each other.

To every new member: your story matters. Amplify your voice. The world is listening.`,
  signature: 'Emu Akter Mim',
}

export default function PresidentMessage() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-jmc-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Left: Portrait */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Photo card */}
            <div className="relative inline-block">
              {/* Outer ring */}
              <div className="absolute -inset-3 rounded-3xl border border-jmc-green/15" />
              {/* Card */}
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-jmc-dark-green/10 to-jmc-navy/20 border border-gray-100 dark:border-white/5 shadow-2xl">
                {/* Photo area */}
                <div className="h-80 bg-gradient-to-br from-jmc-dark-green to-jmc-navy relative overflow-hidden flex items-end justify-center">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 font-black text-[8rem] font-montserrat select-none">{president.initials}</span>
                  </div>
                  <Image
                    src={president.photo}
                    alt={president.name}
                    fill
                    className="object-cover object-top"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-jmc-navy/80 to-transparent" />
                </div>

                {/* Name badge */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <p className="text-jmc-green text-xs font-bold uppercase tracking-wider">Club President</p>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-jmc-navy dark:text-white">{president.name}</h3>
                  <p className="text-gray-400 text-sm">{president.batch}</p>
                </div>
              </div>

              {/* Quote card floating */}
              <motion.div
                className="absolute -bottom-5 -right-5 max-w-[200px] p-5 bg-jmc-dark-green rounded-2xl shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Quote size={18} className="text-jmc-green mb-2" />
                <p className="text-white text-xs leading-relaxed font-medium italic">
                  &ldquo;{president.quote}&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Message */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-5">Leadership Message</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-jmc-navy dark:text-white mt-4 mb-8">
              A Message from Our <span className="text-gradient">President</span>
            </h2>

            {/* Message */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-jmc-green/10" />
              <div className="pl-4 space-y-4 border-l-2 border-jmc-green/25">
                {president.message.trim().split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg border border-jmc-green/20">
                <Image
                  src={president.photo}
                  alt={president.name}
                  fill
                  className="object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-jmc-dark-green to-jmc-green flex items-center justify-center -z-10">
                  <span className="text-white font-bold text-sm">{president.initials}</span>
                </div>
              </div>
              <div>
                <p className="font-montserrat font-bold text-jmc-navy dark:text-white">{president.name}</p>
                <p className="text-jmc-green text-sm font-semibold">{president.role}</p>
              </div>
            </div>

            <Link
              href="/executives"
              className="inline-flex items-center gap-2 mt-7 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group"
            >
              Meet the Executive Committee
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
