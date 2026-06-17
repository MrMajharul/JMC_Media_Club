'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Target, Eye, Users, Award } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    'Winner of Best Student Media Organization 2024',
    'Published 50+ articles this year',
    'Organized 40+ events and workshops',
    'Mentored 100+ journalism students',
    'Expanded membership to 500+ active members',
  ]

  return (
    <main>
      <Header />

      <section className="min-h-[60vh] flex items-center pt-20 pb-12 bg-gradient-to-b from-jmc-green/10 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 text-jmc-navy dark:text-white">
              About <span className="text-gradient">JMC Media Club</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              The Department of Journalism and Media Communication's premier student organization, dedicated to fostering excellence in journalism, media production, and professional development since its establishment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Eye className="text-jmc-green flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl mb-3 text-jmc-navy dark:text-white">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To be the leading student media organization at Green University, fostering excellence in journalism, storytelling, and professional development while building a community of passionate media practitioners.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Target className="text-jmc-orange flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl mb-3 text-jmc-navy dark:text-white">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To cultivate skilled storytellers, develop future media leaders, and create impactful content that informs, entertains, and inspires our university community while maintaining ethical journalism standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-jmc-green/5 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-4xl mb-12 text-jmc-navy dark:text-white text-center">
            Major <span className="text-gradient">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-jmc-green hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <Award className="text-jmc-green flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
