'use client'

import React from 'react'
import { Clock, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'

interface TimingsHubProps {
  onOpenEnquiry: () => void
}

export function TimingsHub({ onOpenEnquiry }: TimingsHubProps) {
  return (
    <section id="timings" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#051D46] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E08000]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Centre Operational Hours</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
                Tuition Centre Timings & Location
              </h2>

              <p className="text-lg text-amber-200 font-medium">
                Admissions Are Open — Give your child the right academic guidance to learn, improve and grow with confidence.
              </p>

              {/* 3 Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase block">Classes Offered</span>
                  <strong className="text-lg font-bold font-heading text-white block">LKG to 12th Standard</strong>
                  <span className="text-xs text-amber-300">All Major School Subjects</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase block">Daily Evening Timing</span>
                  <strong className="text-lg font-bold font-heading text-white block">5:30 PM – 9:00 PM</strong>
                  <span className="text-xs text-emerald-400">Monday – Saturday Sessions</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase block">Primary Location</span>
                  <strong className="text-lg font-bold font-heading text-white block">Tuticorin / Thoothukudi</strong>
                  <span className="text-xs text-slate-300">Tamil Nadu, India</span>
                </div>

              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-stretch bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E08000] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-heading text-white">
                Admissions Open 2026
              </h3>

              <p className="text-xs text-slate-200">
                Reserve a slot for individual academic attention and concept-based coaching.
              </p>

              <button
                onClick={onOpenEnquiry}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E08000] hover:bg-[#F59E0B] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
