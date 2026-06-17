'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'

export default function FeaturedEvents() {
  const events = [
    {
      id: 1,
      title: 'Photography Workshop',
      date: '2026-07-15',
      time: '2:00 PM',
      venue: 'JMC Lab',
      category: 'Workshop',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'Guest Speaker Session',
      date: '2026-07-20',
      time: '3:30 PM',
      venue: 'Auditorium',
      category: 'Seminar',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      id: 3,
      title: 'Video Production Contest',
      date: '2026-07-28',
      time: '10:00 AM',
      venue: 'Media Center',
      category: 'Competition',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
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
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Explore our latest activities and workshops</p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center gap-2 text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            View All Events
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="group overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 hover:border-jmc-green/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className={`${event.image} h-40 flex items-end justify-start p-4`}>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {event.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-jmc-green flex-shrink-0" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-jmc-green flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-jmc-green flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="text-jmc-green font-semibold text-sm hover:text-jmc-orange transition-colors flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
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
            href="/events"
            className="inline-flex items-center gap-2 text-jmc-green font-semibold hover:gap-3 transition-all"
          >
            View All Events
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
