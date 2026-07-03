'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Calendar, User, ArrowRight, Camera, Newspaper, BookOpen, Clock } from 'lucide-react'

const categoryMeta: Record<string, { icon: React.ElementType; color: string }> = {
  Tutorial:     { icon: Camera,    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
  Article:      { icon: Newspaper, color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  'Case Study': { icon: BookOpen,  color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
  Tips:         { icon: Camera,    color: 'bg-jmc-green/10 text-jmc-dark-green dark:text-jmc-green border-jmc-green/20' },
  default:      { icon: Newspaper, color: 'bg-gray-100 text-gray-600 dark:text-gray-400 border-gray-200/50' },
}

const gradients = [
  'from-[#0f3d2e] via-[#166534] to-[#1a6644]',
  'from-[#0D1B2A] via-[#0f2233] to-[#1e3a5a]',
  'from-[#0a2a1a] via-[#166534] to-[#1a4a30]',
  'from-[#0D1B2A] via-[#0f3d2e] to-[#0a2a1a]',
]

const posts = [
  { id: 1, title: 'How to Master Video Production in 2024', excerpt: 'Learn the essential techniques and tools for creating professional-quality videos that captivate audiences.', author: 'Faisal Riyad', date: '2024-06-15', category: 'Tutorial', readTime: '5 min' },
  { id: 2, title: 'The Future of Digital Journalism',        excerpt: 'Exploring how AI and emerging technologies are shaping modern journalism and news delivery.', author: 'Dr. Ahmed Hassan', date: '2024-06-10', category: 'Article', readTime: '7 min' },
  { id: 3, title: 'Behind the Scenes: Our Latest Documentary', excerpt: 'An inside look at how our award-winning documentary was produced from concept to final cut.', author: 'Saida Khan', date: '2024-06-05', category: 'Case Study', readTime: '6 min' },
  { id: 4, title: 'Photography Tips from Professionals',    excerpt: 'Expert advice on composition, lighting, and storytelling through images that speak volumes.', author: 'Karim Rahman', date: '2024-05-28', category: 'Tips', readTime: '4 min' },
]

export default function BlogPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">
              <Newspaper size={14} />
              Stories &amp; Insights
            </span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-jmc-navy dark:text-white">
              Blog &amp; <span className="text-gradient-light">News</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Stay updated with the latest stories, insights, and achievements from JMC Media Club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {/* Featured post */}
            {posts.length > 0 && (() => {
              const post = posts[0]
              const meta = categoryMeta[post.category] ?? categoryMeta.default
              const Icon = meta.icon
              return (
                <motion.article
                  className="lg:col-span-2 group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-card-dark shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* Banner */}
                  <div className={`bg-gradient-to-br ${gradients[0]} h-64 flex items-end p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 dot-pattern opacity-[0.07]" />
                    <div className="relative flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border bg-black/20 backdrop-blur-sm text-jmc-navy dark:text-white border-white/20`}>
                        Featured
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border bg-jmc-green/20 backdrop-blur-sm text-jmc-green border-jmc-green/30`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="font-montserrat font-bold text-2xl mb-3 text-jmc-navy dark:text-white group-hover:text-jmc-dark-green dark:group-hover:text-jmc-green transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-white/5">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-jmc-dark-green flex items-center justify-center">
                            <span className="text-jmc-navy dark:text-white text-[9px] font-bold">{post.author.slice(0, 2).toUpperCase()}</span>
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} />
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-jmc-dark-green dark:text-jmc-green font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })()}

            {/* Sidebar posts */}
            <div className="space-y-5">
              {posts.slice(1).map((post, index) => {
                const meta = categoryMeta[post.category] ?? categoryMeta.default
                const Icon = meta.icon
                return (
                  <motion.article
                    key={post.id}
                    className="group p-5 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-lg hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <Icon size={13} className="text-jmc-green" />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${meta.color}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 ml-auto flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-semibold text-sm mb-2 text-jmc-navy dark:text-white group-hover:text-jmc-dark-green dark:group-hover:text-jmc-green transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-jmc-dark-green flex items-center justify-center">
                          <span className="text-jmc-navy dark:text-white text-[8px] font-bold">{post.author.slice(0, 2).toUpperCase()}</span>
                        </div>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-jmc-dark-green dark:text-jmc-green font-semibold hover:text-jmc-green flex items-center gap-1">
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
