// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur'

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  blur?: boolean
  once?: boolean
  className?: string
  amount?: number
}

const directionMap: Record<Direction, { x: number; y: number; scale: number }> = {
  up:    { x: 0,   y: 60,  scale: 1 },
  down:  { x: 0,   y: -60, scale: 1 },
  left:  { x: -60, y: 0,   scale: 1 },
  right: { x: 60,  y: 0,   scale: 1 },
  scale: { x: 0,   y: 0,   scale: 0.85 },
  blur:  { x: 0,   y: 30,  scale: 1 },
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance,
  blur = false,
  once = true,
  className = '',
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })

  const dir = directionMap[direction]
  const dist = distance ?? (direction === 'scale' ? 0 : 60)

  const x = dir.x === 0 ? 0 : (dir.x > 0 ? dist : -dist)
  const y = dir.y === 0 ? 0 : (dir.y > 0 ? dist : -dist)
  const s = dir.scale === 1 ? 1 : dir.scale

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: s,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
      rotateX: direction === 'up' || direction === 'down' ? -8 : 0,
      rotateY: direction === 'left' || direction === 'right' ? -8 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={{
        perspective: (direction === 'left' || direction === 'right' || direction === 'up' || direction === 'down')
          ? '1000px'
          : undefined,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}
