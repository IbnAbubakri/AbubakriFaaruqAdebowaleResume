'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const emojis = ['🐱', '🐈', '😺', '🐈‍⬛', '🐭', '🐁', '🐀', '🧀']

function randomPos() {
  return {
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 80 : 500),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 80 : 500),
  }
}

function randomDelay() {
  return Math.random() * 2 + 1
}

function randomDuration() {
  return Math.random() * 3 + 2
}

export default function CatAndRat() {
  const [cat, setCat] = useState({ x: 100, y: 100 })
  const [rat, setRat] = useState({ x: 300, y: 200 })
  const [catEmoji] = useState(() => emojis[Math.floor(Math.random() * 4)])
  const [ratEmoji] = useState(() => emojis[Math.floor(Math.random() * 4) + 4])

  useEffect(() => {
    const interval = setInterval(() => {
      const newRat = randomPos()
      setRat(newRat)
      setTimeout(() => {
        setCat(newRat)
      }, 600)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <motion.div
        key="cat"
        className="absolute text-2xl"
        animate={{ x: cat.x, y: cat.y }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        {catEmoji}
      </motion.div>
      <motion.div
        key="rat"
        className="absolute text-xl"
        animate={{ x: rat.x, y: rat.y }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.3 }}
      >
        {ratEmoji}
      </motion.div>
    </div>
  )
}
