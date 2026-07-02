'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight, Camera, Mic, Video } from 'lucide-react'

export default function FeaturedEvents() {
  const events = [
    {
      id: 1,
      title: 'Photography Workshop',
      date: '2026-07-15',
      time: '2:00 PM',
      venue: 'JMC Lab',
      category: 'Workshop',
      icon: Camera,
      color: 'from-[#0f3d2e] to-[#1a6644]',
    },
    {
      id: 2,
      title: 'Guest Speaker Session',
      date: '2026-07-20',
      time: '3:30 PM',
      venue: 'Auditorium',
      category: 'Seminar',
      icon: Mic,
      color: 'from-[#0D1B2A] to-[#1e3a5a]',
    },
    {
      id: 3,
      title: 'Video Production Contest',
      date: '2026-07-28',
      time: '10:00 AM',
      venue: 'Media Center',
      category: 'Competition',
      icon: Video,
      color: 'from-[#0a2a1a] to-[#1a4a30]',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="py-24 bg-white dark:bg-jmc-card-dark">
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
            <span className="section-pill mb-3">Upcoming</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Explore our latest activities and workshops</p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group"
          >
            View All Events
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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
            return (
              <motion.div
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-bg-dark shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                {/* Banner */}
                <div className={`${event.color} h-40 flex items-end justify-between p-5 relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, #22C55E 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  />
                  <span className="relative px-3 py-1 bg-jmc-green/20 backdrop-blur-sm border border-jmc-green/30 rounded-full text-jmc-green text-xs font-semibold">
                    {event.category}
                  </span>
                  <div className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="text-white/80" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors duration-200">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-5">
                    <div className="flex items-center gap-3">
                      <Calendar size={15} className="text-jmc-green flex-shrink-0" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={15} className="text-jmc-green flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={15} className="text-jmc-green flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center gap-1.5 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile "View All" */}
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
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
