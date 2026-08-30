'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

interface NavbarProps {
  onOpenEnquiry: () => void
}

export function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phone = '+91 89408 68181'
  const telLink = `tel:${phone.replace(/\s+/g, '')}`

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Approach', href: '#approach' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Timings', href: '#timings' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/95 backdrop-blur-md border-b border-slate-200/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Single Line Title */}
        <a href="#hero" className="flex items-center gap-3 flex-shrink-0 focus:outline-none">
          <div className="relative w-11 h-11 flex-shrink-0 rounded-full bg-white p-1 shadow-sm border border-slate-200">
            <img 
              src="/RTC Logo.png" 
              alt="Raji Tuition Centre logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-extrabold font-heading text-[#051D46] tracking-tight leading-none whitespace-nowrap">
              Raji <span className="text-[#E08000]">Tuition Centre</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-500 uppercase mt-1 whitespace-nowrap">
              Tuticorin • LKG to 12th Standard
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Strictly Single Line (whitespace-nowrap) */}
        <nav className="hidden xl:flex items-center gap-7 font-semibold text-sm text-slate-700" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap hover:text-[#E08000] transition-colors py-1 hover:border-b-2 hover:border-[#E08000]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls — Strictly Single Line */}
        <div className="hidden md:flex items-center gap-3.5 flex-shrink-0">
          <a
            href={telLink}
            className="whitespace-nowrap inline-flex items-center gap-2 text-xs font-bold text-[#051D46] bg-white hover:bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200/90 shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E08000] flex-shrink-0" />
            <span className="whitespace-nowrap">{phone}</span>
          </a>

          <button
            onClick={onOpenEnquiry}
            className="whitespace-nowrap inline-flex items-center justify-center bg-[#051D46] hover:bg-[#092C66] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-800 hover:text-[#051D46] rounded-xl border border-slate-200 bg-white shadow-xs focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 space-y-3 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-slate-800 hover:text-[#E08000] py-2 border-b border-slate-100 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={telLink}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-[#051D46] font-bold text-sm py-3 rounded-xl border border-slate-200 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#E08000]" />
                <span className="whitespace-nowrap">Call {phone}</span>
              </a>
              <button
                onClick={() => { onOpenEnquiry(); setMobileMenuOpen(false); }}
                className="w-full bg-[#051D46] text-white font-bold text-sm py-3 rounded-xl shadow-md whitespace-nowrap"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
