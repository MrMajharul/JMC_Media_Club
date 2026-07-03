'use client'

import React, { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Play, Headphones, Video, Film, Mic, Clock, ArrowRight, Eye } from 'lucide-react'
import Link from 'next/link'

const typeIcon: Record<string, React.ElementType> = {
  Documentary: Film,
  Podcast:     Headphones,
  Interview:   Mic,
  'Short Film': Video,
  'Video Report': Video,
}

const typeBadge: Record<string, string> = {
  Documentary:    'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Podcast:        'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Interview:      'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Short Film':   'bg-rose-500/20 text-rose-400 border-rose-500/30',
  'Video Report': 'bg-jmc-green/20 text-jmc-green border-jmc-green/30',
}

const productions = [
  {
    id: 1,
    type: 'Documentary',
    title: 'Voices of the Unseen',
    description: 'A cinematic journey through the lives of underprivileged youth fighting for education in rural Bangladesh.',
    duration: '28:42',
    views: '12.4K',
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    year: 2026,
  },
  {
    id: 2,
    type: 'Podcast',
    title: 'The Media Lab Podcast – Ep. 12: Future of Digital Journalism',
    description: "JMC's flagship podcast discusses AI, ethics, and the evolving newsroom with two industry veterans.",
    duration: '52:18',
    views: '8.1K',
    gradient: 'from-[#2d1b00] via-[#4a2c00] to-[#6b3f00]',
    year: 2026,
  },
  {
    id: 3,
    type: 'Short Film',
    title: 'Shutter & Soul',
    description: 'A poetic short film exploring the relationship between a street photographer and the city that shaped them.',
    duration: '14:05',
    views: '6.7K',
    gradient: 'from-[#0f3d2e] via-[#166534] to-[#1a6644]',
    year: 2025,
  },
  {
    id: 4,
    type: 'Interview',
    title: 'In Conversation: Green University Journalism Alumni Roundtable',
    description: 'Five alumni now working in leading media houses share career lessons and advice for aspiring journalists.',
    duration: '38:21',
    views: '9.3K',
    gradient: 'from-[#0D1B2A] via-[#0f2233] to-[#1e3a5a]',
    year: 2026,
  },
  {
    id: 5,
    type: 'Video Report',
    title: 'Campus Chronicles: Green University Through the Lens',
    description: 'A comprehensive visual report documenting campus life, culture, and student experiences throughout the academic year.',
    duration: '22:15',
    views: '15.2K',
    gradient: 'from-[#0a2a1a] via-[#0f3d2e] to-[#1a4a30]',
    year: 2026,
  },
  {
    id: 6,
    type: 'Documentary',
    title: 'Breaking Silence: Women in Bangladeshi Media',
    description: 'An important documentary spotlighting the trailblazing women shaping the face of journalism in Bangladesh.',
    duration: '35:50',
    views: '18.9K',
    gradient: 'from-[#1a0a2a] via-[#2a0f4a] to-[#3d1a6e]',
    year: 2025,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function LatestProductions() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 bg-jmc-navy relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-jmc-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-jmc-dark-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-4">Productions</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-3">
              Latest <span className="text-gradient-light">Productions</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-lg">
              Documentaries, short films, podcasts, interviews and video reports by our students
            </p>
          </div>
          <Link href="/events" className="hidden md:flex items-center gap-2 text-jmc-green font-semibold text-sm hover:gap-3 transition-all group flex-shrink-0">
            View All <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Productions grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {productions.map((prod) => {
            const Icon = typeIcon[prod.type] ?? Play
            const badge = typeBadge[prod.type] ?? typeBadge['Video Report']
            const isHovered = hoveredId === prod.id

            return (
              <motion.div
                key={prod.id}
                className="group overflow-hidden rounded-2xl border border-white/5 hover:border-jmc-green/30 bg-white/3 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                onHoverStart={() => setHoveredId(prod.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -6 }}
              >
                {/* Thumbnail */}
                <div className={`bg-gradient-to-br ${prod.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                  {/* Pattern */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  {/* Dark overlay on hover */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-0'}`} />

                  {/* Play button */}
                  <motion.div
                    className="relative z-10 w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center"
                    animate={{ scale: isHovered ? 1.15 : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Play size={22} className="text-white fill-white ml-1" />
                  </motion.div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock size={11} /> {prod.duration}
                  </div>

                  {/* View count */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-semibold flex items-center gap-1.5">
                    <Eye size={11} /> {prod.views}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge}`}>
                      <Icon size={10} /> {prod.type}
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">{prod.year}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-sm text-white group-hover:text-jmc-green transition-colors leading-snug mb-2 line-clamp-2">
                    {prod.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-5 line-clamp-2">{prod.description}</p>
                  <button className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-semibold rounded-xl border border-jmc-green/25 hover:border-jmc-green text-jmc-green hover:bg-jmc-green hover:text-white transition-all duration-200">
                    <Play size={13} className="fill-current" />
                    Watch Now
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
