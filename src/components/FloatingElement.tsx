// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { motion } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode
  amplitude?: number
  duration?: number
  rotate?: number
  className?: string
}

export default function FloatingElement({ children, amplitude = 12, duration = 4, rotate = 1.5, className }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, -rotate, 0, rotate, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
