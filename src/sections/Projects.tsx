// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import TiltCard from '@/components/TiltCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const projects = [
  {
    title: 'BillXpress — Fintech Dashboard',
    description: 'A full-stack fintech platform for bill payments, airtime/data purchases, wallet management, and transaction tracking. Features secure auth with JWT rotation, MFA, CSRF protection, account lockout, and real-time balance updates.',
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'JWT', 'MFA/TOTP', 'Vercel'],
    liveDemo: 'https://billxpress1.vercel.app/',
    github: 'https://github.com/IbnAbubakri/billxpress',
  },
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
    <section id="projects" className="py-24 bg-background relative section-cyan noise-overlay">
      <ParallaxSection speed={0.03}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Projects
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal
                key={project.title}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={0.12 + i * 0.08}
                blur
              >
                <TiltCard tiltDegree={5} glare={true} className="relative p-6 bg-card rounded-xl border border-border card-depth">
                  <div className="pl-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg">
                        <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-mono"
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
                          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                        >
                          Live Demo &rarr;
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          GitHub &rarr;
                        </a>
                      )}
                      {project.backend && (
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Backend &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
