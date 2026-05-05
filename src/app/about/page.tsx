'use client'

import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <About />
      <Footer />
    </main>
  )
}
