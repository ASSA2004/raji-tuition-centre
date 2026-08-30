'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export function FloatingCall() {
  const phone = '+91 89408 68181'
  const telLink = `tel:${phone.replace(/\s+/g, '')}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={telLink}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#051D46] text-white font-bold text-xs shadow-2xl border border-white/20 hover:bg-[#092C66] transition-colors"
        aria-label={`Call Raji Tuition Centre at ${phone}`}
      >
        <span className="absolute -inset-1 rounded-full bg-[#051D46] animate-ping opacity-25 pointer-events-none" />
        <Phone className="w-4 h-4 text-[#E08000]" />
        <span className="hidden sm:inline whitespace-nowrap">Call {phone}</span>
        <span className="sm:hidden font-extrabold whitespace-nowrap">Call Now</span>
      </motion.a>
    </div>
  )
}
