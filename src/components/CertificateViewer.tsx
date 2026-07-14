// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CertificateViewerProps {
  title: string
  subtitle: string
  provider?: string
  downloadUrl: string
  isPdf?: boolean
  imgAlt?: string
  backLabel?: string
}

export default function CertificateViewer({
  title,
  subtitle,
  provider,
  downloadUrl,
  isPdf,
  imgAlt,
  backLabel = 'Back to Certifications',
}: CertificateViewerProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/#certifications"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono cursor-pointer"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {backLabel}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              {subtitle}
            </p>
            {provider && (
              <p className="text-sm text-amber-500 mt-2 font-mono">
                Training Provider: {provider}
              </p>
            )}
            <a
              href={downloadUrl}
              download
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium cursor-pointer"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Certificate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-muted rounded-xl overflow-hidden shadow-2xl border border-border"
          >
            {isPdf ? (
              <iframe
                src={downloadUrl}
                className="w-full h-screen"
                title={title}
              />
            ) : imgError ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground" role="alert">
                <svg aria-hidden="true" className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-semibold">Certificate image not found</p>
                <p className="text-sm mt-2">Please place the certificate file in the public folder</p>
              </div>
            ) : (
              <img
                src={downloadUrl}
                alt={imgAlt || title}
                className="w-full h-auto"
                onError={() => setImgError(true)}
              />
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
