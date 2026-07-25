// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface ProjectCard3DProps {
  children: React.ReactNode
  backContent: React.ReactNode
  className?: string
}

const springConfig = { stiffness: 180, damping: 22 }

export default function ProjectCard3D({
  children,
  backContent,
  className = '',
}: ProjectCard3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, springConfig)
  const rotateY = useSpring(rawRotateY, springConfig)

  const rawScale = useMotionValue(1)
  const scale = useSpring(rawScale, { stiffness: 300, damping: 25 })

  const glareXPct = useMotionValue(50)
  const glareYPct = useMotionValue(50)
  const glareOpacity = useMotionValue(0)

  const glareBg = useTransform(
    [glareXPct, glareYPct],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.25) 0%, transparent 55%)`
  )

  const shadowX = useTransform(rotateY, [-12, 12], [-20, 20])
  const shadowY = useTransform(rotateX, [-12, 12], [20, -20])

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
    rawRotateX.set((y - 0.5) * -12)
    rawRotateY.set((x - 0.5) * 12)
    rawScale.set(1.04)
    glareXPct.set(x * 100)
    glareYPct.set(y * 100)
    glareOpacity.set(1)
  }, [isTouchDevice, rawRotateX, rawRotateY, rawScale, glareXPct, glareYPct, glareOpacity])

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) {
      rawScale.set(1.04)
      glareOpacity.set(1)
    }
  }, [isTouchDevice, rawScale, glareOpacity])

  const handleMouseLeave = useCallback(() => {
    rawRotateX.set(0)
    rawRotateY.set(0)
    rawScale.set(1)
    glareXPct.set(50)
    glareYPct.set(50)
    glareOpacity.set(0)
  }, [rawRotateX, rawRotateY, rawScale, glareXPct, glareYPct, glareOpacity])

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.closest('a, button')) return
    setIsFlipped((prev) => !prev)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsFlipped((prev) => !prev)
    }
  }, [])

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ perspective: 1400 }}
      aria-label={isFlipped ? 'Flip card back to front' : 'Flip card to reveal more details'}
      className={`relative cursor-pointer ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* Floating shadow */}
        <motion.div
          style={{
            x: shadowX,
            y: shadowY,
          }}
          className="absolute -inset-2 rounded-2xl bg-accent/8 blur-xl -z-10"
        />

        {/* Front face */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {children}
        </motion.div>

        {/* Back face */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            rotateY: isFlipped ? 0 : -180,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {backContent}
        </motion.div>

        {/* Glare overlay */}
        <motion.div
          style={{ opacity: glareOpacity, background: glareBg }}
          className="absolute inset-0 rounded-xl pointer-events-none z-20"
        />
      </motion.div>

      {/* Flip indicator */}
      <div className="absolute bottom-3 right-3 z-30 pointer-events-none">
        <span className="text-[10px] text-muted-foreground/50 font-mono">
          {isFlipped ? '← flip back' : 'click to flip →'}
        </span>
      </div>
    </div>
  )
}
