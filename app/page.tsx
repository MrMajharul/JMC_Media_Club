'use client'

import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

// 1. Welcome
import HeroSection from '@/components/sections/hero'
// 2. Brand Identity
import OurFocus from '@/components/sections/our-focus'
// 3. Why JMC Media Club
import Stats from '@/components/sections/stats'
// 4. Vision & Mission
import About from '@/components/sections/about'
// 5. Featured Stories
import FeaturedStories from '@/components/sections/featured-stories'
// 6. Latest Productions
import LatestProductions from '@/components/sections/latest-productions'
// 7. Upcoming Events
import FeaturedEvents from '@/components/sections/featured-events'
// 8. Awards & Achievements
import AwardsAchievements from '@/components/sections/awards-achievements'
// 9. Executive Leadership
import Committee from '@/components/sections/committee'
// 10. Chairperson's Message
import ChairpersonsMessage from '@/components/sections/chairpersons-message'
// 11. Moderator's Message
import ModeratorsMessage from '@/components/sections/moderators-message'
// 12. President's Message
import PresidentsMessage from '@/components/sections/presidents-message'
// 13. Gallery Preview
import GalleryPreview from '@/components/sections/gallery-preview'
// 14. Testimonials
import Testimonials from '@/components/sections/testimonials'
// 15. Join Our Community
import JoinCommunity from '@/components/sections/join-community'
// 16. Newsletter Subscription
import Newsletter from '@/components/sections/newsletter'
// 17. Contact Information
import ContactInfoBlock from '@/components/sections/contact-info-block'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* 1. Welcome */}
      <HeroSection />

      {/* 2. Brand Identity */}
      <OurFocus />

      {/* 3. Why JMC Media Club */}
      <Stats />

      {/* 4. Vision & Mission */}
      <About />

      {/* 5. Chairperson's Message */}
      <ChairpersonsMessage />

      {/* 6. Moderator's Message */}
      <ModeratorsMessage />

      {/* 7. President's Message */}
      <PresidentsMessage />

      {/* 8. Featured Stories */}
      <FeaturedStories />

      {/* 9. Latest Productions */}
      <LatestProductions />

      {/* 10. Upcoming Events */}
      <FeaturedEvents />

      {/* 11. Awards & Achievements */}
      <AwardsAchievements />

      {/* 12. Executive Leadership */}
      <Committee />

      {/* 13. Gallery */}
      <GalleryPreview />

      {/* 14. Testimonials */}
      <Testimonials />

      {/* 15. Join Our Community */}
      <JoinCommunity />

      {/* 16. Newsletter */}
      <Newsletter />

      {/* 17. Contact Information */}
      <ContactInfoBlock />

      {/* 18. Footer */}
      <Footer />
    </main>
  )
}

