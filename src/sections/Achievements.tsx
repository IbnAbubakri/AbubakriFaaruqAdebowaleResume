// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import FlipCard from '@/components/FlipCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const achievements = [
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'CCNA Distinction',
    description: 'Achieved distinction in Cisco Certified Network Associate certification with exceptional performance.',
    backText: 'Scored in the top percentile on CCNA examination. Demonstrated mastery in routing protocols, switching concepts, network security, and automation.',
    color: 'var(--color-cyan-token)',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: 'CompTIA Network+ Distinction',
    description: 'Earned distinction in CompTIA Network+ certification, demonstrating superior networking knowledge.',
    backText: 'Vendor-neutral certification covering networking concepts, infrastructure, operations, security, and troubleshooting across all major platforms.',
    color: 'var(--accent)',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Instructor Role',
    description: 'Served as CompTIA Network+ Instructor at HIIT Plc, mentoring students to certification success.',
    backText: 'Mentored 50+ students with a high pass rate. Designed hands-on lab exercises and simplified complex networking topics through real-world analogies.',
    color: 'var(--primary)',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Enterprise IT Administration',
    description: 'Successfully managing enterprise IT infrastructure for 1791 LLC with 99.9% uptime.',
    backText: 'Managing Active Directory, firewall policies, VPN tunnels, backup systems, disaster recovery, and AWS cloud migration. Maintaining 99.9% uptime across all critical services.',
    color: 'var(--color-emerald-token)',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.5 14.5 0 00-3.24-3.24m3.24 3.24zM14.34 16.5h4.8a2.25 2.25 0 001.89-3.17l-3.24-5.63a2.25 2.25 0 00-3.78 0l-3.24 5.63a2.25 2.25 0 001.89 3.17h4.8z" />
      </svg>
    ),
    title: 'Software Deployments',
    description: 'Successfully deployed multiple vibecoded applications with cloud integration and CI/CD pipelines.',
    backText: 'Deployed 10+ production applications with automated CI/CD pipelines, containerized environments, and cloud-native architectures on Vercel, Render, and AWS.',
    color: 'var(--accent)',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Continuous Learning',
    description: 'Currently pursuing BSc in Cyber Security while maintaining professional certifications and skills.',
    backText: 'Actively pursuing BSc in Cyber Security at NOUN, maintaining CCNA/Network+ certs, and exploring AI integration, zero-trust architectures, and cloud-native security.',
    color: 'var(--color-cyan-token)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background relative section-amber">
      <ParallaxSection speed={0.02}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Achievements
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-mono">
                Click a card to flip
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, i) => (
              <ScrollReveal key={achievement.title} direction="scale" delay={0.12 + i * 0.07} blur>
                <FlipCard
                  accentColor={achievement.color}
                  backContent={
                    <div
                      className="relative p-5 rounded-xl border border-border card-depth h-full flex flex-col justify-center overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${achievement.color} 6%, var(--card)), var(--card))`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage: `linear-gradient(${achievement.color} 1px, transparent 1px), linear-gradient(90deg, ${achievement.color} 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div className="relative z-10">
                        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: achievement.color }}>
                          Details
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {achievement.backText}
                        </p>
                      </div>
                    </div>
                  }
                >
                  <div className="relative p-5 bg-card rounded-xl border border-border card-depth overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: achievement.color }} />
                    <div className="pl-1 pt-2">
                      <div className={`p-2 bg-accent/10 dark:bg-accent/20 rounded-lg w-fit mb-4 text-accent`}>
                        {achievement.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
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
