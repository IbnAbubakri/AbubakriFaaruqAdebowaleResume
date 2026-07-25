// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface FlipCardProps {
  children: React.ReactNode
  backContent: React.ReactNode
  className?: string
  accentColor?: string
}

const springConfig = { stiffness: 180, damping: 22 }

export default function FlipCard({
  children,
  backContent,
  className = '',
  accentColor = 'var(--accent)',
}: FlipCardProps) {
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
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
  )

  const shadowX = useTransform(rotateY, [-12, 12], [-16, 16])
  const shadowY = useTransform(rotateX, [-12, 12], [16, -16])

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
    rawRotateX.set((y - 0.5) * -10)
    rawRotateY.set((x - 0.5) * 10)
    rawScale.set(1.03)
    glareXPct.set(x * 100)
    glareYPct.set(y * 100)
    glareOpacity.set(1)
  }, [isTouchDevice, rawRotateX, rawRotateY, rawScale, glareXPct, glareYPct, glareOpacity])

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) {
      rawScale.set(1.03)
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

  const handleClick = useCallback(() => {
    setIsFlipped((prev) => !prev)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ perspective: 1400 }}
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
          style={{ x: shadowX, y: shadowY }}
          className="absolute -inset-2 rounded-2xl blur-xl -z-10"
          animate={{ opacity: isFlipped ? 0.03 : 0.06 }}
        >
          <div className="w-full h-full rounded-2xl" style={{ backgroundColor: accentColor }} />
        </motion.div>

        {/* Front face */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            rotateY: isFlipped ? 180 : 0,
            transition: 'rotateY 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="relative"
        >
          {children}
        </motion.div>

        {/* Back face */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            rotateY: isFlipped ? 0 : -180,
            transition: 'rotateY 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="absolute inset-0"
        >
          {backContent}
        </motion.div>

        {/* Glare */}
        <motion.div
          style={{ opacity: glareOpacity, background: glareBg }}
          className="absolute inset-0 rounded-xl pointer-events-none z-20"
        />
      </motion.div>

      {/* Flip hint */}
      <div className="absolute bottom-2 right-3 z-30 pointer-events-none">
        <span className="text-[9px] text-muted-foreground/40 font-mono select-none">
          {isFlipped ? '← back' : 'click →'}
        </span>
      </div>
    </div>
  )
}
