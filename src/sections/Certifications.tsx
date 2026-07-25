// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import FlipCard from '@/components/FlipCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const certifications = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    trainingProvider: 'HIIT Plc',
    date: '2024',
    description: 'Comprehensive networking certification covering routing, switching, security, and automation.',
    distinction: true,
    certLink: '/certifications/ccna',
    color: 'var(--color-cyan-token)',
    backText: 'Covers network fundamentals, IP connectivity, security fundamentals, automation, and programmability. Practical labs in Cisco Packet Tracer and real equipment.',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    trainingProvider: 'HIIT Plc',
    date: '2024',
    description: 'Vendor-neutral networking certification covering network technologies, installation, and configuration.',
    distinction: true,
    certLink: '/certifications/network-plus',
    color: 'var(--accent)',
    backText: 'Vendor-neutral certification covering networking concepts, infrastructure, operations, security, and troubleshooting. Applicable across all major platforms.',
  },
  {
    title: 'AWS Cloud Computing',
    issuer: 'Amazon Web Services',
    trainingProvider: 'ThinkCloudly',
    date: '2025',
    description: 'Cloud architecture, deployment, and management certification.',
    distinction: false,
    certLink: '/certifications/aws',
    color: 'var(--primary)',
    backText: 'Covers AWS cloud architecture, EC2, S3, Lambda, VPC, IAM, and deployment best practices for scalable, secure cloud-native applications.',
  },
  {
    title: 'DevOps Certification',
    issuer: 'Udemy',
    date: '2025',
    description: 'Comprehensive DevOps training covering CI/CD pipelines, Docker, Kubernetes, and cloud deployment strategies.',
    distinction: false,
    certLink: '/certifications/devops',
    color: 'var(--color-emerald-token)',
    backText: 'Covers CI/CD pipeline design, Docker containerization, Kubernetes orchestration, infrastructure as code, monitoring, and cloud deployment strategies.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background relative noise-overlay">
      <div className="absolute inset-0 scan-lines-heavy pointer-events-none" />
      <ParallaxSection speed={0.02}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Certifications
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-mono">
                Click a card to flip
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.15 + i * 0.08} blur>
                <FlipCard
                  accentColor={cert.color}
                  backContent={
                    <div
                      className="relative p-5 rounded-xl border border-border h-full flex flex-col justify-between overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${cert.color} 6%, var(--card)), var(--card))`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage: `linear-gradient(${cert.color} 1px, transparent 1px), linear-gradient(90deg, ${cert.color} 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div className="relative z-10">
                        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: cert.color }}>
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                          {cert.backText}
                        </p>
                        <a
                          href={`/#certifications`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                          style={{ color: cert.color }}
                        >
                          View Certificate
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  }
                >
                  <div className="relative p-5 bg-card rounded-xl border border-border overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: cert.color }} />
                    <div className="pl-1 pt-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${cert.color} 10%, transparent)` }}>
                          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: cert.color }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        {cert.distinction && (
                          <span className="px-2 py-0.5 bg-accent/10 dark:bg-accent/20 text-accent rounded text-xs font-mono">
                            Distinction
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm line-clamp-2">{cert.title}</h3>
                      <p className="text-xs mb-1" style={{ color: cert.color }}>{cert.issuer} &bull; {cert.date}</p>
                      {cert.trainingProvider && (
                        <p className="text-xs text-muted-foreground mb-2">Trained at: {cert.trainingProvider}</p>
                      )}
                      <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
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
