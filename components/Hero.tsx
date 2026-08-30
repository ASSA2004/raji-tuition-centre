'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck, MapPin, Clock, Sparkles } from 'lucide-react'

interface HeroProps {
  onOpenEnquiry: () => void
}

export function Hero({ onOpenEnquiry }: HeroProps) {
  const phone = '+91 89408 68181'
  const telLink = `tel:${phone.replace(/\s+/g, '')}`

  return (
    <section id="hero" className="relative min-h-[85vh] py-20 lg:py-28 bg-[#FDFBF7] flex items-center overflow-hidden">
      
      {/* Cinematic Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E08000]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#051D46]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Text Container — Spacious & Impactful */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#051D46]/5 border border-[#051D46]/10 text-[#051D46] text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-[#E08000]" />
              <span>Personalised Tuition • Tuticorin • Admissions Open</span>
            </motion.div>

            {/* SEO H1 Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#051D46] tracking-tight leading-[1.1]">
                Tuition Centre in Tuticorin –{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E08000] via-amber-500 to-[#F59E0B]">
                  Raji Tuition Centre
                </span>
              </h1>

              <p className="text-2xl sm:text-3xl font-bold font-heading text-[#E08000] tracking-tight pt-1">
                Strong Concepts. Bright Future.
              </p>
            </motion.div>

            {/* Concise, High-Impact Narrative Subhead */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              Personalised school tuition for students from <strong className="text-[#051D46] font-semibold">LKG to 12th Standard</strong>. We build conceptual clarity, individual attention, and exam confidence.
            </motion.p>

            {/* Clean Action Buttons with Generous Spacing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2"
            >
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-3 bg-[#E08000] hover:bg-[#F59E0B] text-white text-base font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
              >
                <span>Enquire About Admissions</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#051D46] border border-slate-300 text-base font-bold px-7 py-4 rounded-2xl shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-[#E08000]" />
                <span>Call {phone}</span>
              </a>
            </motion.div>

            {/* Clean Footer Metadata Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-slate-200/60 max-w-lg"
            >
              <span className="flex items-center gap-1.5 text-[#051D46]">
                <MapPin className="w-4 h-4 text-[#E08000]" />
                Tuticorin / Thoothukudi
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#051D46]">
                <Clock className="w-4 h-4 text-[#E08000]" />
                5:30 PM – 9:00 PM
              </span>
            </motion.div>

          </div>

          {/* Right Cinematic Media Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft Ambient Shadow Backdrop */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#051D46]/20 via-[#E08000]/15 to-transparent blur-2xl pointer-events-none" />

              {/* Main Photo Glass Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/80 shadow-2xl">
                <img
                  src="/raji-students.png"
                  alt="Raji Tuition Centre students attending tuition classes in Tuticorin"
                  className="w-full h-[380px] sm:h-[430px] object-cover rounded-2xl"
                />

                {/* Overlaid Floating Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#E08000] tracking-wider block">
                      Daily Sessions
                    </span>
                    <span className="text-sm font-bold text-[#051D46] font-heading">
                      5:30 PM – 9:00 PM
                    </span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    ● Admissions Open
                  </span>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#051D46] text-white p-4 rounded-2xl shadow-2xl border border-white/20 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E08000] text-white flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-300 block font-medium">Classes Covered</span>
                  <strong className="text-sm font-bold font-heading text-white">LKG to 12th Standard</strong>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
