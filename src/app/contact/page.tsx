'use client'

import Navbar from '@/components/Navbar'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}
