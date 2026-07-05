'use client'

import { motion } from 'framer-motion'
import TiltCard from '@/components/TiltCard'
import { fadeInUp, staggerContainer, staggerItemRight } from '@/lib/animations'

const projects = [
  {
    title: 'Vault — Secure Login System',
    description: 'A production-grade secure authentication system with React frontend and Node.js/Express backend. Features JWT rotation, MFA (TOTP), CSRF protection, rate limiting, account lockout, email verification, password reset, session management, and structured logging.',
    techStack: ['React', 'Node.js', 'Express', 'JWT', 'MFA/TOTP', 'CSRF'],
    liveDemo: 'https://secure-login-system-f4os.onrender.com/',
    github: 'https://github.com/IbnAbubakri/secure-login-system.git',
  },
  {
    title: 'Weather Forecast Application',
    description: 'Developed and deployed weather forecasting web application with live API integration. Built responsive user interfaces and optimized user experience.',
    techStack: ['Next.js', 'TypeScript', 'Weather API', 'Tailwind CSS'],
    liveDemo: 'https://weatherbyibnabubakri.onrender.com/',
    github: 'https://github.com/IbnAbubakri/WeatherForecast.git',
  },
  {
    title: 'Enterprise Networking Labs',
    description: 'Built enterprise-grade VLAN infrastructures with dynamic routing protocols, network security controls, redundancy, and failover systems.',
    techStack: ['Cisco Packet Tracer', 'GNS3', 'VLANs', 'OSPF', 'EIGRP', 'Network Security'],
  },
  {
    title: 'FlowDesk AI — WhatsApp Business OS',
    description: 'Built an AI-powered WhatsApp Business OS with a Next.js dashboard and FastAPI backend. Integrated Gemini AI for smart replies and a Node.js WhatsApp bridge for real-time messaging.',
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Gemini AI', 'Tailwind CSS', 'WhatsApp API'],
    liveDemo: 'https://flowdeskapp.onrender.com/',
    github: 'https://github.com/IbnAbubakri/Flowdesk.git',
    backend: 'https://github.com/IbnAbubakri/Flowdesk-backend.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-surface-950 relative section-cyan noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white tracking-tight">
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={staggerItemRight}
            >
              <TiltCard tiltDegree={5} glare={true} className="relative p-6 bg-surface-50 dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800 card-depth overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent" />
              <div className="pl-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg">
                    <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-surface-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-surface-500 hover:text-surface-900 dark:hover:text-surface-300 transition-colors"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-surface-500 hover:text-surface-900 dark:hover:text-surface-300 transition-colors"
                    >
                      Backend &rarr;
                    </a>
                  )}
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
