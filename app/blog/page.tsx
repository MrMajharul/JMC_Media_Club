'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Calendar, User, ArrowRight, Camera, Newspaper, BookOpen } from 'lucide-react'

const categoryIcon: Record<string, React.ElementType> = {
  Tutorial:   Camera,
  Article:    Newspaper,
  'Case Study': BookOpen,
  Tips:       Camera,
  default:    Newspaper,
}

const gradients = [
  'from-[#0f3d2e] to-[#166534]',
  'from-[#0D1B2A] to-[#1e3a5a]',
  'from-[#0a2a1a] to-[#1a4a30]',
  'from-[#0D1B2A] to-[#0f3d2e]',
]

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Master Video Production in 2024',
      excerpt: 'Learn the essential techniques and tools for creating professional-quality videos.',
      author: 'Faisal Riyad',
      date: '2024-06-15',
      category: 'Tutorial',
    },
    {
      id: 2,
      title: 'The Future of Digital Journalism',
      excerpt: 'Exploring how AI and emerging technologies are shaping modern journalism.',
      author: 'Dr. Ahmed Hassan',
      date: '2024-06-10',
      category: 'Article',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Our Latest Documentary',
      excerpt: 'An inside look at how our award-winning documentary was produced.',
      author: 'Saida Khan',
      date: '2024-06-05',
      category: 'Case Study',
    },
    {
      id: 4,
      title: 'Photography Tips from Professionals',
      excerpt: 'Expert advice on composition, lighting, and storytelling through images.',
      author: 'Karim Rahman',
      date: '2024-05-28',
      category: 'Tips',
    },
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
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">
              <Newspaper size={14} />
              Stories & Insights
            </span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              Blog & <span className="text-gradient-light">News</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Stay updated with the latest stories, insights, and achievements from JMC Media Club
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {/* Featured Post */}
            {posts.length > 0 && (
              <motion.div
                className="lg:col-span-2 group overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 bg-white dark:bg-jmc-card-dark shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Banner */}
                <div className={`bg-gradient-to-br ${gradients[0]} h-64 flex items-end p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #22C55E 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                  <span className="relative px-3 py-1 bg-jmc-green/20 backdrop-blur-sm border border-jmc-green/30 rounded-full text-jmc-green text-xs font-semibold">
                    {posts[0].category}
                  </span>
                </div>

                <div className="p-8">
                  <h2 className="font-montserrat font-bold text-2xl mb-3 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <User size={14} />
                        <span>{posts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${posts[0].id}`} className="text-jmc-dark-green dark:text-jmc-green font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
                      Read More <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Sidebar Posts */}
            <div className="space-y-5">
              {posts.slice(1).map((post, index) => {
                const Icon = categoryIcon[post.category] ?? categoryIcon.default
                return (
                  <motion.div
                    key={post.id}
                    className="group p-5 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-lg hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={13} className="text-jmc-green" />
                      <span className="text-xs font-semibold text-jmc-green uppercase tracking-wider">{post.category}</span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <Link href={`/blog/${post.id}`} className="text-jmc-dark-green dark:text-jmc-green font-semibold hover:text-jmc-green flex items-center gap-1">
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
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
