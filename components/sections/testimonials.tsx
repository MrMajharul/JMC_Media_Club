'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Nusrat Jahan',
    role: 'Alumni, JMC 2023',
    org: 'Journalist, Daily Prothom Alo',
    quote: 'JMC Media Club was the turning point of my career. The workshops, real reporting opportunities, and mentorship I received transformed me from a student into a confident journalist. The skills I built here took me directly to a national newspaper.',
    rating: 5,
    initial: 'NJ',
    gradient: 'from-jmc-dark-green to-jmc-green',
  },
  {
    id: 2,
    name: 'Rakibul Islam',
    role: 'Member, 2024–25',
    org: 'Aspiring Documentary Filmmaker',
    quote: 'The documentary filmmaking unit in JMC Media Club gave me my first camera, my first crew, and my first audience. "Voices of the Unseen" showed at an international festival — something I never imagined possible as a student.',
    rating: 5,
    initial: 'RI',
    gradient: 'from-[#0D1B2A] to-[#1e3a5a]',
  },
  {
    id: 3,
    name: 'Prof. Habib Mohammad Ali',
    role: 'Chairperson, JMC Dept.',
    org: 'Green University of Bangladesh',
    quote: "As faculty, I witness the JMC Media Club's transformative effect every semester. Students arrive with curiosity and leave as polished media professionals. The club's commitment to ethical journalism sets a standard for the entire department.",
    rating: 5,
    initial: 'HA',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
  },
  {
    id: 4,
    name: 'Fahmida Akter',
    role: 'Alumni, JMC 2024',
    org: 'Digital Content Creator',
    quote: 'Being vice president of JMC Media Club taught me what no classroom could — leadership under pressure, managing creative teams, and the power of a story told with integrity. My 50K YouTube subscribers are a testament to what JMC made possible.',
    rating: 5,
    initial: 'FA',
    gradient: 'from-[#2d1b00] to-[#6b3f00]',
  },
  {
    id: 5,
    name: 'Sanjib Roy',
    role: 'Industry Partner',
    org: 'Editor, Digital Dawn Media',
    quote: 'When we recruit from Green University, we specifically look for JMC Media Club members. Their training, professionalism, and storytelling instincts are immediately apparent. JMC graduates are our most reliable hires.',
    rating: 5,
    initial: 'SR',
    gradient: 'from-[#0a2a1a] to-[#1a4a30]',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setDirection(1)
    setCurrent(i => (i + 1) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  const slideVariants: Variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80, transition: { duration: 0.3 } }),
  }

  return (
    <section className="py-24 bg-jmc-navy relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-jmc-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-jmc-dark-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-pill mb-4">Voices</span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-4">
            What They <span className="text-gradient-light">Say</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            From alumni to industry partners — hear from those who've experienced JMC Media Club firsthand
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-14 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 left-8 text-jmc-green/20 w-12 h-12" />

              {/* Stars */}
              <div className="flex gap-1 mb-8 pl-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed italic font-light mb-10 pl-2">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-5 pl-2">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-base">{t.initial}</span>
                </div>
                <div>
                  <p className="font-montserrat font-bold text-white text-base">{t.name}</p>
                  <p className="text-jmc-green text-sm font-semibold">{t.role}</p>
                  <p className="text-gray-400 text-xs">{t.org}</p>
                </div>
              </div>

              {/* Decorative bottom dots */}
              <div className="absolute bottom-8 right-8 flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-1.5 bg-jmc-green' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 rounded-full bg-white/8 hover:bg-jmc-green border border-white/10 hover:border-jmc-green text-white flex items-center justify-center transition-all duration-200 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 rounded-full bg-white/8 hover:bg-jmc-green border border-white/10 hover:border-jmc-green text-white flex items-center justify-center transition-all duration-200 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Thumbnail avatars */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((tm, i) => (
            <button
              key={tm.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tm.gradient} flex items-center justify-center flex-shrink-0 transition-all duration-200 ${i === current ? 'ring-2 ring-jmc-green ring-offset-2 ring-offset-jmc-navy scale-110' : 'opacity-50 hover:opacity-80'}`}
            >
              <span className="text-white text-[10px] font-bold">{tm.initial}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
