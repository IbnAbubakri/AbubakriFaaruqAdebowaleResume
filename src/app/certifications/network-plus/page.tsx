'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function NetworkPlusCertificate() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              CompTIA Network+ Certificate
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              View the full certificate below
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
              Training Provider: HIIT Plc
            </p>
            <a
              href="/comptia-network-plus-certificate.pdf"
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Certificate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="/comptia-network-plus-certificate.pdf"
              className="w-full h-screen"
              title="CompTIA Network+ Certificate"
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
