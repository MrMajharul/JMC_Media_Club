'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-jmc-green/5 to-white dark:from-slate-900 dark:via-jmc-green/10 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-jmc-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-jmc-orange/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-jmc-navy/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <motion.div className="flex items-center gap-2" variants={itemVariants}>
                <Sparkles className="text-jmc-green" size={24} />
                <span className="text-jmc-green font-semibold text-sm tracking-wider">WELCOME TO JMC</span>
              </motion.div>

              <motion.h1
                className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-jmc-navy dark:text-white"
                variants={itemVariants}
              >
                Media Club <span className="text-gradient">Excellence</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Join the official student club of the Department of Journalism and Media Communication. Explore storytelling, develop leadership, and create impactful media at Green University of Bangladesh.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={itemVariants}
              >
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-jmc-green to-jmc-orange text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-jmc-green/50 transition-all transform hover:scale-105"
                >
                  Join JMC Media Club
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-jmc-green text-jmc-green font-semibold rounded-lg hover:bg-jmc-green/10 transition-all"
                >
                  Explore Events
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div className="hidden md:flex justify-center" variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-jmc-green to-jmc-orange rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative rounded-2xl p-6 bg-black border border-jmc-green/30 shadow-2xl shadow-jmc-green/20">
                <Image
                  src="/favicon.png"
                  alt="JMC Media Club logo"
                  width={320}
                  height={320}
                  className="w-64 h-auto lg:w-72"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-jmc-green rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-jmc-green rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
