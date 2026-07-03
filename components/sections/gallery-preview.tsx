'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Camera, ZoomIn, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const previewImages = [
  { id: 1, title: 'Annual Media Summit', category: 'Events', gradient: 'from-[#0f3d2e] via-[#166534] to-[#1a6644]' },
  { id: 2, title: 'Photography Workshop', category: 'Workshops', gradient: 'from-[#0D1B2A] via-[#0f2233] to-[#1e3a5a]' },
  { id: 3, title: 'Video Contest Finals', category: 'Competitions', gradient: 'from-[#0a2a1a] via-[#166534] to-[#1a4a30]' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white dark:bg-jmc-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-4">Portfolio</span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              Captured by <span className="text-gradient">Our Members</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Explore the visual world through our camera lenses</p>
          </div>
          <Link href="/gallery" className="flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group flex-shrink-0">
            View Full Gallery <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {previewImages.map((img) => (
            <motion.div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/8 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              {/* Image Placeholder */}
              <div className={`bg-gradient-to-br ${img.gradient} h-64 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.2) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera size={32} className="text-white/20" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-jmc-navy/0 group-hover:bg-jmc-navy/70 transition-all duration-300 flex items-end">
                <div className="w-full p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-jmc-green text-xs font-semibold uppercase tracking-wider">
                      {img.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={14} className="text-white" />
                    </div>
                  </div>
                  <h4 className="text-white font-semibold text-sm leading-snug">{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
