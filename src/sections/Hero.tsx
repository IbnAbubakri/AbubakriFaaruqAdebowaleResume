// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingElement from '@/components/FloatingElement'
import ParallaxLayer from '@/components/ParallaxLayer'
import ScrollReveal from '@/components/ScrollReveal'

const titles = [
  'IT Administrator',
  'Network Engineer',
  'Cybersecurity Specialist',
  'Cloud Engineer',
  'Vibecoder',
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Scroll-linked background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-dots" />
      </motion.div>
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 scan-lines" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text side — scroll-linked parallax */}
          <motion.div
            style={{ y: textY, opacity, scale }}
            className="flex-1 text-center md:text-left"
          >
            <ScrollReveal direction="down" delay={0.1} blur>
              <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4 font-mono">
                IT Professional
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} blur>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Abubakri{' '}
                <span className="text-accent">Faaruq</span>{' '}
                Adebowale
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35} blur>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                {titles.map((title, i) => (
                  <motion.span
                    key={title}
                    initial={{ opacity: 0, scale: 0.8, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-mono"
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.45} blur>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Dedicated IT professional with expertise in network engineering,
                cybersecurity, cloud computing, and software development. Passionate
                about building secure, scalable solutions for enterprise environments.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.55} blur>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
                >
                  Hire Me
                </Link>
                <a
                  href="/abubakri-faaruq-adebowale-cv.pdf"
                  download
                  className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-accent hover:text-accent active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
                >
                  Download CV
                </a>
                <Link
                  href="/video-resume"
                  className="px-6 py-3 text-muted-foreground font-medium hover:text-foreground active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
                >
                  Watch Video &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Image — scroll-linked parallax + scale */}
          <motion.div
            style={{ y: imageY, opacity, scale }}
            className="flex-shrink-0"
          >
            <ScrollReveal direction="scale" delay={0.3} blur>
              <FloatingElement amplitude={10} duration={5} rotate={1.5}>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-2xl overflow-hidden group">
                  <div className="absolute -inset-8 opacity-30 pointer-events-none">
                    <div className="network-node top-1/4 left-0 w-2 h-2 bg-accent node-pulse" style={{ animationDelay: '0s' }} />
                    <div className="network-node top-3/4 left-[10%] w-1.5 h-1.5 bg-primary node-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="network-node top-1/2 right-0 w-2 h-2 node-pulse" style={{ animationDelay: '1s', backgroundColor: 'var(--color-cyan-token)' }} />
                    <div className="network-node top-1/5 right-[15%] w-1.5 h-1.5 node-pulse" style={{ animationDelay: '1.5s', backgroundColor: 'var(--color-emerald-token)' }} />
                    <div className="network-line top-1/4 left-0 right-[60%] h-px bg-gradient-to-r from-accent/40 to-transparent data-flow-bar" style={{ animationDelay: '0.2s' }} />
                    <div className="network-line top-3/4 left-[10%] right-0 h-px bg-gradient-to-l from-primary/40 to-transparent data-flow-bar" style={{ animationDelay: '0.7s' }} />
                    <div className="network-line top-1/2 left-[30%] right-0 h-px bg-gradient-to-l to-transparent data-flow-bar" style={{ animationDelay: '1.2s', backgroundImage: 'linear-gradient(to left, color-mix(in srgb, var(--color-cyan-token) 40%, transparent), transparent)' }} />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/20 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] blur-2xl -z-10 signal-pulse" />
                  <div className="w-full h-full scan-lines-heavy rounded-2xl">
                    <Image
                      src="/profile.jpeg"
                      alt="Abubakri Faaruq Adebowale"
                      width={416}
                      height={416}
                      priority
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent/5 to-transparent z-10 pointer-events-none" />
                </div>
              </FloatingElement>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
