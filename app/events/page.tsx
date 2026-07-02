'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Calendar, Clock, MapPin, Users, Camera, Mic, Video, Newspaper } from 'lucide-react'

const categoryIcon: Record<string, React.ElementType> = {
  Workshop:    Camera,
  Seminar:     Mic,
  Competition: Video,
  default:     Newspaper,
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const allEvents = [
    {
      id: 1,
      title: 'Photography Workshop: Capturing Moments',
      date: '2026-07-15',
      time: '2:00 PM - 5:00 PM',
      venue: 'JMC Lab',
      category: 'Workshop',
      status: 'upcoming',
      attendees: 45,
      description: 'Learn the fundamentals of photography and digital imaging with industry professionals.',
      color: 'from-[#0f3d2e] to-[#1a6644]',
    },
    {
      id: 2,
      title: 'Guest Speaker: Award-Winning Journalist',
      date: '2026-07-20',
      time: '3:30 PM - 5:00 PM',
      venue: 'Main Auditorium',
      category: 'Seminar',
      status: 'upcoming',
      attendees: 200,
      description: 'Join us as a renowned journalist shares insights on investigative journalism and ethical reporting.',
      color: 'from-[#0D1B2A] to-[#1e3a5a]',
    },
    {
      id: 3,
      title: 'Video Production Contest',
      date: '2026-07-28',
      time: '10:00 AM - 4:00 PM',
      venue: 'Media Center',
      category: 'Competition',
      status: 'upcoming',
      attendees: 75,
      description: 'Create and submit your best video production. Winners get prizes and publication.',
      color: 'from-[#0a2a1a] to-[#1a4a30]',
    },
    {
      id: 4,
      title: 'Social Media Marketing Masterclass',
      date: '2026-08-05',
      time: '2:00 PM - 4:00 PM',
      venue: 'JMC Lab',
      category: 'Workshop',
      status: 'upcoming',
      attendees: 60,
      description: 'Master the strategies to grow your audience on social media platforms.',
      color: 'from-[#0f3d2e] to-[#166534]',
    },
  ]

  const filteredEvents = allEvents.filter(e => e.status === activeTab || activeTab === 'all')

  const tabs = [
    { id: 'all',      label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
  ]

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">Our Events</span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              Upcoming <span className="text-gradient-light">Events</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Discover workshops, seminars, competitions, and networking events designed to develop your media skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events list */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <div className="flex gap-2 mb-12 p-1.5 bg-white dark:bg-jmc-card-dark rounded-xl border border-gray-100 dark:border-white/5 w-fit shadow-sm">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-jmc-dark-green text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-jmc-navy dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredEvents.map((event, index) => {
              const Icon = categoryIcon[event.category] ?? categoryIcon.default
              return (
                <motion.div
                  key={event.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-card-dark shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* Banner */}
                  <div className={`${event.color} h-48 flex items-end justify-between p-5 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, #22C55E 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />
                    <div className="flex gap-2 relative">
                      <span className="px-3 py-1 bg-jmc-green/20 backdrop-blur-sm border border-jmc-green/30 rounded-full text-jmc-green text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <div className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="text-white/80" size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="font-semibold text-xl mb-3 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400 mb-5">
                      <div className="flex items-center gap-3">
                        <Calendar size={15} className="text-jmc-green flex-shrink-0" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={15} className="text-jmc-green flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={15} className="text-jmc-green flex-shrink-0" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users size={15} className="text-jmc-green flex-shrink-0" />
                        <span>{event.attendees} interested</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-jmc-green/30 hover:-translate-y-0.5">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
