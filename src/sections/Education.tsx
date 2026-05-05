'use client'

import { motion } from 'framer-motion'

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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
