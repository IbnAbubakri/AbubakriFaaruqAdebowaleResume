'use client'

import Navbar from '@/components/Navbar'
import Cloud from '@/components/Cloud'
import Rain from '@/components/Rain'
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

export default function ClientWrapper() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-gray-900">
      <Rain />
      <Cloud />
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
