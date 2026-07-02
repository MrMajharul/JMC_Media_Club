'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

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
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-jmc-bg-dark text-jmc-navy dark:text-white placeholder-gray-400 focus:outline-none focus:border-jmc-green focus:ring-2 focus:ring-jmc-green/20 transition-all'

  const contactInfo = [
    { icon: Mail,    label: 'Email',    value: 'jmcmediaclub@gmail.com',               href: 'mailto:jmcmediaclub@gmail.com' },
    { icon: Phone,   label: 'Phone',    value: '+880 1700-000000',                       href: 'tel:+8801700000000' },
    { icon: MapPin,  label: 'Location', value: 'Green University of Bangladesh, Dhaka', href: '#' },
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
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">
              <MessageSquare size={14} />
              Contact Us
            </span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              Get in <span className="text-gradient-light">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Have questions or want to collaborate with JMC Media Club? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                className="group p-7 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-jmc-green/10 group-hover:bg-jmc-green/15 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-jmc-dark-green" size={22} />
                </div>
                <h3 className="font-semibold text-base text-jmc-navy dark:text-white mb-1">{label}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{value}</p>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            className="max-w-2xl mx-auto bg-white dark:bg-jmc-card-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-jmc-green/10 flex items-center justify-center mx-auto mb-5">
                  <Send className="text-jmc-green" size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-jmc-navy dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Message subject" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Your message..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-jmc-green/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
