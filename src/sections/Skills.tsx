// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import FlipCard from '@/components/FlipCard'
import FlipHint from '@/components/FlipHint'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const accentMap = [
  'var(--accent)',
  'var(--primary)',
  'var(--color-cyan-token)',
  'var(--color-emerald-token)',
  'var(--accent)',
  'var(--primary)',
  'var(--color-cyan-token)',
  'var(--muted-foreground)',
]

const skillCategories = [
  {
    title: 'Networking',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c0 4.97-1.343 9-3 9m0-18c1.657 0 3 4.03 3 9s-1.343 9-3 9M3 12c0 4.97 1.343 9 3 9s3-4.03 3-9-1.343-9-3-9-3 4.03-3 9z" />
      </svg>
    ),
    skills: ['CCNA', 'Network+', 'Routing & Switching', 'VLANs', 'OSPF', 'EIGRP', 'Network Security'],
    backText: 'Hands-on experience with Cisco enterprise routing, Layer 2/3 switching, VLAN segmentation, OSPF/EIGRP dynamic routing, and network security hardening across production environments.',
  },
  {
    title: 'Cybersecurity',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    skills: ['Network Security', 'Firewall Config', 'Penetration Testing', 'Security Protocols', 'Risk Assessment'],
    backText: 'Proficient in firewall configuration, penetration testing methodologies, risk assessment frameworks, and implementing zero-trust security protocols for enterprise networks.',
  },
  {
    title: 'Cloud Computing',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.002 4.002 0 003 15z" />
      </svg>
    ),
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda', 'Cloud Security'],
    backText: 'AWS certified cloud architect. Experience designing multi-AZ deployments, serverless architectures with Lambda, S3 storage strategies, and cloud-native security implementations.',
  },
  {
    title: 'Linux Administration',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['Ubuntu', 'CentOS', 'Shell Scripting', 'System Administration', 'Server Management'],
    backText: 'Proficient in Ubuntu/CentOS server management, bash scripting for automation, systemd services, cron jobs, and hardening Linux servers for production workloads.',
  },
  {
    title: 'DevOps',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    skills: ['CI/CD', 'Docker', 'Git/GitHub', 'Automation', 'Infrastructure as Code'],
    backText: 'Building CI/CD pipelines with GitHub Actions, containerized deployments with Docker, infrastructure as code, and automated testing workflows for rapid delivery.',
  },
  {
    title: 'Frontend',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21h9M12 17.25V21m0 0H5.25A2.25 2.25 0 013 18.75V4.5A2.25 2.25 0 015.25 2.25h13.5A2.25 2.25 0 0121 4.5v14.25A2.25 2.25 0 0118.75 21H12z" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    backText: 'Building modern, performant UIs with React/Next.js, type-safe TypeScript, utility-first Tailwind CSS, and responsive design patterns across all breakpoints.',
  },
  {
    title: 'Backend',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Database Design', 'PostgreSQL', 'MongoDB'],
    backText: 'RESTful API design with Node.js/Express, Python scripting, PostgreSQL/MongoDB database architecture, JWT auth, rate limiting, and structured logging.',
  },
  {
    title: 'Tools & Platforms',
    icon: (
      <svg aria-hidden="true" className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17l-5.25 5.25a2.25 2.25 0 01-3.18-3.18l5.25-5.25m3.18 3.18l5.25-5.25a2.25 2.25 0 013.18 3.18l-5.25 5.25" />
      </svg>
    ),
    skills: ['Cisco Packet Tracer', 'GNS3', 'Wireshark', 'Git', 'AWS Console', 'Render', 'Netlify'],
    backText: 'Network simulation with Packet Tracer/GNS3, packet analysis with Wireshark, version control with Git, and deployment via AWS, Render, and Netlify.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden section-amber">
      <ParallaxSection speed={0.02}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Skills &amp; Expertise
              </h2>
              <FlipHint />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category, i) => (
              <ScrollReveal key={category.title} direction="scale" delay={0.1 + i * 0.06} blur>
                <FlipCard
                  accentColor={accentMap[i]}
                  backContent={
                    <div
                      className="relative p-5 rounded-xl border border-border overflow-hidden h-full flex flex-col justify-between"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${accentMap[i]} 6%, var(--card)), var(--card))`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage: `linear-gradient(${accentMap[i]} 1px, transparent 1px), linear-gradient(90deg, ${accentMap[i]} 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div className="relative z-10">
                        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: accentMap[i] }}>
                          {category.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {category.backText}
                        </p>
                      </div>
                    </div>
                  }
                >
                  <div className="relative p-5 bg-card rounded-xl border border-border overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: accentMap[i] }} />
                    <div className="p-2 bg-muted rounded-lg w-fit mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-foreground mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FlipCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
