'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['All', 'Events', 'Workshops', 'Competitions', 'Activities']

  const galleryImages = [
    { id: 1, category: 'events', title: 'Annual Media Summit 2024' },
    { id: 2, category: 'workshops', title: 'Photography Workshop' },
    { id: 3, category: 'competitions', title: 'Video Contest Finals' },
    { id: 4, category: 'activities', title: 'Club Meeting' },
    { id: 5, category: 'events', title: 'Seminar with Guest Speaker' },
    { id: 6, category: 'workshops', title: 'Video Production Training' },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-[40vh] flex items-center pt-20 pb-12 bg-gradient-to-b from-jmc-green/10 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 text-jmc-navy dark:text-white">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore highlights from our events, workshops, and club activities
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.toLowerCase() || (category === 'All' && selectedCategory === 'all')
                    ? 'bg-gradient-to-r from-jmc-green to-jmc-orange text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-gray-200 dark:bg-slate-700 aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-br from-jmc-green/20 to-jmc-orange/20 flex items-center justify-center">
                  <p className="text-center text-gray-600 dark:text-gray-400 font-semibold">{image.title}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all text-white text-center">
                    <p className="font-semibold">{image.title}</p>
                  </div>
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
