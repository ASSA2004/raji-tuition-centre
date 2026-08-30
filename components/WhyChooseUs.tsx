'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { UserCheck, BookMarked, ClipboardCheck, Lightbulb, Sliders, TrendingUp, ShieldCheck } from 'lucide-react'

export function WhyChooseUs() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Individual Attention',
      description: "Every student learns differently. We provide personalised guidance based on each student's learning needs and level.",
      badge: '1:1 Guidance'
    },
    {
      icon: BookMarked,
      title: 'All Subjects',
      description: 'Comprehensive academic support to help students stay consistent across their school subjects.',
      badge: 'Full Syllabus'
    },
    {
      icon: ClipboardCheck,
      title: 'Regular Tests',
      description: 'Regular assessments help identify learning gaps, track progress and improve examination preparation.',
      badge: 'Progress Tracking'
    },
    {
      icon: Lightbulb,
      title: 'Strong Concepts',
      description: 'Our focus is on developing a clear understanding of concepts that students can apply confidently.',
      badge: 'Zero Rote'
    },
    {
      icon: Sliders,
      title: 'Personalised Learning',
      description: "We adapt our teaching approach to the student's learning pace and academic requirements.",
      badge: 'Custom Pace'
    },
    {
      icon: TrendingUp,
      title: 'Better Academic Performance',
      description: 'Consistent guidance, practice and assessments help students work towards stronger academic performance.',
      badge: 'Exam Results'
    }
  ]

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E08000]/10 text-[#E08000] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Raji Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D46] tracking-tight">
            Why Choose Raji Tuition Centre?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Proven pillars engineered to build academic excellence, student self-belief, and parental trust.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FDFBF7] rounded-2xl p-8 border border-slate-200/80 hover:border-[#E08000]/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#051D46] text-white flex items-center justify-center shadow-md group-hover:bg-[#E08000] group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#051D46] group-hover:text-[#E08000] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#051D46]">
                  <span>Tuticorin Tuition Excellence</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
