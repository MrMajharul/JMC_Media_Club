'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement form submission to Supabase
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 1000)
  }

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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Have questions or want to collaborate with JMC Media Club? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="p-8 bg-gradient-to-br from-jmc-green/10 to-jmc-orange/10 border border-jmc-green/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Mail className="text-jmc-green mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-jmc-navy dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">contact@jmc.green.edu.bd</p>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-jmc-green/10 to-jmc-orange/10 border border-jmc-green/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="text-jmc-orange mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-jmc-navy dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+880 1700-000000</p>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-jmc-green/10 to-jmc-orange/10 border border-jmc-green/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MapPin className="text-jmc-green mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-jmc-navy dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Green University of Bangladesh, Dhaka</p>
            </motion.div>
          </div>

          <motion.div
            className="max-w-2xl mx-auto bg-gradient-to-br from-jmc-green/5 to-jmc-orange/5 border border-jmc-green/20 rounded-xl p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-jmc-green to-jmc-orange text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
