'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

function randPos(pad = 60) {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1200
  const h = typeof window !== 'undefined' ? window.innerHeight : 800
  return {
    x: Math.random() * (w - pad * 2) + pad,
    y: Math.random() * (h - pad * 2) + pad,
  }
}

function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export default function CatAndRat() {
  const [ratPos, setRatPos] = useState(() => randPos())
  const [catPos, setCatPos] = useState(() => randPos())
  const [ratTarget, setRatTarget] = useState(() => randPos())

  const moveRat = useCallback(() => {
    setRatTarget(randPos())
  }, [])

  useEffect(() => {
    const interval = setInterval(moveRat, 2500)
    return () => clearInterval(interval)
  }, [moveRat])

  // Cat continuously chases rat's current position
  useEffect(() => {
    const chase = setInterval(() => {
      setCatPos(prev => {
        const gap = dist(prev, ratPos)
        // Cat speeds up when close (pounce), slows when far (stalk)
        const speed = gap < 150 ? 3.5 : gap < 300 ? 2.5 : 1.2
        const dx = ratPos.x - prev.x
        const dy = ratPos.y - prev.y
        const d = Math.hypot(dx, dy)
        if (d < 10) return prev
        return {
          x: prev.x + (dx / d) * Math.min(speed, d),
          y: prev.y + (dy / d) * Math.min(speed, d),
        }
      })
    }, 50)
    return () => clearInterval(chase)
  }, [ratPos])

  // Rat flees faster when cat is near
  useEffect(() => {
    const flee = setInterval(() => {
      const gap = dist(ratPos, catPos)
      if (gap < 120) {
        // Rat sprints away
        setRatPos(randPos())
        setRatTarget(randPos())
      }
    }, 200)
    return () => clearInterval(flee)
  }, [ratPos, catPos])

  // Cat flips sprite toward rat
  const catFlip = catPos.x < ratPos.x ? 1 : -1
  const ratFlip = ratPos.x < ratTarget.x ? 1 : -1

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <motion.div
        className="absolute text-2xl select-none"
        animate={{ x: catPos.x, y: catPos.y, scaleX: catFlip }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      >
        🐱
      </motion.div>
      <motion.div
        className="absolute text-xl select-none"
        animate={{ x: ratPos.x, y: ratPos.y, scaleX: ratFlip }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      >
        🐭
      </motion.div>
    </div>
  )
}
