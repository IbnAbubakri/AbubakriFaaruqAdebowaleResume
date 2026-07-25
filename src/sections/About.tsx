// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import TiltCard from '@/components/TiltCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

export default function About() {
  const highlights = [
    {
      title: 'Professional Focus',
      desc: 'Enterprise IT, Network Security, Cloud Architecture',
    },
    {
      title: 'Core Strengths',
      desc: 'Problem Solving, System Design, Technical Leadership',
    },
    {
      title: 'Current Focus',
      desc: 'Cloud Security, DevOps, Scalable Web Applications',
    },
  ]

  const stats = [
    { label: 'Experience', value: 5, suffix: '+ Years' },
    { label: 'Projects', value: 50, suffix: '+' },
    { label: 'Certifications', value: 4, suffix: '+' },
    { label: 'Clients', value: 30, suffix: '+' },
  ]

  return (
    <section id="about" className="py-24 bg-background relative">
      <ParallaxSection speed={0.03}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal direction="left" blur delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 tracking-tight">
                  IT Professional &amp; Vibecoder
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a dedicated IT professional with a strong foundation in
                    network engineering, cybersecurity, cloud computing, and software
                    development. My journey in technology began with a passion for
                    understanding how systems communicate and has evolved into
                    expertise across multiple domains.
                  </p>
                  <p>
                    As an IT Administrator at 1791 LLC, I manage enterprise
                    infrastructure, ensuring optimal performance and security. My
                    experience as a CompTIA Network+ Instructor at HIIT Plc has honed
                    my ability to communicate complex technical concepts effectively.
                  </p>
                  <p>
                    I combine my networking and security expertise with vibecoding
                    skills to build comprehensive, secure, and scalable solutions.
                    Whether it&apos;s designing enterprise networks, implementing
                    security protocols, or developing web applications, I bring a
                    holistic approach to technology.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
                {stats.map((stat, i) => (
                  <ScrollReveal key={stat.label} direction="up" delay={0.3 + i * 0.08} blur>
                    <TiltCard tiltDegree={5} glare={false} className="p-4 bg-card rounded-xl card-depth-sm">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <div className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <ScrollReveal direction="right" delay={0.15} blur>
                <div className="relative p-6 bg-card rounded-2xl border border-border card-depth-sm">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    My Mission
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To leverage technology in solving complex business challenges
                    while maintaining the highest standards of security and
                    efficiency.
                  </p>
                </div>
              </ScrollReveal>

              {highlights.map((item, i) => (
                <ScrollReveal key={item.title} direction="right" delay={0.25 + i * 0.1} blur>
                  <TiltCard tiltDegree={4} glare={false} className="relative p-4 bg-card rounded-xl border border-border card-depth-sm">
                    <div className="pl-1">
                      <h4 className="font-medium text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
