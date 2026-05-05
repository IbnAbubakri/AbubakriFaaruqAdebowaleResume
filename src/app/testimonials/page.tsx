'use client'

import Navbar from '@/components/Navbar'
import Testimonials from '@/sections/Testimonials'
import Footer from '@/components/Footer'

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Testimonials />
      <Footer />
    </main>
  )
}
