'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Eye, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PhotoOfTheWeek() {
  return (
    <section className="py-24 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-pill mb-4">
              <Camera size={13} />
              This Week
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-jmc-navy dark:text-white mt-3">
              Photo of the <span className="text-gradient">Week</span>
            </h2>
          </div>
          <Link href="/gallery" className="hidden md:flex items-center gap-2 text-jmc-dark-green dark:text-jmc-green font-semibold text-sm hover:gap-3 transition-all group flex-shrink-0">
            View Gallery <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* Photo */}
          <motion.div
            className="lg:col-span-3 group relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Simulated high-res photo with cinematic gradient */}
            <div
              className="h-[480px] relative"
              style={{
                background: 'linear-gradient(160deg, #0a1a0a 0%, #0f3d2e 30%, #166534 60%, #1a6644 85%, #0a2a1a 100%)',
              }}
            >
              {/* Cinematic grain overlay */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }}
              />

              {/* Light rays effect */}
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 35% 40%, rgba(34,197,94,0.18) 0%, transparent 60%)' }} />

              {/* Subject silhouette */}
              <div className="absolute inset-0 flex items-end justify-center pb-0">
                <div className="w-full h-3/4 relative flex items-end justify-center">
                  <Camera size={80} className="text-jmc-navy dark:text-white/8 mb-20" />
                </div>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Hover zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye size={16} className="text-jmc-navy dark:text-white" />
              </div>

              {/* Week badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 bg-jmc-green text-white text-xs font-bold rounded-full shadow-lg shadow-jmc-green/40">
                <Camera size={12} />
                Week of June 30
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-jmc-green text-xs font-semibold uppercase tracking-widest mb-2">
                  📍 Green University Campus
                </p>
                <h3 className="text-jmc-navy dark:text-white font-montserrat font-bold text-2xl leading-snug">
                  &ldquo;Morning Light, Building A&rdquo;
                </h3>
                <p className="text-jmc-navy dark:text-white/60 text-sm mt-1">Captured at 6:17 AM, natural light</p>
              </div>
            </div>
          </motion.div>

          {/* Side info */}
          <motion.div
            className="lg:col-span-2 space-y-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {/* Photographer card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-jmc-dark-green to-jmc-green flex items-center justify-center flex-shrink-0">
                  <span className="text-jmc-navy dark:text-white font-bold text-lg">TH</span>
                </div>
                <div>
                  <p className="text-xs text-jmc-green font-semibold uppercase tracking-wider mb-0.5">Photographer</p>
                  <h4 className="font-montserrat font-bold text-lg text-jmc-navy dark:text-white">Tanvir Hossain</h4>
                  <p className="text-gray-400 text-sm">Photography Unit, JMC</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                &ldquo;I wanted to capture the calm before the campus wakes up — that golden silence when 
                architecture and light become a conversation.&rdquo;
              </p>
            </div>

            {/* Specs */}
            <div className="p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 shadow-sm">
              <h4 className="font-semibold text-jmc-navy dark:text-white text-sm mb-4">Shot Details</h4>
              <div className="space-y-3">
                {[
                  ['Camera',   'Canon EOS R5'],
                  ['Lens',     '24–70mm f/2.8'],
                  ['Aperture', 'f/2.8'],
                  ['ISO',      '400'],
                  ['Location', 'Campus, Building A'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-gray-400">{k}</span>
                    <span className="text-jmc-navy dark:text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/gallery"
              className="flex items-center justify-center gap-2 w-full py-4 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-jmc-green/30 hover:-translate-y-0.5"
            >
              <Camera size={16} />
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
