'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Camera, Users, Trophy, BookOpen } from 'lucide-react'

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const floatingBadges = [
    { icon: Users,   value: '500+',  label: 'Members',     delay: 0 },
    { icon: Trophy,  value: '50+',   label: 'Achievements',delay: 0.3 },
    { icon: Camera,  value: '40+',   label: 'Events/Year', delay: 0.6 },
    { icon: BookOpen,value: '100+',  label: 'Projects',    delay: 0.9 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-jmc-navy">
      {/* ── Editorial grid overlay ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Aperture / camera-lens ring shapes ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large outer ring */}
        <div
          className="absolute top-1/2 right-[-12%] w-[700px] h-[700px] -translate-y-1/2 rounded-full border-[1.5px] border-jmc-green/10 animate-aperture-pulse"
          style={{ animationDelay: '0s' }}
        />
        {/* Mid ring */}
        <div
          className="absolute top-1/2 right-[-8%] w-[520px] h-[520px] -translate-y-1/2 rounded-full border-[1.5px] border-jmc-green/15 animate-aperture-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        {/* Inner ring */}
        <div
          className="absolute top-1/2 right-[-3%] w-[360px] h-[360px] -translate-y-1/2 rounded-full border-[1px] border-jmc-green/20 animate-aperture-pulse"
          style={{ animationDelay: '3s' }}
        />

        {/* Top-left ambient glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-jmc-dark-green/20 blur-3xl" />
        {/* Bottom-right ambient glow */}
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-jmc-green/10 blur-3xl" />

        {/* Diagonal accent line */}
        <div
          className="absolute top-0 left-[38%] w-px h-full opacity-[0.07]"
          style={{ background: 'linear-gradient(to bottom, transparent, #22C55E 40%, transparent)' }}
        />
      </div>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Left: Text ─────────────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="space-y-7">

            {/* Section pill */}
            <motion.div variants={itemVariants}>
              <span className="section-pill">
                <Camera size={14} />
                Welcome to JMC Media Club
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-white"
              variants={itemVariants}
            >
              Capture.{' '}
              <span className="text-gradient-light block">Create.</span>
              Communicate.{' '}
              <span className="text-gradient-light">Inspire.</span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              JMC Media Club empowers future journalists, media professionals, photographers,
              storytellers, and creative leaders through innovation, collaboration, and real-world experience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={itemVariants}
            >
              <Link
                href="/membership"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-jmc-green hover:bg-[#16a34a] text-white font-semibold rounded-xl shadow-lg shadow-jmc-green/30 hover:shadow-jmc-green/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                Join JMC Media Club
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-jmc-green/50 text-white hover:text-jmc-green font-semibold rounded-xl backdrop-blur-sm bg-white/5 hover:bg-jmc-green/5 transition-all duration-200"
              >
                Explore Events
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Logo + Stats ─────────────────────────────────────────── */}
          <motion.div
            className="hidden lg:flex flex-col items-center gap-8"
            variants={itemVariants}
          >
            {/* Logo card */}
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute -inset-8 rounded-full bg-jmc-green/8 blur-2xl" />
              <div className="absolute -inset-4 rounded-full border border-jmc-green/20" />
              <div className="absolute -inset-8 rounded-full border border-jmc-green/10" />

              {/* Logo container */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-56 h-56 rounded-full border-2 border-jmc-green/30 bg-jmc-navy/80 backdrop-blur-sm shadow-2xl shadow-jmc-green/20 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src="/favicon.png"
                  alt="JMC Media Club logo"
                  width={200}
                  height={200}
                  className="w-44 h-44 object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {floatingBadges.map(({ icon: Icon, value, label, delay }) => (
                <motion.div
                  key={label}
                  className="glass border border-white/10 hover:border-jmc-green/30 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + delay, duration: 0.5 }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-jmc-green/10 rounded-lg">
                      <Icon size={16} className="text-jmc-green" />
                    </div>
                  </div>
                  <p className="font-montserrat font-bold text-xl text-white">{value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-jmc-green/30 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-jmc-green rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
