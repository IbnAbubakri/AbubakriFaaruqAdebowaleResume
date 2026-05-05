'use client'

import Navbar from '@/components/Navbar'
import Certifications from '@/sections/Certifications'
import Footer from '@/components/Footer'

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Certifications />
      <Footer />
    </main>
  )
}
