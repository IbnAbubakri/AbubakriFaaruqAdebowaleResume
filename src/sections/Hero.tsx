'use client'

import { motion } from 'framer-motion'
import { scaleIn, heroStagger, heroItem } from '@/lib/animations'

const titles = [
  'IT Administrator',
  'Network Engineer',
  'Cybersecurity Specialist',
  'Cloud Engineer',
  'Vibecoder',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-dots pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            variants={heroStagger}
            initial="initial"
            animate="animate"
            className="flex-1 text-center md:text-left"
          >
            <motion.p variants={heroItem} className="text-sm font-medium text-amber-500 uppercase tracking-[0.2em] mb-4 font-mono">
              IT Professional
            </motion.p>

            <motion.h1 variants={heroItem} className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-surface-900 dark:text-white leading-[1.1] tracking-tight">
              Abubakri{' '}
              <span className="text-amber-500">Faaruq</span>{' '}
              Adebowale
            </motion.h1>

            <motion.div variants={heroItem} className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
              {titles.map((title) => (
                <span
                  key={title}
                  className="px-3 py-1.5 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-md text-sm font-mono"
                >
                  {title}
                </span>
              ))}
            </motion.div>

            <motion.p variants={heroItem} className="mt-6 text-lg text-surface-600 dark:text-surface-400 max-w-2xl leading-relaxed">
              Dedicated IT professional with expertise in network engineering,
              cybersecurity, cloud computing, and software development. Passionate
              about building secure, scalable solutions for enterprise environments.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a
                href="/#contact"
                className="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                Hire Me
              </a>
              <a
                href="/abubakri-faaruq-adebowale-cv.pdf"
                download
                className="px-6 py-3 border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-300 rounded-lg font-medium hover:border-amber-500 hover:text-amber-500 dark:hover:border-amber-500 dark:hover:text-amber-500 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                Download CV
              </a>
              <a
                href="/#projects"
                className="px-6 py-3 text-surface-500 font-medium hover:text-surface-900 dark:hover:text-surface-300 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                View Projects &rarr;
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="flex-shrink-0"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-2xl border-2 border-amber-500/20 dark:border-amber-500/10 shadow-xl shadow-amber-500/5 overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Abubakri Faaruq Adebowale"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
