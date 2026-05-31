'use client'

import { motion } from 'framer-motion'

const titles = [
  'IT Administrator',
  'Network Engineer',
  'Cybersecurity Specialist',
  'Cloud Engineer',
  'Vibecoder',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              IT Professional
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Abubakri{' '}
              <span className="text-blue-600 dark:text-blue-400">Faaruq</span>{' '}
              Adebowale
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
              {titles.map((title) => (
                <span
                  key={title}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {title}
                </span>
              ))}
            </div>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Dedicated IT professional with expertise in network engineering,
              cybersecurity, cloud computing, and software development. Passionate
              about building secure, scalable solutions for enterprise environments.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a
                href="/#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                Hire Me
              </a>
              <a
                href="/abubakri-faaruq-adebowale-cv.pdf"
                download
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                Download CV
              </a>
              <a
                href="/#projects"
                className="px-6 py-3 text-gray-500 dark:text-gray-500 font-medium hover:text-gray-900 dark:hover:text-gray-300 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                View Projects &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
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
