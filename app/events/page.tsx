'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

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
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
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
      description: 'Join us as renowned journalist shares insights on investigative journalism and ethical reporting.',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
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
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
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
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
  ]

  const filteredEvents = allEvents.filter(event => event.status === activeTab || activeTab === 'all')

  const tabs = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-[40vh] flex items-center pt-20 pb-12 bg-gradient-to-b from-jmc-green/10 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 text-jmc-navy dark:text-white">
              Our <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover workshops, seminars, competitions, and networking events designed to develop your media skills.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-gray-200 dark:border-slate-700">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-jmc-green border-jmc-green'
                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-jmc-navy dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="group overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 hover:border-jmc-green/50 transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${event.image} h-48 flex items-end justify-start p-4`}>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-jmc-green flex-shrink-0" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-jmc-green flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-jmc-green flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={16} className="text-jmc-green flex-shrink-0" />
                      <span>{event.attendees} interested</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-jmc-green to-jmc-orange text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
