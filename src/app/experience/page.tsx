'use client'

import Navbar from '@/components/Navbar'
import Experience from '@/sections/Experience'
import Footer from '@/components/Footer'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Experience />
      <Footer />
    </main>
  )
}
