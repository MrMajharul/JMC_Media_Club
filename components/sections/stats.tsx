'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, type Variants, useInView } from 'framer-motion'
import { Users, Calendar, Trophy, Zap } from 'lucide-react'

const stats = [
  { icon: Users,    label: 'Active Members',     value: 500,  suffix: '+', desc: 'passionate student members' },
  { icon: Calendar, label: 'Events Per Year',    value: 40,   suffix: '+', desc: 'workshops, seminars & more' },
  { icon: Trophy,   label: 'Achievements',        value: 50,   suffix: '+', desc: 'awards & recognitions' },
  { icon: Zap,      label: 'Media Projects',      value: 100,  suffix: '+', desc: 'productions completed' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1600
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Stats() {
  return (
    <section className="py-20 bg-white dark:bg-jmc-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-pill mb-4">By the Numbers</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-jmc-navy dark:text-white mt-4">
            Growing <span className="text-gradient">Together</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="group relative p-7 rounded-2xl bg-jmc-light dark:bg-jmc-bg-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 dark:hover:border-jmc-green/20 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden text-center"
                variants={itemVariants}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full bg-gradient-to-r from-transparent via-jmc-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-13 h-13 p-3.5 rounded-2xl bg-jmc-green/10 group-hover:bg-jmc-green/15 transition-colors duration-300">
                    <Icon className="text-jmc-dark-green group-hover:text-jmc-green transition-colors duration-300" size={22} />
                  </div>
                </div>

                {/* Number */}
                <p className="font-montserrat font-bold text-4xl text-jmc-navy dark:text-white mb-1.5 tabular-nums">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-semibold text-sm text-jmc-dark dark:text-gray-200 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
