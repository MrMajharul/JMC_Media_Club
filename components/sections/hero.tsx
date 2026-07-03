'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Camera, Users, Trophy, BookOpen, Play } from 'lucide-react'

const floatingBadges = [
  { icon: Users,    value: '500+',  label: 'Members',       delay: 0 },
  { icon: Trophy,   value: '50+',   label: 'Achievements',  delay: 0.15 },
  { icon: Camera,   value: '40+',   label: 'Events/Year',   delay: 0.3 },
  { icon: BookOpen, value: '100+',  label: 'Projects',      delay: 0.45 },
]

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-jmc-navy">

      {/* ── Grid overlay ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* ── Ambient glows ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-jmc-dark-green/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-jmc-green/8 blur-3xl" />

        {/* Aperture rings – right side */}
        {[700, 520, 370].map((size, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 rounded-full border border-jmc-green/[0.12] animate-aperture-pulse"
            style={{
              width: size,
              height: size,
              right: `-${size * 0.14}px`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        {/* Diagonal accent */}
        <div
          className="absolute top-0 left-[40%] w-px h-full opacity-[0.06]"
          style={{ background: 'linear-gradient(to bottom, transparent, #22C55E 40%, transparent)' }}
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Left: Copy ─────────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* Pill badge */}
            <motion.div variants={itemVariants}>
              <span className="section-pill">
                <Camera size={14} />
                Official Media Club · Green University
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.06] text-white"
              variants={itemVariants}
            >
              Capture.{' '}
              <span className="text-gradient-light">Create.</span>
              <br />
              Communicate.{' '}
              <span className="text-gradient-light">Inspire.</span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              JMC Media Club empowers future journalists, media professionals,
              photographers, storytellers, and creative leaders through innovation,
              collaboration, and real-world experience.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link
                href="/membership"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-jmc-dark-green hover:bg-[#15803d] text-white font-semibold rounded-xl shadow-lg shadow-jmc-green/25 hover:shadow-jmc-green/40 transition-all duration-200 hover:-translate-y-0.5"
                id="hero-join-cta"
              >
                Join JMC Media Club
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-jmc-green/40 text-white hover:text-jmc-green font-semibold rounded-xl backdrop-blur-sm bg-white/5 hover:bg-jmc-green/5 transition-all duration-200"
                id="hero-events-cta"
              >
                <Play size={15} className="fill-current" />
                Explore Events
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {['EM', 'SN', 'SS', 'SH'].map((init) => (
                  <div key={init} className="w-8 h-8 rounded-full bg-gradient-to-br from-jmc-dark-green to-jmc-green border-2 border-jmc-navy flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">{init}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> active members joined
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Logo card + Stats ───────────────────────────────── */}
          <motion.div
            className="hidden lg:flex flex-col items-center gap-8"
            variants={itemVariants}
          >
            {/* Logo display */}
            <div className="relative">
              {/* Glow layers */}
              <div className="absolute -inset-12 rounded-full bg-jmc-green/5 blur-2xl" />
              <div className="absolute -inset-5 rounded-full border border-jmc-green/15" />
              <div className="absolute -inset-10 rounded-full border border-jmc-green/8" />

              {/* Floating logo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-60 h-60 rounded-full bg-white shadow-2xl shadow-jmc-green/20 border-4 border-white/80 flex items-center justify-center overflow-hidden"
              >
                {/* Inner green ring */}
                <div className="absolute inset-2 rounded-full border-2 border-jmc-green/10" />
                <Image
                  src="/favicon.png"
                  alt="JMC Media Club"
                  width={200}
                  height={200}
                  className="w-52 h-52 object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
              {floatingBadges.map(({ icon: Icon, value, label, delay }) => (
                <motion.div
                  key={label}
                  className="group glass border border-white/8 hover:border-jmc-green/30 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + delay, duration: 0.5, ease: 'backOut' }}
                >
                  <div className="flex justify-center mb-2.5">
                    <div className="p-2 bg-jmc-green/15 rounded-xl group-hover:bg-jmc-green/25 transition-colors">
                      <Icon size={15} className="text-jmc-green" />
                    </div>
                  </div>
                  <p className="font-montserrat font-bold text-xl text-white">{value}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-[10px] text-gray-600 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-jmc-green/25 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-jmc-green rounded-full"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
