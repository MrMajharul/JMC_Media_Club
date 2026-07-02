'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Target, Eye, Users, Award, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    'Winner of Best Student Media Organization 2024',
    'Published 50+ articles this year',
    'Organized 40+ events and workshops',
    'Mentored 100+ journalism students',
    'Expanded membership to 500+ active members',
  ]

  const pillars = [
    { icon: Eye,    title: 'Our Vision',  text: 'To be the leading student media organization at Green University, fostering excellence in journalism, storytelling, and professional development while building a community of passionate media practitioners.' },
    { icon: Target, title: 'Our Mission', text: 'To cultivate skilled storytellers, develop future media leaders, and create impactful content that informs, entertains, and inspires our university community while maintaining ethical journalism standards.' },
    { icon: Users,  title: 'Community',   text: 'A family of 500+ members united by a passion for media, journalism, photography, and digital storytelling — collaborating across disciplines and backgrounds.' },
  ]

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
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
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission / Community */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="w-13 h-13 mb-6 p-3 bg-jmc-green/10 rounded-xl w-fit">
                  <Icon className="text-jmc-dark-green" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-jmc-navy dark:text-white">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{text}</p>
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
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-3">Recognition</span>
            <h2 className="font-montserrat font-bold text-4xl mt-3 text-jmc-navy dark:text-white">
              Major <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group flex items-start gap-4 p-6 bg-jmc-light dark:bg-jmc-bg-dark rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-lg hover:shadow-jmc-green/10 transition-all duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Award className="text-jmc-green flex-shrink-0 mt-0.5" size={22} />
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {/* Values strip */}
          <motion.div
            className="mt-16 p-8 rounded-2xl bg-jmc-navy border border-jmc-green/10 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {['Innovation', 'Integrity', 'Inclusion', 'Impact'].map((val) => (
              <div key={val} className="flex items-center gap-2 text-white">
                <CheckCircle size={16} className="text-jmc-green" />
                <span className="font-semibold text-sm">{val}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
