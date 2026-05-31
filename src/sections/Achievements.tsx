'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItemScale } from '@/lib/animations'

const achievementIconColors = [
  'text-accent', 'text-accent', 'text-primary', 'text-cyan-500', 'text-accent', 'text-primary',
]

const achievements = [
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'CCNA Distinction',
    description: 'Achieved distinction in Cisco Certified Network Associate certification with exceptional performance.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: 'CompTIA Network+ Distinction',
    description: 'Earned distinction in CompTIA Network+ certification, demonstrating superior networking knowledge.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Instructor Role',
    description: 'Served as CompTIA Network+ Instructor at HIIT Plc, mentoring students to certification success.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Enterprise IT Administration',
    description: 'Successfully managing enterprise IT infrastructure for 1791 LLC with 99.9% uptime.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.5 14.5 0 00-3.24-3.24m3.24 3.24zM14.34 16.5h4.8a2.25 2.25 0 001.89-3.17l-3.24-5.63a2.25 2.25 0 00-3.78 0l-3.24 5.63a2.25 2.25 0 001.89 3.17h4.8z" />
      </svg>
    ),
    title: 'Software Deployments',
    description: 'Successfully deployed multiple vibecoded applications with cloud integration and CI/CD pipelines.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Continuous Learning',
    description: 'Currently pursuing BSc in Cyber Security while maintaining professional certifications and skills.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface-50 dark:bg-surface-900 relative section-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
            Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white tracking-tight">
            Achievements
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              variants={staggerItemScale}
              className="relative p-5 bg-white dark:bg-surface-950 rounded-xl border border-surface-200 dark:border-surface-800 card-depth overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-xl" />
              <div className={`p-2 bg-accent/10 dark:bg-accent/20 rounded-lg w-fit mb-4 ${achievementIconColors[i]}`}>
                {achievement.icon}
              </div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
