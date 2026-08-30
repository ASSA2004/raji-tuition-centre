'use client'

import React from 'react'
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react'

interface LocalSeoSectionProps {
  onOpenEnquiry: () => void
}

export function LocalSeoSection({ onOpenEnquiry }: LocalSeoSectionProps) {
  const phone = '+91 89408 68181'
  const telLink = `tel:${phone.replace(/\s+/g, '')}`

  return (
    <section className="py-16 bg-[#FDFBF7] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#051D46]/10 text-[#051D46] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#E08000]" />
              <span>Local Academic Hub • Tuticorin / Thoothukudi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#051D46]">
              Looking for a Tuition Centre in Tuticorin?
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Finding the right tuition centre in Tuticorin (Thoothukudi) can make a difference in a student's academic journey.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Raji Tuition Centre provides tuition support for students from LKG to 12th Standard, with a focus on individual attention, concept-based learning and regular academic assessment. If you are a parent looking for tuition classes in Tuticorin for your child, get in touch with us to learn more about our classes, timings and admissions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-bold text-[#051D46]">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E08000]" />
                Tuticorin / Thoothukudi, Tamil Nadu
              </span>
              <a href={telLink} className="flex items-center gap-2 hover:text-[#E08000]">
                <Phone className="w-4 h-4 text-[#E08000]" />
                {phone}
              </a>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E08000]" />
                5:30 PM – 9:00 PM
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button
              onClick={onOpenEnquiry}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E08000] hover:bg-[#F59E0B] text-white text-base font-bold px-6 py-4 rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Enquire About Admissions</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={telLink}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#051D46] hover:bg-[#092C66] text-white text-base font-bold px-6 py-4 rounded-xl shadow-md transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#E08000]" />
              <span>Call Centre Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
