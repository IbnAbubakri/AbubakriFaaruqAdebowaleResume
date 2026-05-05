'use client'

import Navbar from '@/components/Navbar'
import Projects from '@/sections/Projects'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  )
}
