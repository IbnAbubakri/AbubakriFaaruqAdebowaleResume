// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { motion } from 'framer-motion'
import TiltCard from '@/components/TiltCard'
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
    <section id="education" className="py-24 bg-background relative section-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            Education
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-px w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-cyan-500/30 pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={staggerItem}
              >
                <TiltCard tiltDegree={6} glare={false} className="relative p-6 bg-card rounded-xl border border-border card-depth">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full z-10 signal-dot hidden md:block" style={{ backgroundColor: 'color-mix(in srgb, var(--color-cyan-token) 20%, transparent)', borderColor: 'color-mix(in srgb, var(--color-cyan-token) 40%, transparent)', borderWidth: 2 }} />
                <div className="p-2 rounded-lg w-fit mb-4" style={{ backgroundColor: 'color-mix(in srgb, var(--color-cyan-token) 10%, transparent)' }}>
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-cyan-token)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-accent mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-muted-foreground mb-3 font-mono">
                  {edu.period}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </TiltCard>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
