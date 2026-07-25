// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { motion } from 'framer-motion'
import TiltCard from '@/components/TiltCard'
import { fadeInUp, staggerContainer, staggerItemLeft } from '@/lib/animations'

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
    <section id="certifications" className="py-24 bg-background relative noise-overlay">
      <div className="absolute inset-0 scan-lines-heavy pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
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
              variants={staggerItemLeft}
            >
              <TiltCard tiltDegree={7} glare={true} className="relative p-5 bg-card rounded-xl border border-border card-depth">
              <div className="pl-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg">
                    <svg aria-hidden="true" className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {cert.distinction && (
                    <span className="px-2 py-0.5 bg-accent/10 dark:bg-accent/20 text-accent rounded text-xs font-mono">
                      Distinction
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {cert.title}
                </h3>
                <p className="text-xs text-accent mb-1">
                  {cert.issuer} &bull; {cert.date}
                </p>
                {cert.trainingProvider && (
                  <p className="text-xs text-muted-foreground mb-2">
                    Trained at: {cert.trainingProvider}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {cert.description}
                </p>
                {cert.certLink && (
                  <a
                    href={cert.certLink}
                    className="text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    View Certificate &rarr;
                  </a>
                )}
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
