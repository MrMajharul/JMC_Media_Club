'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, type Variants, useInView } from 'framer-motion'
import { Trophy, Star, Award, Globe, BookOpen, Users, ArrowRight } from 'lucide-react'

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: 'Best Student Media Organization',
    detail: 'National Student Media Awards 2025–26',
    year: '2026',
    color: 'from-amber-500/20 to-amber-600/5',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    number: 1,
    unit: 'st',
    label: 'Place Nationally',
  },
  {
    id: 2,
    icon: Star,
    title: 'Excellence in Documentary Filmmaking',
    detail: '"Voices of the Unseen" – International Youth Film Festival',
    year: '2026',
    color: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10 border-purple-500/20',
    number: 1,
    unit: 'st',
    label: 'Award Winner',
  },
  {
    id: 3,
    icon: Globe,
    title: 'National Press Publication Award',
    detail: 'Best Campus Media Outlet – Bangladesh Journalists Association',
    year: '2025',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    number: 2,
    unit: 'nd',
    label: 'Runner Up',
  },
  {
    id: 4,
    icon: Award,
    title: 'Outstanding Photography Portfolio',
    detail: 'Green University Annual Research & Innovation Week',
    year: '2025',
    color: 'from-jmc-green/20 to-jmc-dark-green/5',
    iconColor: 'text-jmc-green',
    iconBg: 'bg-jmc-green/10 border-jmc-green/20',
    number: 50,
    unit: '+',
    label: 'Awards Total',
  },
  {
    id: 5,
    icon: BookOpen,
    title: 'Research Publication Recognition',
    detail: 'Media Studies Journal — 12 accepted student research papers',
    year: '2025',
    color: 'from-rose-500/20 to-rose-600/5',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    number: 12,
    unit: '+',
    label: 'Publications',
  },
  {
    id: 6,
    icon: Users,
    title: 'Community Impact Award',
    detail: 'Recognized for media literacy outreach programs reaching 2,000+ students',
    year: '2024',
    color: 'from-teal-500/20 to-teal-600/5',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    number: 2000,
    unit: '+',
    label: 'Students Reached',
  },
]

function AnimatedCount({ value, unit }: { value: number; unit: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1400
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) { setDisplay(value); clearInterval(timer) }
      else setDisplay(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{display.toLocaleString()}{unit}</span>
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AwardsAchievements() {
  return (
    <section className="py-24 bg-white dark:bg-jmc-card-dark relative overflow-hidden">
      {/* Subtle diagonal stripe */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{ backgroundImage: 'repeating-linear-gradient(135deg, #22C55E 0, #22C55E 1px, transparent 0, transparent 50%)', backgroundSize: '36px 36px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-pill mb-4">
            <Trophy size={13} />
            Recognition
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognitions that reflect our commitment to excellence in journalism, media production, and student leadership
          </p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                className="group relative p-7 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/20 bg-white dark:bg-jmc-bg-dark shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-400 hover:-translate-y-2 overflow-hidden cursor-pointer"
                variants={itemVariants}
              >
                {/* Background gradient blob */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r from-transparent via-jmc-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${achievement.iconBg}`}>
                      <Icon size={20} className={achievement.iconColor} />
                    </div>
                    <span className="text-xs font-bold text-gray-400 px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Animated number */}
                  <div className="mb-4">
                    <p className={`font-montserrat font-black text-4xl ${achievement.iconColor}`}>
                      <AnimatedCount value={achievement.number} unit={achievement.unit} />
                    </p>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{achievement.label}</p>
                  </div>

                  <h3 className="font-montserrat font-bold text-base text-jmc-navy dark:text-white mb-2 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{achievement.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
