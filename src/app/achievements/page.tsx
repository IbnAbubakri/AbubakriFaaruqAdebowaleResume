'use client'

import Navbar from '@/components/Navbar'
import Achievements from '@/sections/Achievements'
import Footer from '@/components/Footer'

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Achievements />
      <Footer />
    </main>
  )
}
