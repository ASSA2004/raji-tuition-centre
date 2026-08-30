'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, BookOpen, Target, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

interface ClassesExplorerProps {
  onSelectClass: (className: string) => void
}

export function ClassesExplorer({ onSelectClass }: ClassesExplorerProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [isManualPause, setIsManualPause] = useState(false)
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const classData = [
    {
      id: 'lkg-5th',
      badge: 'Primary Foundation',
      title: 'LKG – 5th Standard',
      icon: Users,
      description: 'Build strong academic foundations through simple, engaging and concept-based learning. Our tuition support helps young students develop essential learning habits.',
      subjects: ['Mathematics', 'Science / EVS', 'English Grammar', 'Tamil Fundamentals', 'Handwriting Practice'],
      focusAreas: [
        'Interactive, stress-free concept learning',
        'Daily reading, writing, and arithmetic drills',
        'Personalised attention for young learners',
        'Patience-centered teaching approach'
      ]
    },
    {
      id: '6th-8th',
      badge: 'Middle School Core',
      title: '6th – 8th Standard',
      icon: BookOpen,
      description: 'Strengthen core concepts across school subjects with regular practice, personalised guidance and academic support.',
      subjects: ['Mathematics', 'Science (Physics, Chem, Bio)', 'English', 'Tamil', 'Social Science'],
      focusAreas: [
        'Bridging fundamental gaps in Science & Maths',
        'Regular chapter-wise practice worksheets',
        'Doubt clearance and individual mentorship',
        'Building disciplined study habits'
      ]
    },
    {
      id: '9th-10th',
      badge: 'Board Exam Mastery',
      title: '9th – 10th Standard',
      icon: Target,
      description: 'Focused 10th Standard tuition in Tuticorin with regular practice, assessments and examination-oriented preparation to help students improve their confidence and performance.',
      subjects: ['10th Standard Maths', 'Science (Physics/Chem/Bio)', 'Social Science', 'Languages & Grammar', 'Board Question Bank Practice'],
      focusAreas: [
        'Strict State Board / CBSE syllabus alignment',
        'Weekly mock tests and time management drills',
        'Focused revision strategies for 10th Board exams',
        'Confidence-building diagnostic feedback'
      ]
    },
    {
      id: '11th-12th',
      badge: 'Higher Secondary Specialisation',
      title: '11th – 12th Standard',
      icon: GraduationCap,
      description: 'Subject-focused academic guidance and consistent preparation for students in higher secondary classes, including dedicated 12th Standard tuition in Tuticorin.',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy & Commerce', 'Computer Science'],
      focusAreas: [
        'In-depth subject-specific conceptual coaching',
        'Systematic 12th Standard Board exam preparation',
        'Formula mastery, derivation practice & numerical solving',
        'Targeted examination performance tracking'
      ]
    }
  ]

  // Auto-rotation timer: 5 seconds default, 7 seconds when manually clicked
  useEffect(() => {
    const duration = isManualPause ? 7000 : 5000

    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % classData.length)
      if (isManualPause) {
        setIsManualPause(false) // Resume 5s cycle after 7s pause
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [activeTab, isManualPause, classData.length])

  const handleTabClick = (idx: number) => {
    setActiveTab(idx)
    setIsManualPause(true)
    if (manualTimeoutRef.current) {
      clearTimeout(manualTimeoutRef.current)
    }
  }

  const activeGroup = classData[activeTab]

  return (
    <section id="classes" className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051D46]/5 text-[#051D46] text-xs font-bold uppercase tracking-wider border border-[#051D46]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#E08000]" />
            <span>Academic Classes Offered</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D46] tracking-tight leading-tight">
            Tuition Classes From LKG to 12th Standard
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Select a standard below to view syllabus coverage, guidance approach, and subjects taught.
          </p>
        </div>

        {/* Tab Buttons Grid with Progression Loader Bar */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {classData.map((item, idx) => {
            const Icon = item.icon
            const isActive = activeTab === idx
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(idx)}
                className={`relative overflow-hidden flex items-center justify-center gap-2.5 px-4 py-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#051D46] text-white shadow-lg border border-[#051D46]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#E08000]' : 'text-slate-400'}`} />
                <span className="whitespace-nowrap">{item.title}</span>

                {/* Animated Progression Loader Bar on Active Tab */}
                {isActive && (
                  <motion.div
                    key={`${activeTab}-${isManualPause ? '7s' : '5s'}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: isManualPause ? 7 : 5,
                      ease: 'linear'
                    }}
                    className="absolute bottom-0 left-0 h-1 bg-[#E08000]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Active Class Card Panel */}
        <div className="mt-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-100">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-[#E08000] text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
                    {activeGroup.badge}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold font-heading text-[#051D46]">
                    {activeGroup.title}
                  </h3>
                </div>

                <button
                  onClick={() => onSelectClass(activeGroup.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E08000] hover:bg-[#F59E0B] text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
                >
                  <span>Enquire For {activeGroup.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {activeGroup.description}
              </p>

              {/* Grid: Subjects & Key Highlights */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Subjects Taught */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                    Subjects Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeGroup.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-[#051D46]"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus Methodology */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                    Teaching & Assessment Approach
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {activeGroup.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#E08000] flex-shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
