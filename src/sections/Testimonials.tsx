// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import TiltCard from '@/components/TiltCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'

const testimonials = [
  {
    name: 'John Olawoye',
    role: 'Networking Student, HIIT PLC',
    content: 'Under Mr. Faruq Abubakri\'s guidance, I successfully configured 802.1Q trunking, VTP server/client mode, inter-VLAN routing on a Layer 3 switch with SVIs, and verified broadcast isolation. He is a true practitioner.',
    rating: 5,
  },
  {
    name: 'Rayyan A. Akindele',
    role: 'Intern, HIIT PLC',
    content: 'Great learning experience with hands-on projects and supportive guidance. Working under his guidance helped me build both technical skills and confidence.',
    rating: 5,
  },
  {
    name: 'Nelson Olokodana',
    role: 'Student, USA',
    content: 'Mr. Faaruq is a kind, patient, and hardworking teacher who teaches me very well and helps me understand my lessons easily. He makes learning enjoyable and inspires me to become a better student.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative section-cyan">
      <ParallaxSection speed={0.02}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" blur delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                What People Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal
                key={t.name}
                direction="up"
                delay={0.15 + i * 0.1}
                blur
              >
                <TiltCard tiltDegree={4} glare={false} className="relative p-6 bg-card rounded-xl border border-border card-depth">
                  <div className="pl-1">
                    <div className="relative">
                      <svg aria-hidden="true" className="w-8 h-8 text-accent/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <span className="absolute top-0 right-0 text-2xl text-accent/5 font-display font-bold leading-none select-none pointer-events-none">
                        &rdquo;
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-1 mb-4" role="img" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < t.rating ? 'text-accent' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent font-bold text-sm ring-2 ring-accent/20 shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
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
