'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check, Zap, Users, Trophy, Camera } from 'lucide-react'

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    department: '',
    batch: '',
    phone: '',
    email: '',
    skills: '',
    portfolio: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const benefits = [
    { icon: Zap,    title: 'Skill Development', description: 'Learn from industry professionals and mentors' },
    { icon: Users,  title: 'Community',          description: 'Connect with 500+ passionate media enthusiasts' },
    { icon: Trophy, title: 'Opportunities',      description: 'Access to internships, projects, and recognition' },
  ]

  const requirements = [
    'Current student of Green University',
    'Passionate about journalism and media',
    'Willing to participate in events and activities',
    'Maintain good academic standing',
    'Commitment to ethical journalism',
  ]

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-jmc-bg-dark text-jmc-navy dark:text-white placeholder-gray-400 focus:outline-none focus:border-jmc-green focus:ring-2 focus:ring-jmc-green/20 transition-all'

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
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
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
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mt-4 mb-5 text-white">
              Join <span className="text-gradient-light">JMC Media Club</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Become part of our thriving community of media enthusiasts and future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-jmc-light dark:bg-jmc-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-pill mb-3">Why Join?</span>
            <h2 className="font-montserrat font-bold text-4xl mt-3 text-jmc-navy dark:text-white">
              Membership <span className="text-gradient">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="group p-8 rounded-2xl bg-white dark:bg-jmc-card-dark border border-gray-100 dark:border-white/5 hover:border-jmc-green/30 shadow-sm hover:shadow-xl hover:shadow-jmc-green/10 transition-all duration-300 text-center hover:-translate-y-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-jmc-green/10 group-hover:bg-jmc-green/15 flex items-center justify-center transition-colors duration-300">
                      <Icon className="text-jmc-dark-green" size={28} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-jmc-navy dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements + Quick Facts */}
      <section className="py-20 bg-white dark:bg-jmc-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-2xl mb-7 text-jmc-navy dark:text-white">
                Membership <span className="text-gradient">Requirements</span>
              </h3>
              <ul className="space-y-3.5">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-jmc-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-jmc-dark-green" size={14} />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-jmc-light dark:bg-jmc-bg-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-6 text-jmc-navy dark:text-white">Quick Facts</h3>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                {[
                  ['Membership Fee',         'Free for all students'],
                  ['Meeting Schedule',       'Every Tuesday at 3:30 PM'],
                  ['Location',              'JMC Lab, Media Center'],
                  ['Current Members',       '500+ active members'],
                  ['Application Processing','3–5 working days'],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-4 pb-3 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0">
                    <span className="text-gray-400">{key}</span>
                    <span className="font-semibold text-jmc-navy dark:text-white text-right">{val}</span>
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
              <span className="section-pill mb-3">Apply Now</span>
              <h2 className="font-montserrat font-bold text-4xl mt-3 text-jmc-navy dark:text-white">
                Apply for <span className="text-gradient">Membership</span>
              </h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl bg-jmc-navy text-center"
              >
                <div className="w-16 h-16 rounded-full bg-jmc-green/20 flex items-center justify-center mx-auto mb-5">
                  <Check className="text-jmc-green" size={32} />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-400">We&apos;ll review your application and get back to you within 3–5 working days.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-jmc-card-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name',    name: 'fullName',  type: 'text',  placeholder: 'Your full name' },
                    { label: 'Student ID',   name: 'studentId', type: 'text',  placeholder: 'Your student ID' },
                    { label: 'Batch / Year', name: 'batch',     type: 'text',  placeholder: 'e.g., 2024' },
                    { label: 'Phone Number', name: 'phone',     type: 'tel',   placeholder: 'Your phone number' },
                    { label: 'Email Address',name: 'email',     type: 'email', placeholder: 'your@email.com' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  {/* Department select */}
                  <div>
                    <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Select Department</option>
                      <option value="JMC">Journalism & Media Communication</option>
                      <option value="CSE">Computer Science</option>
                      <option value="BBA">Business Administration</option>
                      <option value="ENG">English</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                    Skills & Interests
                  </label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your skills and interests in media..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-jmc-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                    Portfolio Link <span className="normal-case font-normal text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Link to your portfolio (optional)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-jmc-dark-green hover:bg-jmc-green text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-jmc-green/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Camera size={18} />
                      Submit Application
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
