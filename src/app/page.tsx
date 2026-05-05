'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
