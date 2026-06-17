'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check, Zap, Users, Trophy } from 'lucide-react'

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

  const benefits = [
    { icon: Zap, title: 'Skill Development', description: 'Learn from industry professionals and mentors' },
    { icon: Users, title: 'Community', description: 'Connect with 500+ passionate media enthusiasts' },
    { icon: Trophy, title: 'Opportunities', description: 'Access to internships, projects, and recognition' },
  ]

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
      alert('Application submitted! We will review and get back to you soon.')
      setFormData({ fullName: '', studentId: '', department: '', batch: '', phone: '', email: '', skills: '', portfolio: '' })
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
              Join <span className="text-gradient">JMC Media Club</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Become part of our thriving community of media enthusiasts and future leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-4xl mb-12 text-center text-jmc-navy dark:text-white">
            Membership <span className="text-gradient">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl bg-gradient-to-br from-jmc-green/10 to-jmc-orange/10 border border-jmc-green/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-jmc-green to-jmc-orange rounded-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-jmc-navy dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-b from-jmc-green/5 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-jmc-navy dark:text-white">
                Membership <span className="text-gradient">Requirements</span>
              </h3>
              <ul className="space-y-4">
                {['Current student of Green University', 'Passionate about journalism and media', 'Willing to participate in events and activities', 'Maintain good academic standing', 'Commitment to ethical journalism'].map((req, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="text-jmc-green flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-gray-200 dark:border-slate-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4 text-jmc-navy dark:text-white">Quick Facts</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Membership Fee:</strong> Free for all students</p>
                <p><strong>Meeting Schedule:</strong> Every Tuesday at 3:30 PM</p>
                <p><strong>Location:</strong> JMC Lab, Media Center</p>
                <p><strong>Current Members:</strong> 500+ active members</p>
                <p><strong>Application Processing:</strong> 3-5 working days</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-12 text-center text-jmc-navy dark:text-white">
              Apply for <span className="text-gradient">Membership</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-jmc-green/5 to-jmc-orange/5 border border-jmc-green/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                    placeholder="Your student ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                  >
                    <option value="">Select Department</option>
                    <option value="JMC">Journalism & Media Communication</option>
                    <option value="CSE">Computer Science</option>
                    <option value="BBA">Business Administration</option>
                    <option value="ENG">English</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                    Batch/Year
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                    placeholder="e.g., 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                  Skills & Interests
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors resize-none"
                  placeholder="Tell us about your skills and interests in media..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-jmc-navy dark:text-white mb-2">
                  Portfolio Link (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-jmc-navy dark:text-white focus:outline-none focus:border-jmc-green transition-colors"
                  placeholder="Link to your portfolio (optional)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-jmc-green to-jmc-orange text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
