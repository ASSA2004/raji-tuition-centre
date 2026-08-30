'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, ShieldCheck, Info } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      title: 'A great place for my child to learn.',
      quote: 'The individual attention and regular tests have helped my son understand concepts much better. We are happy with his progress.',
      author: 'S. Karthik',
      role: 'Parent of 8th Standard Student',
      location: 'Tuticorin'
    },
    {
      title: 'Strong focus on concepts and practice.',
      quote: 'The teaching approach is simple and easy to understand. My daughter has become more confident in her studies.',
      author: 'Priya Raj',
      role: 'Parent of 10th Standard Student',
      location: 'Thoothukudi'
    },
    {
      title: 'Very supportive learning environment.',
      quote: 'We were looking for personalised attention for our son, and Raji Tuition Centre has been a good choice.',
      author: 'M. Saravanan',
      role: 'Parent of 6th Standard Student',
      location: 'Tuticorin'
    },
    {
      title: 'Good academic guidance.',
      quote: 'The regular assessments help us understand our child\'s progress. We appreciate the consistent support given to students.',
      author: 'J. Meena',
      role: 'Parent of 12th Standard Student',
      location: 'Thoothukudi'
    }
  ]

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const active = reviews[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E08000]/10 text-[#E08000] text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Parent Reviews & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D46] tracking-tight">
            What Parents in Tuticorin Say
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Real experiences from families whose children attend Raji Tuition Centre.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative">
            
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex gap-1 text-[#E08000]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E08000]" />
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#051D46] bg-slate-200/60 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E08000]" />
                Parent Verification
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#051D46]">
                  "{active.title}"
                </h3>

                <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
                  "{active.quote}"
                </blockquote>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <strong className="text-base font-bold text-[#051D46] block font-heading">
                      {active.author}
                    </strong>
                    <span className="text-xs text-slate-500 font-medium">
                      {active.role} • {active.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-200/60">
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#E08000]' : 'w-2.5 bg-slate-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white border border-slate-200 text-[#051D46] hover:bg-[#051D46] hover:text-white transition-colors shadow-xs"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white border border-slate-200 text-[#051D46] hover:bg-[#051D46] hover:text-white transition-colors shadow-xs"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Mandatory Task Disclaimer Box from DOCX */}
          <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#E08000] flex-shrink-0 mt-0.5" />
            <p className="leading-tight">
              <strong>Note:</strong> These are sample testimonials provided for the development task. They must be replaced with verified testimonials before commercial publication.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
