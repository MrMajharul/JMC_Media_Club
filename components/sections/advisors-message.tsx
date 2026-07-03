'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const advisor = {
  name: 'Habib Mohammad Ali',
  role: 'Chairperson & Chief Advisor, JMC Department',
  photo: '/executives/Chairperson.png',
  initials: 'HMA',
  vision: 'To nurture media practitioners who lead with integrity, innovate with technology, and advocate for truth.',
  message: `As the Chairperson of the Department of Journalism and Media Communication, it is a pleasure to see the JMC Media Club grow into such a vibrant ecosystem.

The classroom teaches theory, but the media club is where students test their courage, refine their storytelling skills, and learn the true responsibility of being a voice for the community. Our academic vision is to build a modern, high-tech hub where traditional journalism values meet digital innovation.

I encourage every student to challenge themselves, experiment with new media formats, and leverage this platform to build a portfolio that stands out nationally and globally.`,
  signature: 'Habib Mohammad Ali',
}

export default function AdvisorsMessage() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-jmc-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Left: Message */}
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-5">Academic Vision</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-jmc-navy dark:text-white mt-4 mb-8">
              Faculty <span className="text-gradient">Advisor&apos;s Message</span>
            </h2>

            {/* Message */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-jmc-green/10" />
              <div className="pl-4 space-y-4 border-l-2 border-jmc-green/25">
                {advisor.message.trim().split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-jmc-dark-green to-jmc-green flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">{advisor.initials}</span>
              </div>
              <div>
                <p className="font-montserrat font-bold text-jmc-navy dark:text-white">{advisor.name}</p>
                <p className="text-jmc-green text-sm font-semibold">{advisor.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
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
                    <span className="text-white/10 font-black text-[8rem] font-montserrat select-none">{advisor.initials}</span>
                  </div>
                  <Image
                    src={advisor.photo}
                    alt={advisor.name}
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
                    <BookOpen size={14} className="text-jmc-green" />
                    <p className="text-jmc-green text-xs font-bold uppercase tracking-wider">Chief Advisor</p>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-jmc-navy dark:text-white">{advisor.name}</h3>
                  <p className="text-gray-400 text-sm">{advisor.role}</p>
                </div>
              </div>

              {/* Vision card floating */}
              <motion.div
                className="absolute -bottom-5 -left-5 max-w-[220px] p-5 bg-jmc-navy rounded-2xl shadow-xl border border-white/5"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Quote size={18} className="text-jmc-green mb-2" />
                <p className="text-white/90 text-xs leading-relaxed font-medium italic">
                  &ldquo;{advisor.vision}&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
