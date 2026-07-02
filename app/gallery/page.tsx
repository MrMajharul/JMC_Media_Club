'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Camera, Grid } from 'lucide-react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['All', 'Events', 'Workshops', 'Competitions', 'Activities']

  const galleryImages = [
    { id: 1, category: 'events',       title: 'Annual Media Summit 2024',      aspect: 'tall'   },
    { id: 2, category: 'workshops',    title: 'Photography Workshop',           aspect: 'wide'   },
    { id: 3, category: 'competitions', title: 'Video Contest Finals',           aspect: 'square' },
    { id: 4, category: 'activities',   title: 'Club Meeting',                  aspect: 'tall'   },
    { id: 5, category: 'events',       title: 'Seminar with Guest Speaker',     aspect: 'wide'   },
    { id: 6, category: 'workshops',    title: 'Video Production Training',      aspect: 'square' },
  ]

  const filtered = galleryImages.filter(
    img => selectedCategory === 'all' || img.category === selectedCategory.toLowerCase()
  )

  const gradients = [
    'from-[#0f3d2e] to-[#166534]',
    'from-[#0D1B2A] to-[#1e3a5a]',
    'from-[#0a2a1a] to-[#1a4a30]',
    'from-[#0D1B2A] to-[#0f3d2e]',
    'from-[#0a1a0a] to-[#1a6644]',
    'from-[#081420] to-[#0f2233]',
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
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">
              <Camera size={14} />
              Media Portfolio
            </span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              Our <span className="text-gradient-light">Gallery</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Explore highlights from our events, workshops, and club activities through the lens of our storytellers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter */}
          <div className="flex justify-center gap-2.5 mb-14 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  selectedCategory === category.toLowerCase() || (category === 'All' && selectedCategory === 'all')
                    ? 'bg-jmc-dark-green text-white shadow-md shadow-jmc-green/20'
                    : 'bg-white dark:bg-jmc-card-dark text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 hover:text-jmc-dark-green dark:hover:text-jmc-green'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-shadow duration-300 ${
                    image.aspect === 'tall' ? 'row-span-2' : ''
                  }`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  {/* Placeholder gradient */}
                  <div className={`bg-gradient-to-br ${gradients[index % gradients.length]} w-full ${image.aspect === 'tall' ? 'h-80' : 'h-52'} flex items-center justify-center relative`}>
                    {/* Dot pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, #22C55E 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />
                    <div className="relative flex flex-col items-center gap-2 opacity-30">
                      <Grid size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-jmc-navy/0 group-hover:bg-jmc-navy/70 transition-all duration-300 flex items-end p-5">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Camera size={14} className="text-jmc-green" />
                        <span className="text-jmc-green text-xs font-semibold uppercase tracking-wider capitalize">
                          {image.category}
                        </span>
                      </div>
                      <p className="text-white font-semibold text-sm leading-snug">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <Camera size={40} className="mx-auto mb-3 opacity-30" />
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
