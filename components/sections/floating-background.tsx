'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import {
  Camera,
  Video,
  Mic,
  Podcast,
  Newspaper,
  Play,
  Film,
  Clapperboard,
  Headphones,
  Megaphone,
  Radio,
  Tv,
  Notebook,
  Pen,
  Globe,
  MessageSquare,
  AudioWaveform,
  Image as ImageIcon,
  Antenna
} from 'lucide-react'

const ALL_ICONS = [
  Camera, Video, Mic, Podcast, Newspaper, Play, Film, Clapperboard,
  Headphones, Megaphone, Radio, Tv, Notebook, Pen, Globe,
  MessageSquare, AudioWaveform, ImageIcon, Antenna
]

interface FloatingElement {
  id: number
  Icon: React.ElementType
  x: number // percentage 0-100
  y: number // percentage 0-100
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function FloatingBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse position
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 })
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 })

  // Scroll parallax
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, -150])
  const yParallaxFast = useTransform(scrollY, [0, 1000], [0, -300])
  
  useEffect(() => {
    // Determine number of elements based on screen size
    const width = window.innerWidth
    let count = 15
    if (width < 768) count = 5
    else if (width < 1024) count = 9

    const newElements: FloatingElement[] = []
    
    for (let i = 0; i < count; i++) {
      const Icon = ALL_ICONS[Math.floor(Math.random() * ALL_ICONS.length)]
      newElements.push({
        id: i,
        Icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (120 - 50) + 50, // 50px to 120px for larger, more visible icons
        duration: Math.random() * (25 - 15) + 15, // 15s to 25s for slow, elegant floating
        delay: Math.random() * 5,
        opacity: Math.random() * (0.4 - 0.15) + 0.15 // 15% to 40% for better visibility
      })
    }
    setElements(newElements)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX - rect.left) / rect.width * 2 - 1
      const y = (e.clientY - rect.top) / rect.height * 2 - 1
      
      mouseX.set(x * 30) // max 30px displacement
      mouseY.set(y * 30)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tiny glowing particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-jmc-green"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.1,
              boxShadow: '0 0 8px 2px rgba(34, 197, 94, 0.5)', // Brighter green glow
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Floating Icons */}
      <motion.div 
        className="absolute inset-0"
        style={{
          x: mouseX,
          y: mouseY
        }}
      >
        {elements.map((el) => {
          const isLarge = el.size > 80
          return (
            <motion.div
              key={el.id}
              className="absolute"
              style={{
                left: `${el.x}%`,
                top: `${el.y}%`,
                opacity: el.opacity,
                color: '#22C55E', // Brighter, more visible green matching the reference image
                y: isLarge ? yParallax : yParallaxFast
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [el.opacity * 0.8, el.opacity * 1.2, el.opacity * 0.8],
                y: ["-5%", "5%", "-5%"],
                x: ["-5%", "5%", "-5%"],
                rotate: [-5, 5, -5],
                scale: [0.98, 1.03, 0.98]
              }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                delay: el.delay,
                ease: "linear"
              }}
            >
              <el.Icon 
                size={el.size} 
                strokeWidth={1.2}
                className="drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]" // Added soft green glow
              />
            </motion.div>
          )
        })}
      </motion.div>
      
      {/* Curved connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#166534" stopOpacity="0" />
            <stop offset="50%" stopColor="#166534" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#166534" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Sample connections */}
        <path d="M 10% 20% Q 30% 40% 50% 10%" fill="transparent" stroke="url(#line-grad)" strokeWidth="1" />
        <path d="M 80% 15% Q 60% 30% 90% 60%" fill="transparent" stroke="url(#line-grad)" strokeWidth="1" />
        <path d="M 20% 60% Q 50% 50% 70% 80%" fill="transparent" stroke="url(#line-grad)" strokeWidth="1" />
      </svg>
    </div>
  )
}
