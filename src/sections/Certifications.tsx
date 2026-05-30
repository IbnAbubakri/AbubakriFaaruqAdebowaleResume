'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

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
    trainingProvider: 'ThinkCloudly',
    date: '2025',
    description: 'Cloud architecture, deployment, and management certification.',
    distinction: false,
    certLink: '/certifications/aws',
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

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              className="p-5 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:scale-[1.02] transition-[colors,transform] duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {cert.distinction && (
                  <span className="px-2 py-0.5 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-xs font-medium">
                    Distinction
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                {cert.title}
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                {cert.issuer} &bull; {cert.date}
              </p>
              {cert.trainingProvider && (
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                  Trained at: {cert.trainingProvider}
                </p>
              )}
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                {cert.description}
              </p>
              {cert.certLink && (
                <a
                  href={cert.certLink}
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  View Certificate &rarr;
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
