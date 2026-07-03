'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check, Zap, Users, Trophy, Camera, ArrowRight, Star } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Skill Development',
    description: 'Learn from industry professionals, mentors, and hands-on workshops that sharpen your media craft.',
    stat: '40+ workshops/year',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with 500+ passionate media enthusiasts who share your drive for storytelling and innovation.',
    stat: '500+ active members',
  },
  {
    icon: Trophy,
    title: 'Opportunities',
    description: 'Access internships, featured projects, recognition programs, and real-world media experience.',
    stat: '50+ achievements',
  },
]

const requirements = [
  'Current student of Green University of Bangladesh',
  'Passionate about journalism, media, or communication',
  'Willing to participate in events and activities',
  'Maintain good academic standing',
  'Commitment to ethical journalism practices',
]

const quickFacts = [
  ['Membership Fee',          'Free for all students'],
  ['Meeting Schedule',        'Every Tuesday at 3:30 PM'],
  ['Location',               'JMC Lab, Media Center'],
  ['Current Members',        '500+ active members'],
  ['Application Processing', '3–5 working days'],
]

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    fullName: '', studentId: '', department: '', batch: '', phone: '', email: '', skills: '', portfolio: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Submit to Supabase
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ fullName: '', studentId: '', department: '', batch: '', phone: '', email: '', skills: '', portfolio: '' })
    }, 1200)
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-jmc-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-pill mb-4">
              <Camera size={14} />
              Join the Club
            </span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-jmc-navy dark:text-white">
              Join <span className="text-gradient-light">JMC Media Club</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Become part of our thriving community of media enthusiasts, storytellers, and future leaders.
            </p>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: Star, text: 'Best Student Club 2024' },
                { icon: Users, text: '500+ Active Members' },
                { icon: Zap, text: 'Free to Join' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 backdrop-blur-sm">
                  <Icon size={13} className="text-jmc-green" />
                  <span className="text-jmc-navy dark:text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-4">Why Join?</span>
            <h2 className="font-montserrat font-bold text-4xl mt-4 text-jmc-navy dark:text-white">
              Membership <span className="text-gradient">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 text-center hover:-translate-y-2 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-jmc-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-jmc-green/10 group-hover:bg-jmc-green/15 flex items-center justify-center transition-colors duration-300">
                      <Icon className="text-jmc-dark-green dark:text-jmc-green" size={28} />
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-2.5 text-jmc-navy dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{benefit.description}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-jmc-green/8 border border-jmc-green/20 text-jmc-dark-green dark:text-jmc-green text-xs font-semibold">
                    {benefit.stat}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements + Quick Facts */}
      <section className="py-20 bg-white dark:bg-jmc-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-2xl mb-8 text-jmc-navy dark:text-white">
                Membership <span className="text-gradient">Requirements</span>
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-jmc-green/12 border border-jmc-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-jmc-dark-green dark:text-jmc-green" size={13} />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-jmc-light dark:bg-jmc-bg-dark border border-gray-100 dark:border-white/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-xl mb-6 text-jmc-navy dark:text-white">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-4 pb-4 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0">
                    <span className="text-gray-400 text-sm">{key}</span>
                    <span className="font-semibold text-jmc-navy dark:text-white text-sm text-right">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="section-pill mb-4">Apply Now</span>
              <h2 className="font-montserrat font-bold text-4xl mt-4 text-jmc-navy dark:text-white">
                Apply for <span className="text-gradient">Membership</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                Fill out the form below and we&apos;ll get back to you within 3–5 working days.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl bg-gray-50 dark:bg-jmc-navy text-center border border-jmc-green/10"
              >
                <div className="w-20 h-20 rounded-full bg-jmc-green/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="text-jmc-green" size={36} />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-jmc-navy dark:text-white mb-3">Application Submitted!</h3>
                <p className="text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
                  We&apos;ll review your application and get back to you within 3–5 working days. Welcome to the JMC family!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white dark:bg-jmc-card-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-8"
                id="membership-form"
              >
                {/* Personal info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name',     name: 'fullName',  type: 'text',  placeholder: 'Your full name',    id: 'membership-name' },
                    { label: 'Student ID',    name: 'studentId', type: 'text',  placeholder: 'Your student ID',   id: 'membership-studentid' },
                    { label: 'Batch / Year',  name: 'batch',     type: 'text',  placeholder: 'e.g., 2024',        id: 'membership-batch' },
                    { label: 'Phone Number',  name: 'phone',     type: 'tel',   placeholder: 'Your phone number', id: 'membership-phone' },
                    { label: 'Email Address', name: 'email',     type: 'email', placeholder: 'your@email.com',    id: 'membership-email' },
                  ].map(({ label, name, type, placeholder, id }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        id={id}
                        value={formData[name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="input-standard"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  {/* Department */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Department
                    </label>
                    <select
                      name="department"
                      id="membership-department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="input-standard"
                    >
                      <option value="">Select Department</option>
                      <option value="JMC">Journalism &amp; Media Communication</option>
                      <option value="CSE">Computer Science</option>
                      <option value="BBA">Business Administration</option>
                      <option value="ENG">English</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Skills &amp; Interests
                  </label>
                  <textarea
                    name="skills"
                    id="membership-skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required rows={3}
                    className="input-standard resize-none"
                    placeholder="Tell us about your skills and interests in media, journalism, photography…"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Portfolio Link <span className="normal-case font-normal text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    id="membership-portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="input-standard"
                    placeholder="Link to your portfolio or social media"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-jmc-green/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  id="membership-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Camera size={17} />
                      Submit Application
                      <ArrowRight size={15} />
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
