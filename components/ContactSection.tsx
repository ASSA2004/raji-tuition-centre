'use client'

import React from 'react'
import { MapPin, Phone, Clock, Sparkles, ArrowRight } from 'lucide-react'

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.442 3.37 1.5 8.31 1.5 14.373c0 2.158.625 4.204 1.81 5.952l-1.92 7.014 7.184-1.884a11.03 11.03 0 005.474 1.45h.005c6.059 0 10.999-4.94 11-11.002 0-2.937-1.144-5.698-3.224-7.78A10.942 10.942 0 0012.051 3.37" />
    </svg>
  )
}

export function ContactSection() {
  const phone = '+91 89408 68181'
  const telLink = `tel:${phone.replace(/\s+/g, '')}`
  const whatsappUrl = 'https://wa.me/918940868181?text=Hello%20Raji%20Tuition%20Centre,%20I%20have%20an%20enquiry%20regarding%20tuition%20classes%20in%20Tuticorin.'

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#051D46]/5 text-[#051D46] text-xs font-bold uppercase tracking-wider border border-[#051D46]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#E08000]" />
              <span>Direct Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D46] tracking-tight">
              Contact Raji Tuition Centre in Tuticorin
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Have questions about our tuition classes in Tuticorin? Contact us to know more about admissions, classes, timings and academic support.
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#051D46] text-white flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#E08000]" />
                </div>
                <div>
                  <strong className="text-[#051D46] font-heading font-bold text-base block mb-0.5">
                    Location
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tuticorin / Thoothukudi, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#051D46] text-white flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#E08000]" />
                </div>
                <div>
                  <strong className="text-[#051D46] font-heading font-bold text-base block mb-0.5">
                    Phone & Admissions
                  </strong>
                  <a href={telLink} className="text-xs font-bold text-[#E08000] hover:underline block">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#051D46] text-white flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#E08000]" />
                </div>
                <div>
                  <strong className="text-[#051D46] font-heading font-bold text-base block mb-0.5">
                    Operating Hours
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Monday – Saturday: 5:30 PM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#051D46] text-white flex-shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <strong className="text-[#051D46] font-heading font-bold text-base block mb-0.5">
                    Instant WhatsApp
                  </strong>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-600 hover:underline block">
                    Chat with Centre Team
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2.5 bg-[#051D46] hover:bg-[#092C66] text-white font-bold text-sm px-7 py-4 rounded-xl shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4.5 h-4.5 text-[#E08000]" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-7 py-4 rounded-xl shadow-md transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Card: Final Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#051D46] to-[#0A2540] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-white/10 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#E08000] text-white flex items-center justify-center font-bold font-heading text-xl shadow-lg">
              RTC
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Strong Concepts. Bright Future.
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Help your child build strong academic foundations with personalised tuition and consistent guidance. Admissions Open for LKG to 12th Standard.
            </p>

            <div className="pt-2">
              <a
                href="#enquiry"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E08000] hover:bg-[#F59E0B] text-white font-bold text-sm px-6 py-4 rounded-xl shadow-md transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
