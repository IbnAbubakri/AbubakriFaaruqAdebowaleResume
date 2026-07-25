// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltDegree?: number
  glare?: boolean
}

const springConfig = { stiffness: 200, damping: 20 }

export default function TiltCard({ children, className, tiltDegree = 8, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, springConfig)
  const rotateY = useSpring(rawRotateY, springConfig)

  const glareXPct = useMotionValue(50)
  const glareYPct = useMotionValue(50)
  const glareOpacity = useMotionValue(0)

  const glareBg = useTransform(
    [glareXPct, glareYPct],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, white 0%, transparent 60%)`
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isTouchDevice) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    rawRotateX.set((y - 0.5) * -tiltDegree)
    rawRotateY.set((x - 0.5) * tiltDegree)
    glareXPct.set(x * 100)
    glareYPct.set(y * 100)
    glareOpacity.set(0.15)
  }, [isTouchDevice, tiltDegree, rawRotateX, rawRotateY, glareXPct, glareYPct, glareOpacity])

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) glareOpacity.set(0.15)
  }, [isTouchDevice, glareOpacity])

  const handleMouseLeave = useCallback(() => {
    rawRotateX.set(0)
    rawRotateY.set(0)
    glareXPct.set(50)
    glareYPct.set(50)
    glareOpacity.set(0)
  }, [rawRotateX, rawRotateY, glareXPct, glareYPct, glareOpacity])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200, rotateX, rotateY }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      {glare && !isTouchDevice && (
        <motion.div
          style={{ opacity: glareOpacity, background: glareBg }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
        />
      )}
    </motion.div>
  )
}
