// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import TiltCard from '@/components/TiltCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const experiences = [
  {
    title: 'IT Administrator',
    company: '1791 LLC',
    period: '2023 - Present',
    description: 'Managing enterprise IT infrastructure, network security, and system administration. Implementing security protocols and ensuring optimal system performance.',
    technologies: ['Network Security', 'System Administration', 'Cloud Infrastructure', 'AWS'],
  },
  {
    title: 'CompTIA Network+ & A+ Instructor',
    company: 'HIIT Plc',
    period: '2025 - Present',
    description: 'Delivering comprehensive training on CompTIA Network+ and A+ certifications. Covering network fundamentals, hardware, software, and security.',
    technologies: ['Teaching', 'Network+', 'A+', 'Curriculum Development'],
  },
  {
    title: 'Freelance Network Engineer',
    company: 'Samterk Computer',
    period: '2021 - 2022',
    description: 'Designed and implemented enterprise network solutions. Configured routers, switches, and security appliances for various clients.',
    technologies: ['Network Design', 'Cisco', 'Routing & Switching'],
  },
  {
    title: 'ICT & Mathematics Tutor',
    company: 'Freelance',
    period: '2020 - 2021',
    description: 'Provided tutoring in ICT and Mathematics, helping students understand complex technical and mathematical concepts.',
    technologies: ['Education', 'ICT', 'Mathematics'],
  },
  {
    title: 'Software Development Trainee',
    company: 'Various Projects',
    period: '2019 - 2020',
    description: 'Gained hands-on experience in vibecoding, working on real-world projects and building scalable web applications.',
    technologies: ['React', 'Node.js', 'Python', 'Database Design'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative section-amber">
      <ParallaxSection speed={0.02}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Work Experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1 + i * 0.08} blur>
                <div className="relative pl-8 border-l-2 border-border">
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-accent signal-dot" />
                  <TiltCard tiltDegree={5} glare={false} className="p-5 bg-card rounded-xl border border-border card-depth">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-accent font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 font-mono">
                      {exp.period}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
