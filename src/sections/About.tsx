// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import FlipCard from '@/components/FlipCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

export default function About() {
  const highlights = [
    { title: 'Professional Focus', desc: 'Enterprise IT, Network Security, Cloud Architecture' },
    { title: 'Core Strengths', desc: 'Problem Solving, System Design, Technical Leadership' },
    { title: 'Current Focus', desc: 'BSc Cyber Security — Pen Testing, Forensics, SOC' },
  ]

  const stats = [
    { label: 'Experience', value: 5, suffix: '+ Years' },
    { label: 'Projects', value: 50, suffix: '+' },
    { label: 'Certifications', value: 4, suffix: '+' },
    { label: 'Clients', value: 30, suffix: '+' },
  ]

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden section-amber">
      <ParallaxSection speed={0.03}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal direction="left" blur delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 tracking-tight">
                  IT Professional &amp; Software Developer
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am an IT Administrator, Network Engineer, Cybersecurity Specialist,
                    Cloud Engineer, and Software Developer with 5+ years of hands-on
                    experience in IT infrastructure, enterprise networking, cybersecurity,
                    cloud computing, systems administration, and full-stack software
                    development.
                  </p>
                  <p>
                    I administer Windows and Linux environments, Active Directory,
                    firewalls, VPNs, backup and disaster recovery systems, and AWS cloud
                    services. My networking background is built on Cisco routing and
                    switching, TCP/IP, IPv4/IPv6, VLANs, 802.1Q trunking, inter-VLAN
                    routing, OSPF, EIGRP, IP addressing, subnetting, and network
                    troubleshooting.
                  </p>
                  <p>
                    As a CompTIA Network+ and A+ Instructor at HIIT Plc, I teach in
                    both physical classroom and live online formats, training and
                    mentoring 200+ students in networking, IT infrastructure, and
                    professional certification preparation through hands-on laboratory
                    environments. I currently pursue a BSc in Cyber Security at the
                    National Open University of Nigeria, with academic focus on penetration
                    testing, digital forensics, SOC operations, risk management, ISO 27001,
                    and the NIST cybersecurity framework.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
                {stats.map((stat, i) => (
                  <ScrollReveal key={stat.label} direction="up" delay={0.3 + i * 0.08}>
                    <FlipCard
                      accentColor="var(--accent)"
                      backContent={
                        <div className="p-4 glass-card rounded-xl h-full flex items-center justify-center">
                          <p className="text-xs text-muted-foreground text-center font-mono">
                            {stat.label === 'Experience' && 'Over 5 years of hands-on IT infrastructure, security, and cloud management.'}
                            {stat.label === 'Projects' && '50+ projects spanning networking labs, web apps, fintech, and enterprise systems.'}
                            {stat.label === 'Certifications' && 'CCNA, CompTIA Network+, CompTIA A+, AWS Cloud, and DevOps.'}
                            {stat.label === 'Clients' && 'Served 30+ clients across enterprise, education, and freelance engagements.'}
                          </p>
                        </div>
                      }
                    >
                      <div className="p-4 glass-card rounded-xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    </FlipCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <ScrollReveal direction="right" delay={0.15}>
                <FlipCard
                  accentColor="var(--primary)"
                  backContent={
                    <div className="relative p-6 glass-card rounded-2xl border border-border h-full flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Core Values</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Security-first mindset in every solution
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Continuous learning and adaptation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Clean, scalable, production-grade code
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Bridging infrastructure and development
                        </li>
                      </ul>
                    </div>
                  }
                >
                    <div className="relative p-6 glass-card rounded-2xl border border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-4">My Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To leverage technology in solving complex business challenges
                      while maintaining the highest standards of security and efficiency.
                    </p>
                  </div>
                </FlipCard>
              </ScrollReveal>

              {highlights.map((item, i) => (
                <ScrollReveal key={item.title} direction="right" delay={0.25 + i * 0.1}>
                  <FlipCard
                    accentColor="var(--color-cyan-token)"
                    backContent={
                      <div className="relative p-4 glass-card rounded-xl border border-border h-full flex items-center">
                        <p className="text-xs text-muted-foreground font-mono">
                          {item.title === 'Professional Focus' && 'Deep expertise in enterprise networking (CCNA), cloud architecture (AWS), and security operations across production environments.'}
                          {item.title === 'Core Strengths' && 'Proven ability to architect complex systems, lead technical teams, and solve ambiguous problems under pressure.'}
                          {item.title === 'Current Focus' && 'Pursuing a BSc in Cyber Security at NOUN, focused on penetration testing, digital forensics, SOC operations, risk management, ISO 27001, and the NIST framework.'}
                        </p>
                      </div>
                    }
                  >
                    <div className="relative p-4 glass-card rounded-xl border border-border">
                      <div className="pl-1">
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
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
