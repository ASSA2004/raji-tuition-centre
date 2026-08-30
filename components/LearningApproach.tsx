'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, FileText, BarChart3, TrendingUp, Sparkles, CheckCircle, ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function LearningApproach() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Brain,
      tagline: 'Build a clear understanding of important concepts and fundamentals.',
      details: [
        'Break down complex topics into simple visual principles.',
        'Encourage students to ask questions freely without hesitation.',
        'Focus on "Why" and "How" behind every formula and rule.'
      ]
    },
    {
      num: '02',
      title: 'Practice',
      icon: FileText,
      tagline: 'Strengthen learning through regular exercises, revision and practice.',
      details: [
        'Daily subject worksheets tailored to school homework.',
        'Step-by-step problem-solving practice in Maths & Science.',
        'Systematic syllabus revision before school exams.'
      ]
    },
    {
      num: '03',
      title: 'Assess',
      icon: BarChart3,
      tagline: 'Use regular tests and assessments to measure progress and identify areas that need attention.',
      details: [
        'Weekly diagnostic tests matching State Board & CBSE standards.',
        'Detailed evaluation highlighting concept gaps.',
        'Transparent feedback shared with parents.'
      ]
    },
    {
      num: '04',
      title: 'Improve',
      icon: TrendingUp,
      tagline: 'Provide focused guidance to help students overcome difficulties and improve their academic performance.',
      details: [
        '1:1 targeted remedial sessions for weak topics.',
        'Exam time-management techniques and presentation tips.',
        'Sustained confidence boost leading to top marks.'
      ]
    }
  ]

  // GSAP ScrollTrigger: Triggers content changes inside sticky container as user scrolls
  useEffect(() => {
    if (!containerRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const index = Math.min(
          steps.length - 1,
          Math.floor(self.progress * steps.length)
        )
        setActiveStep(index)
      }
    })

    return () => {
      trigger.kill()
    }
  }, [steps.length])

  const active = steps[activeStep]
  const ActiveIcon = active.icon

  return (
    <section 
      ref={containerRef} 
      id="approach" 
      className="relative min-h-[250vh] bg-[#071739] text-white"
    >
      {/* Sticky Content Container */}
      <div className="sticky top-0 min-h-screen py-12 sm:py-16 flex flex-col justify-center overflow-hidden">
        
        {/* Ambient Glow Spotlights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E08000]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>4-Step Learning Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Our Learning Approach
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-normal flex items-center justify-center gap-1.5">
              <span>Scroll down to experience cinematic concept progression</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#E08000] animate-bounce" />
            </p>
          </div>

          {/* Clean Step Progress Indicator Pills (Embedded in Content Layout) */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-[#E08000] text-white shadow-lg scale-105'
                    : 'bg-white/10 text-slate-400 hover:bg-white/20'
                }`}
              >
                <span>{step.num}</span>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Sticky Animated Detail Card Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.num}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.97 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-[#0E2246]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl space-y-6 relative overflow-hidden"
            >
              {/* Top Card Header */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E08000] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider block">
                      Stage {active.num} of 04
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-3xl font-extrabold font-heading text-white/20">
                    {active.num}
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-medium text-amber-200 leading-relaxed">
                "{active.tagline}"
              </p>

              {/* Key Action Bullet Points */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                  Academic Action Plan:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {active.details.map((detail, i) => (
                    <li key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
