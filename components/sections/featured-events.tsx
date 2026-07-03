'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight, Camera, Mic, Video } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Photography Workshop',
    date: '2026-07-15',
    time: '2:00 PM',
    venue: 'JMC Lab',
    category: 'Workshop',
    icon: Camera,
    gradient: 'from-[#0f3d2e] via-[#166534] to-[#1a6644]',
  },
  {
    id: 2,
    title: 'Guest Speaker Session',
    date: '2026-07-20',
    time: '3:30 PM',
    venue: 'Auditorium',
    category: 'Seminar',
    icon: Mic,
    gradient: 'from-[#0D1B2A] via-[#0f2233] to-[#1e3a5a]',
  },
  {
    id: 3,
    title: 'Video Production Contest',
    date: '2026-07-28',
    time: '10:00 AM',
    venue: 'Media Center',
    category: 'Competition',
    icon: Video,
    gradient: 'from-[#0a2a1a] via-[#166534] to-[#1a4a30]',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    display: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  }
}

export default function FeaturedEvents() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-4">Upcoming</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Explore our latest activities and workshops
            </p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group flex-shrink-0"
          >
            View All Events
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {events.map((event) => {
            const Icon = event.icon
            const date = formatDate(event.date)
            return (
              <motion.div
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-card-dark shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                {/* Banner */}
                <div className={`bg-gradient-to-br ${event.gradient} h-44 flex items-end justify-between p-5 relative overflow-hidden`}>
                  {/* Dot pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.3) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  />

                  {/* Date badge */}
                  <div className="relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 text-white">
                    <span className="font-bold text-xl leading-none">{date.day}</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase opacity-80">{date.month}</span>
                  </div>

                  <div className="relative flex items-center gap-2">
                    <span className="px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-semibold">
                      {event.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="text-white/80" size={18} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-lg mb-4 text-jmc-navy dark:text-white group-hover:text-jmc-dark-green dark:group-hover:text-jmc-green transition-colors duration-200 leading-snug">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-5">
                    <div className="flex items-center gap-3">
                      <Calendar size={14} className="text-jmc-green flex-shrink-0" />
                      <span>{date.display}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-jmc-green flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={14} className="text-jmc-green flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center gap-1.5 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
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
            href="/events"
            className="inline-flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            View All Events
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
