'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, Sparkles, Loader2, ArrowRight } from 'lucide-react'

// Authentic WhatsApp SVG Icon Component
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.415C6.442 3.37 1.5 8.31 1.5 14.373c0 2.158.625 4.204 1.81 5.952l-1.92 7.014 7.184-1.884a11.03 11.03 0 005.474 1.45h.005c6.059 0 10.999-4.94 11-11.002 0-2.937-1.144-5.698-3.224-7.78A10.942 10.942 0 0012.051 3.37" />
    </svg>
  )
}

interface EnquiryFormProps {
  initialClass?: string
}

export function EnquiryForm({ initialClass = '' }: EnquiryFormProps) {
  const [parentName, setParentName] = useState('')
  const [studentName, setStudentName] = useState('')
  const [studentClass, setStudentClass] = useState(initialClass || '')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [contactTime, setContactTime] = useState('Evening')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState('')

  const classOptions = [
    'LKG', 'UKG',
    '1st Standard', '2nd Standard', '3rd Standard', '4th Standard', '5th Standard',
    '6th Standard', '7th Standard', '8th Standard',
    '9th Standard', '10th Standard',
    '11th Standard', '12th Standard'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPhoneError('')

    const cleanedPhone = phone.replace(/\D/g, '')
    if (cleanedPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile phone number.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const handleWhatsAppRedirect = () => {
    const text = `Hello Raji Tuition Centre,%0A%0AI am interested in tuition classes in Tuticorin.%0A*Parent Name:* ${parentName || 'Parent'}%0A*Student Name:* ${studentName || 'Student'}%0A*Class:* ${studentClass || 'Not specified'}%0A*Phone:* ${phone || 'Not specified'}%0A*Preferred Time:* ${contactTime}%0A*Message:* ${message || 'Please send details.'}`
    window.open(`https://wa.me/918940868181?text=${text}`, '_blank')
  }

  return (
    <section id="enquiry" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <div className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E08000]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#051D46]/5 text-[#051D46] text-xs font-bold uppercase tracking-wider border border-[#051D46]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#E08000]" />
              <span>Admissions Open • LKG to 12th</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#051D46]">
              Enquire About Tuition Classes
            </h2>

            <p className="text-sm sm:text-base text-slate-600">
              Interested in joining Raji Tuition Centre in Tuticorin? Fill in the form and our team will contact you regarding admissions and class details.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6 space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-emerald-950">
                Thank you! Your enquiry has been received.
              </h3>

              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Our team will contact you shortly regarding timings, class availability, and admission details for <strong>{studentClass || 'your child'}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send Immediate WhatsApp Message</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-slate-600 hover:underline"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Parent Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    Parent / Guardian Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. S. Karthik"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm"
                  />
                </div>

                {/* Student Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    Student Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. K. Rahul"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Student Class */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    Student Class <span className="text-rose-500">*</span>
                  </label>
                  <select
                    required
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm"
                  >
                    <option value="" disabled>Select Standard</option>
                    {classOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit Mobile Number"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm"
                  />
                  {phoneError && (
                    <span className="text-xs text-rose-600 font-semibold block">{phoneError}</span>
                  )}
                </div>

                {/* WhatsApp Number (Optional) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    WhatsApp Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Same or alternative WhatsApp"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Preferred Contact Time */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    Preferred Contact Time
                  </label>
                  <select
                    value={contactTime}
                    onChange={(e) => setContactTime(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm"
                  >
                    <option value="Morning">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening">Evening (5:30 PM - 9:00 PM)</option>
                  </select>
                </div>

                {/* Message / Requirement */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-[#051D46] uppercase tracking-wider block">
                    Message / Special Requirement
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe school subject support needed or questions..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E08000] focus:border-transparent bg-white text-sm resize-none"
                  />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#051D46] hover:bg-[#092C66] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Enquire Via WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  )
}
