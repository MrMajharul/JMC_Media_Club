'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Target, Eye, Users, Award, CheckCircle, Camera, Newspaper, Mic } from 'lucide-react'

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the leading student media organization at Green University, fostering excellence in journalism, storytelling, and professional development while building a community of passionate media practitioners.',
    accent: 'from-jmc-dark-green/20 to-jmc-green/10',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To cultivate skilled storytellers, develop future media leaders, and create impactful content that informs, entertains, and inspires our university community while maintaining ethical journalism standards.',
    accent: 'from-jmc-navy/10 to-jmc-dark-green/10',
  },
  {
    icon: Users,
    title: 'Our Community',
    text: 'A family of 500+ members united by a passion for media, journalism, photography, and digital storytelling — collaborating across disciplines and backgrounds.',
    accent: 'from-jmc-green/10 to-jmc-dark-green/20',
  },
]

const achievements = [
  'Winner of Best Student Media Organization 2024',
  'Published 50+ articles and features this year',
  'Organized 40+ events, workshops, and seminars',
  'Mentored 100+ journalism and media students',
  'Expanded active membership to 500+ students',
]

const values = ['Innovation', 'Integrity', 'Inclusion', 'Impact']

const focusAreas = [
  { icon: Camera,    title: 'Photography', desc: 'Visual storytelling through the lens' },
  { icon: Newspaper, title: 'Journalism',  desc: 'Ethical, impactful reporting' },
  { icon: Mic,       title: 'Broadcasting', desc: 'Voices that inform and inspire' },
]

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">Our Story</span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              About <span className="text-gradient-light">JMC Media Club</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl">
              The Department of Journalism and Media Communication&apos;s premier student organization,
              dedicated to fostering excellence in journalism, media production, and professional
              development since its establishment.
            </p>

            {/* Focus pillars */}
            <div className="flex flex-wrap gap-3 mt-8">
              {focusAreas.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 backdrop-blur-sm">
                  <Icon size={13} className="text-jmc-green" />
                  <span className="text-white text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission / Community */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-4">Who We Are</span>
            <h2 className="font-montserrat font-bold text-4xl mt-4 text-jmc-navy dark:text-white">
              Built on <span className="text-gradient">Purpose</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, text, accent }, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                {/* Accent bg blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />

                <div className="relative">
                  <div className="w-14 h-14 mb-6 p-3.5 bg-jmc-green/10 group-hover:bg-jmc-green/15 rounded-2xl transition-colors duration-300 flex items-center justify-center">
                    <Icon className="text-jmc-dark-green dark:text-jmc-green" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-jmc-navy dark:text-white">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-jmc-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-4">Recognition</span>
            <h2 className="font-montserrat font-bold text-4xl mt-4 text-jmc-navy dark:text-white">
              Major <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group flex items-start gap-4 p-6 bg-jmc-light dark:bg-jmc-bg-dark rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-lg hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-xl bg-jmc-green/12 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-jmc-green/20 transition-colors duration-300">
                  <Award className="text-jmc-dark-green dark:text-jmc-green" size={16} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {/* Values strip */}
          <motion.div
            className="p-8 rounded-2xl bg-jmc-navy border border-jmc-green/10 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="w-full text-center text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Our Core Values</p>
            {values.map((val, i) => (
              <div key={val} className="flex items-center gap-3">
                <div className="flex items-center gap-2.5 text-white">
                  <CheckCircle size={16} className="text-jmc-green" />
                  <span className="font-semibold text-base">{val}</span>
                </div>
                {i < values.length - 1 && (
                  <div className="hidden md:block w-px h-5 bg-white/10 ml-3" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
