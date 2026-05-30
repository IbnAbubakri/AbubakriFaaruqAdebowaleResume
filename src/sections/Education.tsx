'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const education = [
  {
    degree: 'BSc Cyber Security',
    institution: 'National Open University of Nigeria',
    period: '2026 - Present',
    description: 'Comprehensive cybersecurity program covering network security, cryptography, ethical hacking, and risk management.',
  },
  {
    degree: 'Network Administration',
    institution: 'Penco CyberSchool',
    period: '2021',
    description: 'Intensive training in network administration, covering routing, switching, and network security protocols.',
  },
  {
    degree: 'IT Training School',
    institution: 'HIIT Plc',
    period: '2024',
    description: 'Comprehensive IT training program covering CompTIA Network+, CCNA, and advanced networking concepts.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Academic
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={staggerItem}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
                <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                {edu.institution}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                {edu.period}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
