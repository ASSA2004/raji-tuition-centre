'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Brain, Target, Sparkles, Award } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E08000]/10 text-[#E08000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Philosophy</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D46] tracking-tight">
            Tuition Centre in Tuticorin for Better Learning
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At Raji Tuition Centre, we provide personalised tuition classes in Tuticorin for students from LKG to 12th Standard.
          </p>
        </div>

        {/* Story Body Paragraphs */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-xl font-bold font-heading text-[#051D46] flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#E08000]" />
                Understanding Concepts vs. Memorising Lessons
              </h3>
              <p>
                Our teaching approach focuses on helping students understand concepts clearly rather than simply memorising lessons. Through individual attention, regular practice and assessments, we help students build confidence and improve their academic performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-xl font-bold font-heading text-[#051D46] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#E08000]" />
                Tailored for Every Learning Requirement
              </h3>
              <p>
                Whether your child needs support with school subjects, stronger fundamentals or focused examination preparation, our school tuition classes in Tuticorin are designed to support their learning needs.
              </p>
            </div>
          </div>

          {/* Right Comparison Box: Traditional vs Raji Approach */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#051D46] text-white shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#E08000]/20 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#E08000]" />
                The Raji Tuition Advantage
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Traditional Rote Learning */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-300 block mb-1">Standard Rote Memorisation</span>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Heavy cramming without deep understanding, leading to test anxiety and low long-term retention.
                    </p>
                  </div>
                </div>

                {/* Raji Tuition Method */}
                <div className="p-4 rounded-xl bg-[#E08000]/20 border border-[#E08000]/40 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-200 block mb-1">Raji Concept-Based Mastery</span>
                    <p className="text-slate-200 text-xs leading-relaxed">
                      Clear fundamental explanations, 1:1 individual attention, continuous assessments, and exam-oriented problem solving.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-medium">
                <span>📍 Tuticorin / Thoothukudi</span>
                <span className="text-[#F59E0B] font-bold">LKG to 12th Standard</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
