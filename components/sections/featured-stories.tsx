'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Camera, Newspaper, BookOpen, Mic } from 'lucide-react'
import Link from 'next/link'

const categoryMeta: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'Interview':    { icon: Mic,       color: 'text-purple-500',  bg: 'bg-purple-500/10 border-purple-500/20' },
  'Feature':      { icon: Newspaper, color: 'text-blue-500',    bg: 'bg-blue-500/10 border-blue-500/20'    },
  'Case Study':   { icon: BookOpen,  color: 'text-amber-500',   bg: 'bg-amber-500/10 border-amber-500/20'  },
  'Photography':  { icon: Camera,    color: 'text-jmc-green',   bg: 'bg-jmc-green/10 border-jmc-green/20'  },
}

const stories = [
  {
    id: 1,
    category: 'Feature',
    title: 'Inside the Newsroom: How JMC Students Are Redefining Campus Journalism',
    summary: 'A deep dive into how our student journalists are breaking barriers, telling untold stories, and building a new media culture at Green University.',
    gradient: 'from-[#0D1B2A] via-[#0f2a3d] to-[#1e3a5a]',
    readTime: '6 min read',
    date: 'June 28, 2026',
    author: 'Faisal Riyad',
    featured: true,
  },
  {
    id: 2,
    category: 'Interview',
    title: '"Storytelling Is a Responsibility" — A Conversation with Award-Winning Journalist',
    summary: 'We sat down with one of Bangladesh\'s most respected journalists to explore the evolving landscape of digital media.',
    gradient: 'from-[#0f3d2e] via-[#166534] to-[#1a6644]',
    readTime: '8 min read',
    date: 'June 20, 2026',
    author: 'Saida Khan',
  },
  {
    id: 3,
    category: 'Case Study',
    title: 'From Concept to Screen: The Making of Our Award-Winning Documentary',
    summary: 'Behind the scenes of a 3-month production journey that earned JMC Media Club national recognition.',
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    readTime: '5 min read',
    date: 'June 12, 2026',
    author: 'Karim Rahman',
  },
  {
    id: 4,
    category: 'Photography',
    title: 'Visual Voices: A Semester in Frames from JMC\'s Photography Unit',
    summary: 'Our student photographers captured life, culture, and community across the semester in this curated visual essay.',
    gradient: 'from-[#0a2a1a] via-[#0f3d2e] to-[#166534]',
    readTime: '4 min read',
    date: 'June 5, 2026',
    author: 'Tanvir Hossain',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function FeaturedStories() {
  const featured = stories[0]
  const rest = stories.slice(1)

  return (
    <section className="py-24 bg-white dark:bg-jmc-card-dark">
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
            <span className="section-pill mb-4">Editorial</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              Featured <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-lg">
              Impactful journalism, interviews, and student publications from JMC Media Club
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group flex-shrink-0">
            All Stories <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Featured large card */}
          <motion.article
            className="lg:col-span-2 group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-bg-dark shadow-sm hover:shadow-2xl hover:shadow-jmc-green/10 transition-all duration-400 cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Image / Banner */}
            <div className={`bg-gradient-to-br ${featured.gradient} h-72 relative overflow-hidden`}>
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.12) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
              {/* Editorial lines */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  {(() => { const m = categoryMeta[featured.category] ?? categoryMeta['Feature']; const Icon = m.icon; return (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${m.bg} ${m.color} mb-2`}>
                      <Icon size={11} /> {featured.category}
                    </span>
                  )})()}
                  <p className="text-white font-bold text-xl md:text-2xl leading-snug max-w-lg font-montserrat">{featured.title}</p>
                </div>
              </div>
              <span className="absolute top-5 right-5 px-2.5 py-1 bg-jmc-green text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Featured</span>
            </div>

            <div className="p-7">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{featured.summary}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <div className="w-7 h-7 rounded-full bg-jmc-dark-green flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">{featured.author.slice(0,2).toUpperCase()}</span>
                  </div>
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <Link href={`/blog/${featured.id}`} className="text-jmc-dark-green dark:text-jmc-green font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Sidebar stories */}
          <div className="flex flex-col gap-5">
            {rest.map((story) => {
              const meta = categoryMeta[story.category] ?? categoryMeta['Feature']
              const Icon = meta.icon
              return (
                <motion.article
                  key={story.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-bg-dark shadow-sm hover:shadow-lg hover:shadow-jmc-green/10 transition-all duration-300 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  {/* Mini banner */}
                  <div className={`bg-gradient-to-br ${story.gradient} h-28 relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                    <div className="absolute bottom-3 left-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${meta.bg} ${meta.color}`}>
                        <Icon size={10} /> {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-montserrat font-bold text-sm text-jmc-navy dark:text-white group-hover:text-jmc-dark-green dark:group-hover:text-jmc-green transition-colors leading-snug mb-2 line-clamp-2">{story.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{story.summary}</p>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-gray-100 dark:border-white/5">
                      <span>{story.readTime}</span>
                      <Link href={`/blog/${story.id}`} className="text-jmc-dark-green dark:text-jmc-green font-semibold flex items-center gap-1">
                        Read <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
