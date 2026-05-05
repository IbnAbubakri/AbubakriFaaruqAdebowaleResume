'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
