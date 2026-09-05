// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import Link from 'next/link'
import FlipHint from '@/components/FlipHint'
import ProjectCard3D from '@/components/ProjectCard3D'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const projects = [
  {
    title: 'Illuminate Engineering — Corporate Power Solutions',
    description: 'Corporate website for a Nigerian power engineering company. Features an interactive generator sizing calculator (59+ appliances, surge-aware kVA sizing with 25% headroom), multi-step booking wizards for generator rental and maintenance, a Leaflet map picker with state/LGA reverse geocoding, Web3Forms + WhatsApp fallback lead capture, and a full blogging platform. Delivered with per-route SEO, JSON-LD structured data, programmatic OG images, and an accessibility-first, animation-rich UI.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Leaflet', 'Web3Forms', 'Vitest', 'Vercel'],
    liveDemo: 'https://www.illuminateengineeringlimited.com',
    github: 'https://github.com/IbnAbubakri/illuminate-engineering',
    color: 'var(--accent)',
  },
  {
    title: 'Bolton Engineering — Power Solutions & Generator Website',
    description: 'Client website for a Nigerian electromechanical power solutions company — developed in collaboration with a fellow developer. I contributed the interactive multi-step generator sizing estimator, the searchable/filterable product catalog (19 generator products) with pagination, and the WhatsApp-integrated quote form with Zod validation. Includes project case studies, a partner program, and full SEO plus legal pages, built around lead generation for the Nigerian SME market.',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'shadcn/ui', 'Tailwind CSS v4', 'react-hook-form', 'Zod', 'Radix UI'],
    liveDemo: 'https://bolton-duplicate.vercel.app/',
    github: 'https://github.com/Teea-dev/boltonengineering',
    color: 'var(--color-cyan-token)',
  },
  {
    title: 'BillXpress — Fintech Dashboard',
    description: 'A full-stack fintech platform for bill payments, airtime/data purchases, wallet management, and transaction tracking. Features secure auth with JWT rotation, MFA, CSRF protection, account lockout, and real-time balance updates.',
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'JWT', 'MFA/TOTP', 'Vercel'],
    liveDemo: 'https://billxpress1.vercel.app/',
    github: 'https://github.com/IbnAbubakri/billxpress',
    color: 'var(--accent)',
  },
  {
    title: 'Vault — Secure Login System',
    description: 'A production-grade secure authentication system with React frontend and Node.js/Express backend. Features JWT rotation, MFA (TOTP), CSRF protection, rate limiting, account lockout, email verification, password reset, session management, and structured logging.',
    techStack: ['React', 'Node.js', 'Express', 'JWT', 'MFA/TOTP', 'CSRF'],
    liveDemo: 'https://secure-login-system-f4os.onrender.com/',
    github: 'https://github.com/IbnAbubakri/secure-login-system.git',
    color: 'var(--primary)',
  },
  {
    title: 'Weather Forecast Application',
    description: 'Developed and deployed weather forecasting web application with live API integration. Built responsive user interfaces and optimized user experience.',
    techStack: ['Next.js', 'TypeScript', 'Weather API', 'Tailwind CSS'],
    liveDemo: 'https://weatherbyibnabubakri.onrender.com/',
    github: 'https://github.com/IbnAbubakri/WeatherForecast.git',
    color: 'var(--color-cyan-token)',
  },
  {
    title: 'Enterprise Networking Labs',
    description: 'Built enterprise-grade VLAN infrastructures with dynamic routing protocols, network security controls, redundancy, and failover systems.',
    techStack: ['Cisco Packet Tracer', 'GNS3', 'VLANs', 'OSPF', 'EIGRP', 'Network Security'],
    color: 'var(--color-emerald-token)',
  },
  {
    title: 'QuizApp — Exam Practice Platform',
    description: 'A full-stack exam practice platform with server-side grading via Supabase RPC, student/admin dashboards, persistent draft recovery, and ARIA-compliant UI. Features timed quizzes, result tracking, and a built-in scientific calculator.',
    techStack: ['React', 'Supabase', 'PostgreSQL', 'Vite', 'Vitest', 'Tailwind CSS'],
    liveDemo: 'https://nelsonquizapp.vercel.app/',
    github: 'https://github.com/IbnAbubakri/QuizApp',
    color: 'var(--color-cyan-token)',
  },
  {
    title: 'Scientific & Base-N Calculator',
    description: 'A scientific calculator supporting standard, scientific, and binary (Base-N) modes with 40+ operations including trig, log, permutations/combinations, and hex/oct/bin conversions. Keyboard-driven input with compact responsive layout.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vitest'],
    liveDemo: 'https://calculator234.vercel.app/',
    github: 'https://github.com/IbnAbubakri/calculator',
    color: 'var(--primary)',
  },
  {
    title: 'FlowDesk AI — WhatsApp Business OS',
    description: 'Built an AI-powered WhatsApp Business OS with a Next.js dashboard and FastAPI backend. Integrated Gemini AI for smart replies and a Node.js WhatsApp bridge for real-time messaging.',
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Gemini AI', 'Tailwind CSS', 'WhatsApp API'],
    liveDemo: 'https://flowdeskapp.onrender.com/',
    github: 'https://github.com/IbnAbubakri/Flowdesk.git',
    backend: 'https://github.com/IbnAbubakri/Flowdesk-backend.git',
    color: 'var(--accent)',
  },
]

function ProjectFront({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <div className="relative p-6 bg-card rounded-xl border border-border overflow-hidden">
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ backgroundColor: project.color }}
      />

      <div className="pl-1 pt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg">
            <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectBack({ project }: { project: typeof projects[number] }) {
  return (
    <div
      className="relative p-6 rounded-xl border border-border overflow-hidden h-full flex flex-col justify-between"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${project.color} 8%, var(--card)), var(--card))`,
      }}
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10">
        <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: project.color }}>
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-mono border"
              style={{
                borderColor: `color-mix(in srgb, ${project.color} 30%, transparent)`,
                backgroundColor: `color-mix(in srgb, ${project.color} 8%, transparent)`,
                color: project.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: project.color }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Website URL
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source Code
            </a>
          )}
          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Backend Repo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden section-cyan noise-overlay">
      <ParallaxSection speed={0.03}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Projects
              </h2>
              <FlipHint>Click a card to flip &amp; see links</FlipHint>
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
                <ProjectCard3D
                  backContent={<ProjectBack project={project} />}
                  className="h-full"
                >
                  <ProjectFront project={project} index={i} />
                </ProjectCard3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
