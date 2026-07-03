'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Newspaper, Radio, Trophy, BookOpen, ArrowRight, Dot } from 'lucide-react'
import Link from 'next/link'

const categoryIcon: Record<string, React.ElementType> = {
  'Club News':    Newspaper,
  'Announcement': Radio,
  'Achievement':  Trophy,
  'Media Update': BookOpen,
}

const newsItems = [
  {
    id: 1,
    category: 'Achievement',
    headline: 'JMC Media Club Wins "Best Student Media Organization 2025-26" at National Competition',
    source: 'JMC Newsroom',
    date: 'June 30, 2026',
    hot: true,
  },
  {
    id: 2,
    category: 'Announcement',
    headline: 'Applications Open: JMC Media Club Semester 2026 Membership Drive',
    source: 'JMC Newsroom',
    date: 'June 27, 2026',
    hot: true,
  },
  {
    id: 3,
    category: 'Club News',
    headline: 'Photography Workshop Draws Record 200+ Participants from Seven Departments',
    source: 'JMC Reporter',
    date: 'June 22, 2026',
  },
  {
    id: 4,
    category: 'Media Update',
    headline: 'JMC Podcast "The Media Lab" Surpasses 50,000 Total Downloads Milestone',
    source: 'JMC Digital',
    date: 'June 18, 2026',
  },
  {
    id: 5,
    category: 'Club News',
    headline: 'Guest Lecture Series: Three Renowned Journalists to Speak at Green University This July',
    source: 'JMC Events',
    date: 'June 15, 2026',
  },
  {
    id: 6,
    category: 'Achievement',
    headline: 'Student Documentary "Voices of the Unseen" Screened at International Film Festival',
    source: 'JMC Film Unit',
    date: 'June 10, 2026',
  },
  {
    id: 7,
    category: 'Media Update',
    headline: 'JMC Launches New Bilingual Newsletter: "Media Pulse" — English & Bangla Edition',
    source: 'JMC Publications',
    date: 'June 5, 2026',
  },
]

const catColor: Record<string, string> = {
  'Club News':    'text-blue-500 bg-blue-500/10 border-blue-500/20',
  'Announcement': 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  'Achievement':  'text-jmc-green bg-jmc-green/10 border-jmc-green/20',
  'Media Update': 'text-purple-500 bg-purple-500/10 border-purple-500/20',
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Newsroom() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-4">
              <Newspaper size={13} />
              Breaking Now
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              JMC <span className="text-gradient">Newsroom</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Club news, announcements, and media updates</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group flex-shrink-0">
            All News <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Top 2 featured news cards */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {newsItems.slice(0, 2).map((item, i) => {
              const Icon = categoryIcon[item.category] ?? Newspaper
              const cc = catColor[item.category] ?? catColor['Club News']
              return (
                <motion.div
                  key={item.id}
                  className="group p-6 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.hot && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold rounded-full uppercase tracking-wider mb-3">
                      🔴 Hot
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${cc}`}>
                      <Icon size={10} /> {item.category}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-jmc-navy dark:text-white group-hover:text-jmc-dark-green dark:group-hover:text-jmc-green transition-colors leading-snug mb-3">
                    {item.headline}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{item.source}</span>
                    <Dot size={14} />
                    <span>{item.date}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Scrollable news list */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-jmc-card-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Newsroom header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 dark:border-white/5">
              <div className="flex gap-1.5">
                {['bg-red-400', 'bg-amber-400', 'bg-green-400'].map(c => (
                  <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Latest Feed</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-jmc-green animate-pulse" />
                <span className="text-[11px] text-jmc-green font-semibold">Live</span>
              </div>
            </div>

            <motion.ul
              className="divide-y divide-gray-100 dark:divide-white/5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {newsItems.slice(2).map((item) => {
                const Icon = categoryIcon[item.category] ?? Newspaper
                const cc = catColor[item.category] ?? catColor['Club News']
                return (
                  <motion.li
                    key={item.id}
                    className="group flex items-start gap-4 px-6 py-4 hover:bg-jmc-green/2 dark:hover:bg-jmc-green/5 cursor-pointer transition-colors"
                    variants={itemVariants}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${cc.split(' ').slice(1).join(' ')}`}>
                      <Icon size={14} className={cc.split(' ')[0]} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-jmc-navy dark:text-white group-hover:text-jmc-dark-green dark:group-hover:text-jmc-green transition-colors leading-snug mb-1.5 line-clamp-2">
                        {item.headline}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-gray-400">
                        <span className={`font-semibold text-[10px] ${cc.split(' ')[0]}`}>{item.category}</span>
                        <Dot size={12} />
                        <span>{item.source}</span>
                        <Dot size={12} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 dark:text-gray-600 group-hover:text-jmc-green flex-shrink-0 mt-1 transition-colors" />
                  </motion.li>
                )
              })}
            </motion.ul>

            <div className="px-6 py-4 border-t border-gray-100 dark:border-white/5">
              <Link href="/blog" className="text-sm text-jmc-dark-green dark:text-jmc-green font-semibold flex items-center gap-1.5 hover:gap-3 transition-all">
                View Full Newsroom <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
