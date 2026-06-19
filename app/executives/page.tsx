'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Users, Star, Award } from 'lucide-react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FacebookIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

type Executive = {
  id: string | null
  name: string
  role: string
  email: string
  facebookUrl: string | null
  photo: string | null
  initials: string
}

const executives: Executive[] = [
  // ─── Special Roles ───────────────────────────────────────────────────────────
  {
    id: null,
    name: 'Jannatul Ferdous Meem',
    role: 'Moderator',
    email: 'jmcmediaclub@gmail.com',
    facebookUrl: null,
    photo: '/executives/Moderator.png',
    initials: 'JFM',
  },
  {
    id: null,
    name: 'Samantha Ali',
    role: 'Ambassador',
    email: 'samanthaali602@gmail.com',
    facebookUrl: 'https://www.facebook.com/SamanthaAli.Titli',
    photo: '/executives/Ambassador.png',
    initials: 'SA',
  },
  // ─── Core Leadership ─────────────────────────────────────────────────────────
  {
    id: '232033021',
    name: 'Emu Akter Mim',
    role: 'President',
    email: 'emuaktermim@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033021.png',
    initials: 'EM',
  },
  {
    id: '232033020',
    name: 'Sadia Afrin Nijhum',
    role: 'Vice President',
    email: 'nijhumsabira2002@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033020.png',
    initials: 'SN',
  },
  {
    id: '241033002',
    name: 'Sabikun Islam Shorna',
    role: 'General Secretary',
    email: 'Sabikunswarnaa@gmail.com',
    facebookUrl: null,
    photo: '/executives/241033002.png',
    initials: 'SS',
  },
  {
    id: '242033016',
    name: 'Sakib Al Hasan',
    role: 'Joint Secretary',
    email: 'sakibalhasanjmc@gmail.com',
    facebookUrl: null,
    photo: '/executives/242033016.png',
    initials: 'SH',
  },
  // ─── Organizing ──────────────────────────────────────────────────────────────
  {
    id: '251033003',
    name: 'Shimu Akter',
    role: 'Organizing Secretary',
    email: 'shimuakterjmcgub@gmail.com',
    facebookUrl: null,
    photo: '/executives/251033003.png',
    initials: 'SA',
  },
  {
    id: '250033003',
    name: 'Nazifa Tabassum Taj',
    role: 'Joint Organizing Secretary',
    email: 'taj.jmc.gub250@gmail.com',
    facebookUrl: 'https://www.facebook.com/share/1BTHjJcegs/',
    photo: '/executives/250033003.png',
    initials: 'NT',
  },
  // ─── Finance ─────────────────────────────────────────────────────────────────
  {
    id: '232033016',
    name: 'Md Sabibuzzaman',
    role: 'Treasurer',
    email: 'sabibuzzaman12@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033016.png',
    initials: 'MS',
  },
  {
    id: '232033015',
    name: 'Sarna Nandi',
    role: 'Joint Treasurer',
    email: 'sarnanandi443@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033015.png',
    initials: 'SN',
  },
  // ─── Culture ─────────────────────────────────────────────────────────────────
  {
    id: '250033002',
    name: 'Iqbal Ibn Khair',
    role: 'Cultural Secretary',
    email: 'iqbalibnkhair@gmail.com',
    facebookUrl: null,
    photo: '/executives/250033002.png',
    initials: 'IK',
  },
  {
    id: '242033005',
    name: 'Saiyeda Khatun',
    role: 'Joint Cultural Secretary',
    email: 'saiyeda.jmc@gmail.com',
    facebookUrl: null,
    photo: '/executives/242033005.png',
    initials: 'SK',
  },
  // ─── Press & Publication ─────────────────────────────────────────────────────
  {
    id: '242033011',
    name: 'Barkatullah',
    role: 'Press & Publication Secretary',
    email: 'barkat09@gmail.com',
    facebookUrl: null,
    photo: '/executives/242033011.png',
    initials: 'BA',
  },
  {
    id: '252033003',
    name: 'Nadia Akter',
    role: 'Joint Press & Publication Secretary',
    email: 'nadia252jmc@gmail.com',
    facebookUrl: null,
    photo: '/executives/252033003.png',
    initials: 'NA',
  },
  // ─── Media Lab ───────────────────────────────────────────────────────────────
  {
    id: '232033022',
    name: 'Md Rajib',
    role: 'Media Lab Secretary',
    email: 'rajibahmed4018@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033022.png',
    initials: 'MR',
  },
  {
    id: '232033014',
    name: 'Md. Imtias Haque',
    role: 'Joint Media Lab Secretary',
    email: 'imtiashaque05@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033014.png',
    initials: 'IH',
  },
  // ─── Office ──────────────────────────────────────────────────────────────────
  {
    id: '232033010',
    name: 'Sharmin Akter',
    role: 'Office Secretary',
    email: 'farjanasharmin093@gmail.com',
    facebookUrl: null,
    photo: '/executives/232033010.png',
    initials: 'SA',
  },
  {
    id: '242033013',
    name: 'Md. Ariful Al-Amin',
    role: 'Joint Office Secretary',
    email: 'alaminsarthak@gmail.com',
    facebookUrl: null,
    photo: '/executives/242033013.png',
    initials: 'AA',
  },
  // ─── Photography & Multimedia ────────────────────────────────────────────────
  {
    id: '250033001',
    name: 'Md. Tanvir Hossain Khan',
    role: 'Photography & Multimedia Secretary',
    email: 'tktanvir151@gmail.com',
    facebookUrl: null,
    photo: '/executives/250033001.png',
    initials: 'TK',
  },
  {
    id: '252033011',
    name: 'Ohead',
    role: 'Joint Photography & Multimedia Secretary',
    email: 'ohidhasanrony17@gmail.com',
    facebookUrl: 'https://www.facebook.com/share/1TrPVnVrFL/',
    photo: '/executives/252033011.png',
    initials: 'OH',
  },
  // ─── Sports ──────────────────────────────────────────────────────────────────
  {
    id: '250033004',
    name: 'Nishat Mia',
    role: 'Sports Secretary',
    email: '250033004@student.green.ac.bd',
    facebookUrl: null,
    photo: '/executives/250033004.png',
    initials: 'NM',
  },
  {
    id: '252033004',
    name: 'Ajmaen Islam',
    role: 'Joint Sports Secretary',
    email: '252033004@student.green.ac.bd',
    facebookUrl: null,
    photo: null,
    initials: 'AI',
  },
  // ─── Film & Visual Storytelling ──────────────────────────────────────────────
  {
    id: '242033009',
    name: 'Sumaiya Sultana Antara',
    role: 'Film & Visual Storytelling Secretary',
    email: 'sultanasumaiya55555@gmail.com',
    facebookUrl: 'https://www.facebook.com/sumaiyasultanaantara',
    photo: '/executives/242033009.png',
    initials: 'SS',
  },
  {
    id: '250033007',
    name: 'Fiaz Sarker',
    role: 'Joint Film & Visual Storytelling Secretary',
    email: 'tasinislamfs505@gmail.com',
    facebookUrl: null,
    photo: '/executives/250033007.png',
    initials: 'FS',
  },
  // ─── ICT ─────────────────────────────────────────────────────────────────────
  {
    id: '261033011',
    name: 'Al-Jubayer Rayhan Tamim Mollah',
    role: 'ICT Secretary',
    email: 'tamimmolla81@gmail.com',
    facebookUrl: 'https://www.facebook.com/share/1bc7njpi1T/',
    photo: '/executives/261033011.png',
    initials: 'AT',
  },
  // ─── Executive Members ────────────────────────────────────────────────────────
  {
    id: '252033014',
    name: 'Md Shaikat Akando',
    role: 'Executive Member',
    email: 'soykotakndo2004@gmail.com',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61580173913851',
    photo: '/executives/252033014.png',
    initials: 'MA',
  },
  {
    id: '252033006',
    name: 'Jobayda Islam Zoya',
    role: 'Executive Member',
    email: 'Jobayda.jmc@gmail.com',
    facebookUrl: null,
    photo: '/executives/252033006.png',
    initials: 'JZ',
  },
  {
    id: '252033005',
    name: 'Fahim Reza',
    role: 'Executive Member',
    email: 'fahimrezabd005@gmail.com',
    facebookUrl: null,
    photo: '/executives/252033005.png',
    initials: 'FR',
  },
]

// Group executives into sections
const sections = [
  {
    label: 'Advisor & Special Role',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    members: executives.filter((e) =>
      ['Moderator', 'Ambassador'].includes(e.role)
    ),
  },
  {
    label: 'Core Leadership',
    icon: Award,
    color: 'from-jmc-green to-jmc-orange',
    members: executives.filter((e) =>
      ['President', 'Vice President', 'General Secretary', 'Joint Secretary'].includes(e.role)
    ),
  },
  {
    label: 'Secretariat',
    icon: Users,
    color: 'from-blue-500 to-cyan-400',
    members: executives.filter(
      (e) =>
        ![
          'Ambassador',
          'Moderator',
          'President',
          'Vice President',
          'General Secretary',
          'Joint Secretary',
          'Executive Member',
        ].includes(e.role)
    ),
  },
  {
    label: 'Executive Members',
    icon: Users,
    color: 'from-amber-500 to-orange-400',
    members: executives.filter((e) => e.role === 'Executive Member'),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function MemberCard({ member }: { member: Executive }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-jmc-green/40 hover:shadow-2xl hover:shadow-jmc-green/10 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -6 }}
    >
      {/* Top banner */}
      <div className="h-20 bg-gradient-to-br from-jmc-green/20 via-jmc-orange/10 to-jmc-green/5 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jmc-orange via-transparent to-jmc-green" />
      </div>

      {/* Photo */}
      <div className="-mt-12 flex justify-center relative z-10 px-4">
        <div className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-lg overflow-hidden bg-gradient-to-br from-jmc-green to-jmc-orange flex items-center justify-center">
          {member.photo && !imgError ? (
            <Image
              src={member.photo}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-white font-bold text-2xl select-none">
              {member.initials}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-3 text-center">
        <h3 className="font-semibold text-base text-jmc-navy dark:text-white leading-snug mb-1">
          {member.name}
        </h3>
        <p className="text-jmc-green dark:text-jmc-green font-semibold text-xs mb-1 leading-snug">
          {member.role}
        </p>
        {member.id && (
          <p className="text-gray-400 dark:text-gray-500 text-xs mb-3 font-mono">
            ID: {member.id}
          </p>
        )}

        {/* Social links */}
        <div className="flex justify-center gap-2 mt-2">
          <a
            href={`mailto:${member.email}`}
            title={member.email}
            className="p-2 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-jmc-green/10 transition-colors group/btn"
            aria-label={`Email ${member.name}`}
          >
            <Mail
              size={15}
              className="text-gray-500 dark:text-gray-400 group-hover/btn:text-jmc-green transition-colors"
            />
          </a>
          {member.facebookUrl && (
            <a
              href={member.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook profile"
              className="p-2 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group/btn"
              aria-label={`Facebook profile of ${member.name}`}
            >
              <FacebookIcon
                size={15}
                className="text-gray-500 dark:text-gray-400 group-hover/btn:text-blue-500 transition-colors"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ExecutivesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-jmc-navy via-slate-800 to-slate-900">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-jmc-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-jmc-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-jmc-green/20 text-jmc-green text-sm font-semibold mb-4 border border-jmc-green/30">
              Session 2025–26
            </span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-white mb-4">
              Executive{' '}
              <span className="bg-gradient-to-r from-jmc-green to-jmc-orange bg-clip-text text-transparent">
                Committee
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Meet the dedicated team driving innovation, creativity, and
              excellence at JMC Media Club, Green University.
            </p>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { label: 'Total Members', value: executives.length },
                { label: 'Departments', value: '10+' },
                { label: 'Active Since', value: '2024' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <p className="text-jmc-green font-bold text-2xl">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {sections.map((section) => {
          if (!section.members.length) return null
          const Icon = section.icon
          return (
            <div key={section.label}>
              {/* Section heading */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="font-montserrat font-bold text-2xl text-jmc-navy dark:text-white">
                    {section.label}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {section.members.length}{' '}
                    {section.members.length === 1 ? 'member' : 'members'}
                  </p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-slate-700 to-transparent ml-4" />
              </motion.div>

              {/* Cards */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {section.members.map((member) => (
                  <MemberCard key={member.id ?? member.name} member={member} />
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>

      <Footer />
    </main>
  )
}
