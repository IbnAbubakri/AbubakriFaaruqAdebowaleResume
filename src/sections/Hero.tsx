'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

const titles = ['IT Administrator', 'Network Engineer', 'Cybersecurity Specialist', 'Cloud Engineer', 'Vibecoder'];

interface ScatterPosition {
  x: number;
  y: number;
  rotate: number;
}

export default function Hero() {
  const scatterPositions: ScatterPosition[] = [
    { x: -200, y: -150, rotate: -30 },
    { x: 250, y: -200, rotate: 20 },
    { x: -200, y: 250, rotate: -40 },
    { x: 300, y: 150, rotate: 30 },
    { x: -250, y: -100, rotate: 40 },
    { x: 200, y: 200, rotate: -20 },
    { x: -150, y: 300, rotate: 30 },
    { x: 350, y: -250, rotate: -30 },
    { x: 180, y: 180, rotate: 15 },
    { x: -300, y: -200, rotate: 50 },
  ];

  const scatterAnimation = (index: number) => ({
    initial: {
      opacity: 0,
      x: scatterPositions[index]?.x ?? 0,
      y: scatterPositions[index]?.y ?? 0,
      rotate: scatterPositions[index]?.rotate ?? 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    },
    transition: {
      duration: 1.2,
      delay: 0.1 * index,
      ease: "easeOut" as const,
    }
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
              <motion.h1
                {...scatterAnimation(0)}
                className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 break-words"
              >
              Abubakri{' '}
              <span className="text-blue-600 dark:text-blue-400">Faaruq</span>{' '}
              Adebowale
            </motion.h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              {titles.map((title, index) => (
                <motion.span
                  key={title}
                  {...scatterAnimation(index + 1)}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {title}
                </motion.span>
              ))}
            </div>

            <motion.p
              {...scatterAnimation(6)}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-10"
            >
              Dedicated IT professional with expertise in network engineering, cybersecurity, cloud computing, and vibecoding. Passionate about building secure, scalable solutions for enterprise environments.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.button
                {...scatterAnimation(7)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </motion.button>
              <motion.a
                {...scatterAnimation(8)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Abubakri_Faaruq_Adebowale_CV.pdf"
                download
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Download CV
              </motion.a>
              <motion.button
                {...scatterAnimation(9)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View Projects
              </motion.button>
            </div>
          </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex-shrink-0 w-full max-w-[600px] mx-auto md:mx-0"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 overflow-hidden mx-auto">
              <img
                src="/professional-photo.jpg"
                alt="Abubakri Faaruq Adebowale"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <svg class="w-24 h-24 text-blue-400 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    `;
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
