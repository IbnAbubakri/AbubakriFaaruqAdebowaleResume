'use client'

import Navbar from '@/components/Navbar'
import Education from '@/sections/Education'
import Footer from '@/components/Footer'

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Education />
      <Footer />
    </main>
  )
}
