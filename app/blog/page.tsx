'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Master Video Production in 2024',
      excerpt: 'Learn the essential techniques and tools for creating professional-quality videos.',
      author: 'Faisal Riyad',
      date: '2024-06-15',
      category: 'Tutorial',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'The Future of Digital Journalism',
      excerpt: 'Exploring how AI and emerging technologies are shaping modern journalism.',
      author: 'Dr. Ahmed Hassan',
      date: '2024-06-10',
      category: 'Article',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Our Latest Documentary',
      excerpt: 'An inside look at how our award-winning documentary was produced.',
      author: 'Saida Khan',
      date: '2024-06-05',
      category: 'Case Study',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
    {
      id: 4,
      title: 'Photography Tips from Professionals',
      excerpt: 'Expert advice on composition, lighting, and storytelling through images.',
      author: 'Karim Rahman',
      date: '2024-05-28',
      category: 'Tips',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
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
              Blog & <span className="text-gradient">News</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay updated with the latest stories, insights, and achievements from JMC Media Club
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            {posts.length > 0 && (
              <motion.div
                className="lg:col-span-2 group overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 hover:border-jmc-green/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`${posts[0].image} h-64`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-jmc-green/10 text-jmc-green rounded-full text-xs font-semibold">
                      {posts[0].category}
                    </span>
                  </div>
                  <h2 className="font-montserrat font-bold text-2xl mb-3 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{posts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${posts[0].id}`} className="text-jmc-green font-semibold hover:gap-2 transition-all flex items-center gap-1">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Sidebar Posts */}
            <div className="space-y-6">
              {posts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  className="p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-jmc-green/50 transition-all hover:shadow-lg group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-semibold text-jmc-green">{post.category}</span>
                  <h3 className="font-semibold text-sm mt-2 mb-2 text-jmc-navy dark:text-white group-hover:text-jmc-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <Link href={`/blog/${post.id}`} className="text-jmc-green font-semibold hover:text-jmc-orange">
                      Read →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
