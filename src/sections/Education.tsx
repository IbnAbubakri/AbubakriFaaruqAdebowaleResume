// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import FlipCard from '@/components/FlipCard'
import FlipHint from '@/components/FlipHint'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const education = [
  {
    degree: 'BSc Cyber Security',
    institution: 'National Open University of Nigeria',
    period: '2026 - Present',
    description: 'Comprehensive cybersecurity program covering network security, cryptography, ethical hacking, and risk management.',
    backText: 'Studying advanced topics: penetration testing, digital forensics, security operations center (SOC) workflows, compliance frameworks (ISO 27001, NIST), and incident response.',
    color: 'var(--color-cyan-token)',
  },
  {
    degree: 'Network Administration',
    institution: 'Penco CyberSchool',
    period: '2021',
    description: 'Intensive training in network administration, covering routing, switching, and network security protocols.',
    backText: 'Hands-on labs with Cisco routers and switches, VLAN configuration, ACL implementation, NAT/PAT, and network troubleshooting using industry-standard tools.',
    color: 'var(--color-emerald-token)',
  },
  {
    degree: 'IT Training School',
    institution: 'HIIT Plc',
    period: '2024',
    description: 'Comprehensive IT training program covering CompTIA Network+, CCNA, and advanced networking concepts.',
    backText: 'Earned CompTIA Network+ with distinction. Completed CCNA curriculum with hands-on labs in OSPF, EIGRP, STP, VLANs, and wireless networking.',
    color: 'var(--accent)',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden section-cyan">
      <ParallaxSection speed={0.03}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                Education
              </h2>
              <FlipHint />
            </div>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-px w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-cyan-500/30 pointer-events-none" />

            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, i) => (
                <ScrollReveal key={edu.degree} direction="up" delay={0.15 + i * 0.12} blur>
                  <FlipCard
                    accentColor={edu.color}
                    backContent={
                      <div
                        className="relative p-6 rounded-xl border border-border h-full flex flex-col justify-center overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, ${edu.color} 6%, var(--card)), var(--card))`,
                        }}
                      >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                          style={{
                            backgroundImage: `linear-gradient(${edu.color} 1px, transparent 1px), linear-gradient(90deg, ${edu.color} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                          }}
                        />
                        <div className="relative z-10">
                          <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: edu.color }}>
                            Highlights
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {edu.backText}
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="relative p-6 bg-card rounded-xl border border-border overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: edu.color }} />
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full z-10 signal-dot hidden md:block" style={{ backgroundColor: `color-mix(in srgb, ${edu.color} 20%, transparent)`, borderColor: `color-mix(in srgb, ${edu.color} 40%, transparent)`, borderWidth: 2 }} />
                      <div className="p-2 rounded-lg w-fit mb-4 mt-2" style={{ backgroundColor: `color-mix(in srgb, ${edu.color} 10%, transparent)` }}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: edu.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-sm mb-1" style={{ color: edu.color }}>{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mb-3 font-mono">{edu.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  </FlipCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
