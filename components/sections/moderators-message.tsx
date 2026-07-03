'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const moderator = {
  name: 'Jannatul Ferdous Meem',
  role: 'Lecturer, JMC Department',
  photo: '/executives/Moderator.png',
  initials: 'JFM',
  moto: 'Guiding creative minds, fostering teamwork, and empowering the next generation of storytellers.',
  message: `As the Moderator of the JMC Media Club, I am inspired by the passion and dedication our students bring to every single project.

The Media Club is more than just an student organization — it is a creative family where students learn to collaborate, think critically, and push the boundaries of media production. Our goal is to empower future media professionals with hands-on skillsets and the confidence to guide industry practices.

Together, we are building a legacy of media communication excellence. I look forward to supporting every member as they grow into responsible, creative and impactful leaders.`,
  signature: 'Jannatul Ferdous Meem',
}

export default function ModeratorsMessage() {
  return (
    <section className="py-24 bg-white dark:bg-jmc-card-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-jmc-green/5 rounded-full blur-3xl pointer-events-none" />

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
                    <span className="text-jmc-navy dark:text-white/10 font-black text-[8rem] font-montserrat select-none">{moderator.initials}</span>
                  </div>
                  <Image
                    src={moderator.photo}
                    alt={moderator.name}
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
                    <Sparkles size={14} className="text-jmc-green" />
                    <p className="text-jmc-green text-xs font-bold uppercase tracking-wider">Club Moderator</p>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-jmc-navy dark:text-white">{moderator.name}</h3>
                  <p className="text-gray-400 text-sm">{moderator.role}</p>
                </div>
              </div>

              {/* Moto card floating */}
              <motion.div
                className="absolute -bottom-5 -right-5 max-w-[220px] p-5 bg-jmc-dark-green rounded-2xl shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Quote size={18} className="text-jmc-green mb-2" />
                <p className="text-jmc-navy dark:text-white text-xs leading-relaxed font-medium italic">
                  &ldquo;{moderator.moto}&rdquo;
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
            <span className="section-pill mb-5">Moderator Guidance</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-jmc-navy dark:text-white mt-4 mb-8">
              Moderator&apos;s <span className="text-gradient">Message</span>
            </h2>

            {/* Message */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-jmc-green/10" />
              <div className="pl-4 space-y-4 border-l-2 border-jmc-green/25">
                {moderator.message.trim().split('\n\n').map((para, i) => (
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
                  src={moderator.photo}
                  alt={moderator.name}
                  fill
                  className="object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-jmc-dark-green to-jmc-green flex items-center justify-center -z-10">
                  <span className="text-jmc-navy dark:text-white font-bold text-sm">{moderator.initials}</span>
                </div>
              </div>
              <div>
                <p className="font-montserrat font-bold text-jmc-navy dark:text-white">{moderator.name}</p>
                <p className="text-jmc-green text-sm font-semibold">{moderator.role}</p>
              </div>
            </div>

            <Link
              href="/executives"
              className="inline-flex items-center gap-2 mt-7 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group"
            >
              Explore Executive Panel
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
