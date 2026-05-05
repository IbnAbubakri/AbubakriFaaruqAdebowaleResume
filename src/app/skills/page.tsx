'use client'

import Navbar from '@/components/Navbar'
import Skills from '@/sections/Skills'
import Footer from '@/components/Footer'

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Skills />
      <Footer />
    </main>
  )
}
