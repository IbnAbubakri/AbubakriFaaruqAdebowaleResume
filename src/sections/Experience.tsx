// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import FlipCard from '@/components/FlipCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const experiences = [
  {
    title: 'IT Administrator',
    company: '1791 LLC',
    period: '2023 - Present',
    description: 'Managing enterprise IT infrastructure, network security, and system administration. Implementing security protocols and ensuring optimal system performance.',
    technologies: ['Network Security', 'System Administration', 'Cloud Infrastructure', 'AWS'],
    backText: 'Responsible for managing full IT stack: Active Directory, firewall policies, VPN tunnels, backup systems, disaster recovery, and AWS cloud migration for a growing enterprise.',
    color: 'var(--accent)',
  },
  {
    title: 'CompTIA Network+ & A+ Instructor',
    company: 'HIIT Plc',
    period: '2025 - Present',
    description: 'Delivering comprehensive training on CompTIA Network+ and A+ certifications. Covering network fundamentals, hardware, software, and security.',
    technologies: ['Teaching', 'Network+', 'A+', 'Curriculum Development'],
    backText: 'Designed hands-on lab curricula, mentored 50+ students to certification success, and developed real-world network troubleshooting exercises using Cisco Packet Tracer.',
    color: 'var(--primary)',
  },
  {
    title: 'Freelance Network Engineer',
    company: 'Samterk Computer',
    period: '2021 - 2022',
    description: 'Designed and implemented enterprise network solutions. Configured routers, switches, and security appliances for various clients.',
    technologies: ['Network Design', 'Cisco', 'Routing & Switching'],
    backText: 'Deployed VLAN architectures, configured OSPF/EIGRP routing, implemented ACLs, and performed site-to-site VPN setups for small-to-medium businesses.',
    color: 'var(--color-cyan-token)',
  },
  {
    title: 'ICT & Mathematics Tutor',
    company: 'Freelance',
    period: '2020 - 2021',
    description: 'Provided tutoring in ICT and Mathematics, helping students understand complex technical and mathematical concepts.',
    technologies: ['Education', 'ICT', 'Mathematics'],
    backText: 'Developed personalized learning plans, simplified abstract concepts through visual aids, and helped students achieve above-average results in national exams.',
    color: 'var(--color-emerald-token)',
  },
  {
    title: 'Software Development Trainee',
    company: 'Various Projects',
    period: '2019 - 2020',
    description: 'Gained hands-on experience in vibecoding, working on real-world projects and building scalable web applications.',
    technologies: ['React', 'Node.js', 'Python', 'Database Design'],
    backText: 'Built full-stack web applications, learned agile methodologies, and contributed to open-source projects while mastering modern JavaScript frameworks.',
    color: 'var(--accent)',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden section-amber">
      <ParallaxSection speed={0.02}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Work Experience
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-mono">
                Click a card to flip
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1 + i * 0.08} blur>
                <div className="relative pl-8 border-l-2 border-border">
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-accent signal-dot" />
                  <FlipCard
                    accentColor={exp.color}
                    backContent={
                      <div
                        className="relative p-5 rounded-xl border border-border overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, ${exp.color} 6%, var(--card)), var(--card))`,
                        }}
                      >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                          style={{
                            backgroundImage: `linear-gradient(${exp.color} 1px, transparent 1px), linear-gradient(90deg, ${exp.color} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                          }}
                        />
                        <div className="relative z-10">
                          <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: exp.color }}>
                            Details
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                            {exp.backText}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-xs font-mono border"
                                style={{
                                  borderColor: `color-mix(in srgb, ${exp.color} 25%, transparent)`,
                                  backgroundColor: `color-mix(in srgb, ${exp.color} 6%, transparent)`,
                                  color: exp.color,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="p-5 bg-card rounded-xl border border-border overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: exp.color }} />
                      <div className="pl-1 pt-1">
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <span className="text-sm font-medium" style={{ color: exp.color }}>{exp.company}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 font-mono">{exp.period}</p>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FlipCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
