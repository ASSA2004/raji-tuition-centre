'use client'

import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ClassesExplorer } from '@/components/ClassesExplorer'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { LearningApproach } from '@/components/LearningApproach'
import { LocalSeoSection } from '@/components/LocalSeoSection'
import { Testimonials } from '@/components/Testimonials'
import { TimingsHub } from '@/components/TimingsHub'
import { EnquiryForm } from '@/components/EnquiryForm'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { FloatingCall } from '@/components/FloatingCall'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [selectedClass, setSelectedClass] = useState<string>('')

  useEffect(() => {
    // Lenis Smooth Inertia Scroll Initialization
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      const rafId = requestAnimationFrame(raf)

      // GSAP ScrollTrigger integration with Lenis
      lenis.on('scroll', ScrollTrigger.update)

      return () => {
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    }
  }, [])

  const handleOpenEnquiry = (className = '') => {
    setSelectedClass(className)
    const el = document.getElementById('enquiry')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen font-sans antialiased bg-[#FDFBF7] text-slate-800 selection:bg-[#E08000] selection:text-white">
      {/* Header Navigation */}
      <Navbar 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Hero Section (Spacious, Breathing Room, Clean Cinematic Atmosphere) */}
      <Hero 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* About Section */}
      <AboutSection />

      {/* Classes Explorer Section (3s Auto-Rotation with 7s Manual Pause) */}
      <ClassesExplorer 
        onSelectClass={(cls) => handleOpenEnquiry(cls)} 
      />

      {/* Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* 4-Step Learning Approach (Sticky Scroll Container with Sequential Animations) */}
      <LearningApproach />

      {/* Local SEO Section */}
      <LocalSeoSection 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Parent Testimonials Carousel */}
      <Testimonials />

      {/* Timings & Location Hub */}
      <TimingsHub 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Interactive Admissions Enquiry Form */}
      <EnquiryForm 
        initialClass={selectedClass} 
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Call Widget (Phone Icon Only) */}
      <FloatingCall />
    </main>
  )
}
