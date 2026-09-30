// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Certifications from '@/sections/Certifications'
import Experience from '@/sections/Experience'
import Education from '@/sections/Education'
import Projects from '@/sections/Projects'
import Achievements from '@/sections/Achievements'
import Testimonials from '@/sections/Testimonials'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'

const SiteScene = dynamic(() => import('@/components/three/SiteScene'), {
  ssr: false,
  loading: () => null,
})

export default function ClientWrapper() {
  return (
    <main id="main-content">
      <SiteScene />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
