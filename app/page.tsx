'use client'

import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero'
import Stats from '@/components/sections/stats'
import FeaturedEvents from '@/components/sections/featured-events'
import About from '@/components/sections/about'
import Committee from '@/components/sections/committee'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Stats />
      <About />
      <FeaturedEvents />
      <Committee />
      <Footer />
    </main>
  )
}
