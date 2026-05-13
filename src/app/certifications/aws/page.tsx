'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AWSCertificate() {
  const [imgError, setImgError] = useState(false)

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AWS Cloud Computing Certificate
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Amazon Web Services - Cloud Architecture, Deployment, and Management
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
              Training Provider: ThinkCloudly
            </p>
            <a
              href="/aws-certificate.jpg"
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
            {imgError ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400" role="alert">
                <svg aria-hidden="true" className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-semibold">Certificate image not found</p>
                <p className="text-sm mt-2">Please place "aws-certificate.jpg" in the public folder</p>
              </div>
            ) : (
              <img
                src="/aws-certificate.jpg"
                alt="AWS Cloud Computing Certificate"
                className="w-full h-auto"
                onError={() => setImgError(true)}
              />
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
