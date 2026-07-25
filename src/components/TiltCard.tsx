// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltDegree?: number
  glare?: boolean
}

export default function TiltCard({ children, className, tiltDegree = 8, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || isTouchDevice) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotateX((y - 0.5) * -tiltDegree)
    setRotateY((x - 0.5) * tiltDegree)
    setGlareX(x * 100)
    setGlareY(y * 100)
  }

  function handleMouseEnter() {
    if (!isTouchDevice) setIsHovered(true)
  }

  function handleMouseLeave() {
    setRotateX(0)
    setRotateY(0)
    setGlareX(50)
    setGlareY(50)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      animate={isTouchDevice ? {} : { rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      {glare && !isTouchDevice && (
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 0.15 : 0,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, white 0%, transparent 60%)`,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
        />
      )}
    </motion.div>
  )
}
