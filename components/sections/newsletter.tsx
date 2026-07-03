'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle, Loader2, Newspaper, Zap, Calendar, BookOpen } from 'lucide-react'

const perks = [
  { icon: Newspaper, text: 'Club News & Updates' },
  { icon: Calendar,  text: 'Event Invitations' },
  { icon: Zap,       text: 'Workshop Alerts' },
  { icon: BookOpen,  text: 'Exclusive Publications' },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setState('loading')
    // TODO: Connect to Supabase newsletter table
    await new Promise(r => setTimeout(r, 1200))
    setState('success')
    setEmail('')
  }

  return (
    <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gray-50 dark:bg-jmc-navy rounded-3xl p-10 md:p-14 overflow-hidden border border-jmc-green/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-jmc-dark-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-jmc-green/15 border border-jmc-green/20 flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-jmc-green" />
            </div>

            <span className="section-pill mb-5">Stay Informed</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-jmc-navy dark:text-white mt-4 mb-3">
              Subscribe to{' '}
              <span className="text-gradient-light">Media Pulse</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Join 800+ students and media professionals receiving our bi-weekly newsletter
              packed with journalism insights, event alerts, and exclusive club updates.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  <Icon size={13} className="text-jmc-green" />
                  {text}
                </div>
              ))}
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-jmc-green/20 flex items-center justify-center">
                    <CheckCircle size={28} className="text-jmc-green" />
                  </div>
                  <p className="text-jmc-navy dark:text-white font-bold text-lg">You&apos;re subscribed!</p>
                  <p className="text-gray-400 text-sm">Welcome to Media Pulse. Check your inbox for confirmation.</p>
                  <button
                    onClick={() => setState('idle')}
                    className="mt-2 text-jmc-green text-sm hover:underline font-medium"
                  >
                    Subscribe another email
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="newsletter-form"
                >
                  <div className="flex-1 relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/8 border border-white/12 text-jmc-navy dark:text-white placeholder-gray-500 focus:outline-none focus:border-jmc-green focus:ring-2 focus:ring-jmc-green/20 transition-all duration-200"
                      required
                      id="newsletter-email"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="px-7 py-3.5 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-jmc-green/20 hover:shadow-jmc-green/40 hover:-translate-y-0.5 disabled:opacity-60 flex items-center gap-2 whitespace-nowrap"
                    id="newsletter-submit"
                  >
                    {state === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Subscribing…</>
                    ) : (
                      'Subscribe Free'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="text-gray-600 text-xs mt-5">
              No spam. Unsubscribe anytime. Your privacy is respected.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
