# Raji Tuition Centre

A high-performance, responsive landing page engineered for **Raji Tuition Centre** (Tuticorin, Tamil Nadu). Built with Next.js 16 (App Router), React 19, TypeScript, and a motion stack comprising GSAP ScrollTrigger, Lenis Smooth Scroll, and Framer Motion.

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** Next.js 16.3.3 (App Router, Turbopack)
* **Core:** React 19, TypeScript 5.7
* **Styling:** Tailwind CSS v4, PostCSS
* **Motion & Animation:** GSAP 3.15 (ScrollTrigger), Lenis 1.3 (Inertia Smooth Scroll), Framer Motion 13.1
* **Icons & UI Utilities:** Lucide React, Class Variance Authority (`cva`), `clsx`, `tailwind-merge`
* **Package Manager:** pnpm

---

## 🏗️ Architecture & Component Design

The codebase follows a modular client-component architecture under the Next.js App Router:

```text
├── app/
│   ├── globals.css         # Custom CSS tokens, glassmorphism utilities & CSS variables
│   ├── layout.tsx          # Root layout, Google Fonts (Outfit & Inter), SEO metadata
│   ├── page.tsx            # Main page assembly, Lenis smooth scroll & GSAP initialization
│   └── sitemap.ts          # Dynamic sitemap generator
├── components/
│   ├── Navbar.tsx          # Responsive navigation, single-line alignment, mobile drawer
│   ├── Hero.tsx            # SEO H1 headline, slogan badge, and high-impact visual card
│   ├── AboutSection.tsx    # Concept-based mastery vs rote learning breakdown
│   ├── ClassesExplorer.tsx # Interactive LKG–12th standard tabs with 5s/7s auto-rotation
│   ├── WhyChooseUs.tsx     # 6 core pillars grid
│   ├── LearningApproach.tsx# Sticky container with GSAP ScrollTrigger 4-step progression
│   ├── LocalSeoSection.tsx # Tuticorin local SEO keyword hub
│   ├── Testimonials.tsx    # Parent review carousel with verification disclaimer
│   ├── TimingsHub.tsx      # Operational hours (5:30 PM - 9:00 PM) & admissions widget
│   ├── EnquiryForm.tsx     # 10-digit phone validation form + instant WhatsApp link
│   ├── ContactSection.tsx  # Direct call & location metadata
│   ├── Footer.tsx          # Local SEO links, copyright & back-to-top trigger
│   ├── FloatingCall.tsx    # Sticky navy call CTA button
│   └── JsonLd.tsx          # EducationalOrganization JSON-LD structured data
└── public/
    ├── RTC Logo.png        # Brand logo asset
    ├── raji-students.png   # Hero feature photo
    └── robots.txt          # Search engine crawl directives
```

---

## ⚡ Key Engineering Features

### 1. Advanced Motion System (GSAP + Lenis + Framer Motion)
* **Global Smooth Inertia Scroll:** Lenis smooth wheel engine bound to `requestAnimationFrame` loop in [`app/page.tsx`](file:///e:/works/school/raji-tuition-centre/app/page.tsx).
* **Sticky GSAP ScrollTrigger:** Section 7 ([`LearningApproach.tsx`](file:///e:/works/school/raji-tuition-centre/components/LearningApproach.tsx)) utilizes a sticky container (`min-h-[250vh]`). ScrollTrigger calculates scroll progress and updates active stages (*01 Understand → 02 Practice → 03 Assess → 04 Improve*) without layout shifts.

### 2. Auto-Rotating Curriculum Explorer
* [`ClassesExplorer.tsx`](file:///e:/works/school/raji-tuition-centre/components/ClassesExplorer.tsx) features a 5-second default tab auto-rotation.
* Manual clicks pause auto-rotation for 7 seconds before resuming.
* Active tab renders an animated progress bar indicator (`width: 0% → 100%`).

### 3. Technical & Local SEO
* **Single H1 Directive:** Strictly one `<h1>` tag (`Tuition Centre in Tuticorin – Raji Tuition Centre`).
* **Structured Data:** Injected `EducationalOrganization` JSON-LD schema with location geo-coordinates and opening hours (`Mo-Sa 17:30-21:00`).
* **Metadata:** Full OpenGraph, Twitter cards, canonical URL, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🚀 Local Setup & Build

### Prerequisites
* Node.js v18.x or higher
* pnpm installed (`npm i -g pnpm`)

### Installation & Run

```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm dev

# 3. Compile optimized production build
pnpm build
```
