'use client'

import React from 'react'
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react'

export function Footer() {
  const phone = '+91 89408 68181'
  const telLink = `tel:${phone.replace(/\s+/g, '')}`

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#041432] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md flex-shrink-0">
                <img src="/RTC Logo.png" alt="Raji Tuition Centre logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-white block leading-none">
                  Raji <span className="text-[#E08000]">Tuition Centre</span>
                </span>
                <span className="text-xs text-amber-300 font-semibold tracking-wider uppercase block mt-1">
                  Strong Concepts. Bright Future.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-normal">
              Tuition Classes for LKG to 12th Standard in Tuticorin / Thoothukudi. Personalised academic support, individual attention, concept-based learning and regular tests.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E08000]" />
                Tuticorin, Tamil Nadu
              </span>
              <span>•</span>
              <a href={telLink} className="flex items-center gap-1.5 hover:text-[#E08000]">
                <Phone className="w-3.5 h-3.5 text-[#E08000]" />
                {phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-[#E08000] tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
              <li><a href="#hero" className="hover:text-[#E08000] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E08000] transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-[#E08000] transition-colors">Classes (LKG - 12th)</a></li>
              <li><a href="#why-us" className="hover:text-[#E08000] transition-colors">Why Choose Us</a></li>
              <li><a href="#approach" className="hover:text-[#E08000] transition-colors">Learning Approach</a></li>
              <li><a href="#testimonials" className="hover:text-[#E08000] transition-colors">Parent Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#E08000] transition-colors">Contact & Admissions</a></li>
            </ul>
          </div>

          {/* Academic Classes */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-[#E08000] tracking-wider">
              School Tuition Standards
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
              <li>LKG to 5th Standard Primary Foundation</li>
              <li>6th to 8th Standard Middle School Core</li>
              <li>9th & 10th Standard Board Exam Focus in Tuticorin</li>
              <li>11th & 12th Standard Higher Secondary Guidance</li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block">
                Session Hours: Monday – Saturday (5:30 PM – 9:00 PM)
              </span>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Raji Tuition Centre. All Rights Reserved. Tuticorin, Tamil Nadu.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E08000]" />
          </button>
        </div>

      </div>
    </footer>
  )
}
