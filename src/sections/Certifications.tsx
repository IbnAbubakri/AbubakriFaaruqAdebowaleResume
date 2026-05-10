'use client'

import { motion } from 'framer-motion'

const TrophyIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const certifications = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    trainingProvider: 'HIIT Plc',
    date: '2024',
    description: 'Comprehensive networking certification covering routing, switching, security, and automation.',
    distinction: true,
    certLink: '/certifications/ccna',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    trainingProvider: 'HIIT Plc',
    date: '2024',
    description: 'Vendor-neutral networking certification covering network technologies, installation, and configuration.',
    distinction: true,
    certLink: '/certifications/network-plus',
  },
  {
    title: 'AWS Cloud Computing',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Cloud architecture, deployment, and management certification.',
    distinction: false,
  },
  {
    title: 'DevOps Certification',
    issuer: 'Udemy',
    date: '2025',
    description: 'Comprehensive DevOps training covering CI/CD pipelines, Docker, Kubernetes, and cloud deployment strategies.',
    distinction: false,
    certLink: '/certifications/devops',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {cert.distinction && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                  Distinction
                </div>
              )}
              <div className="mb-4"><TrophyIcon /></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
               <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{cert.issuer} • {cert.date}</p>
               {cert.trainingProvider && (
                 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Trained at: {cert.trainingProvider}</p>
               )}
               <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
              {cert.certLink && (
                <a
                  href={cert.certLink}
                  className="mt-4 text-sm text-blue-600 dark:text-blue-400 inline-block hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
