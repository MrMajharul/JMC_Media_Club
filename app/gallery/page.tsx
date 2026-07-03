'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Camera, ZoomIn } from 'lucide-react'

const categories = ['All', 'Events', 'Workshops', 'Competitions', 'Activities']

const galleryImages = [
  { id: 1, category: 'events',       title: 'Annual Media Summit 2024',    aspect: 'tall',   gradient: 'from-[#0f3d2e] via-[#166534] to-[#1a6644]' },
  { id: 2, category: 'workshops',    title: 'Photography Workshop',         aspect: 'wide',   gradient: 'from-[#0D1B2A] via-[#0f2233] to-[#1e3a5a]' },
  { id: 3, category: 'competitions', title: 'Video Contest Finals',         aspect: 'square', gradient: 'from-[#0a2a1a] via-[#166534] to-[#1a4a30]' },
  { id: 4, category: 'activities',   title: 'Club General Meeting',         aspect: 'tall',   gradient: 'from-[#0D1B2A] via-[#0f3d2e] to-[#0a2a1a]' },
  { id: 5, category: 'events',       title: 'Seminar with Guest Speaker',   aspect: 'wide',   gradient: 'from-[#0a1a0a] via-[#166534] to-[#1a6644]' },
  { id: 6, category: 'workshops',    title: 'Video Production Training',    aspect: 'square', gradient: 'from-[#081420] via-[#0D1B2A] to-[#0f2233]' },
  { id: 7, category: 'competitions', title: 'Photography Contest 2024',     aspect: 'wide',   gradient: 'from-[#0f3d2e] via-[#0a2a1a] to-[#166534]' },
  { id: 8, category: 'activities',   title: 'Media Club Induction Ceremony',aspect: 'square', gradient: 'from-[#0D1B2A] via-[#1e3a5a] to-[#0f2233]' },
]

const dotPattern = {
  backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.2) 1px, transparent 1px)',
  backgroundSize: '18px 18px',
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = galleryImages.filter(
    img => selectedCategory === 'all' || img.category === selectedCategory.toLowerCase()
  )

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return galleryImages.length
    return galleryImages.filter(img => img.category === cat.toLowerCase()).length
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 grid-pattern" />
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
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-jmc-navy dark:text-white">
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

          {/* Filter tabs */}
          <motion.div
            className="flex justify-center gap-2 mb-14 flex-wrap"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {categories.map(category => {
              const count = getCategoryCount(category)
              const isActive = selectedCategory === category.toLowerCase() || (category === 'All' && selectedCategory === 'all')
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-jmc-dark-green text-jmc-navy dark:text-white shadow-md shadow-jmc-green/20'
                      : 'bg-white dark:bg-jmc-card-dark text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 hover:text-jmc-dark-green dark:hover:text-jmc-green'
                  }`}
                >
                  {category}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-jmc-navy dark:text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* Masonry grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  className="group relative overflow-hidden rounded-2xl cursor-pointer border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-shadow duration-300 break-inside-avoid mb-5"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredId(image.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Image placeholder */}
                  <div
                    className={`bg-gradient-to-br ${image.gradient} w-full ${
                      image.aspect === 'tall' ? 'h-80' : image.aspect === 'wide' ? 'h-48' : 'h-60'
                    } relative`}
                  >
                    {/* Dot pattern */}
                    <div className="absolute inset-0 opacity-[0.06]" style={dotPattern} />

                    {/* Center camera icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera size={36} className="text-jmc-navy dark:text-white/20" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-white/0 dark:bg-jmc-navy/0 group-hover:bg-white/75 dark:group-hover:bg-jmc-navy/75 transition-all duration-350 flex items-end">
                    <div className="w-full p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Camera size={13} className="text-jmc-green" />
                          <span className="text-jmc-green text-xs font-semibold uppercase tracking-wider capitalize">
                            {image.category}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                          <ZoomIn size={14} className="text-jmc-navy dark:text-white" />
                        </div>
                      </div>
                      <p className="text-jmc-navy dark:text-white font-semibold text-sm leading-snug">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <Camera size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No images in this category yet.</p>
              <p className="text-sm mt-1">Check back soon!</p>
            </div>
          )}

          {/* CTA strip */}
          <motion.div
            className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-jmc-navy border border-jmc-green/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Camera size={32} className="text-jmc-green mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-xl text-jmc-navy dark:text-white mb-2">Want to contribute?</h3>
            <p className="text-gray-400 text-sm mb-5 max-w-sm mx-auto">
              Join JMC Media Club and have your work featured in our gallery.
            </p>
            <a
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-jmc-green/30"
            >
              Join the Club
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
