// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { scaleIn, heroStagger, heroItem } from '@/lib/animations'
import FloatingElement from '@/components/FloatingElement'
import ParallaxLayer from '@/components/ParallaxLayer'

const titles = [
  'IT Administrator',
  'Network Engineer',
  'Cybersecurity Specialist',
  'Cloud Engineer',
  'Vibecoder',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-dots" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.3} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 scan-lines" />
      </ParallaxLayer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            variants={heroStagger}
            initial="initial"
            animate="animate"
            className="flex-1 text-center md:text-left"
          >
            <motion.p variants={heroItem} className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4 font-mono">
              IT Professional
            </motion.p>

            <motion.h1 variants={heroItem} className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight">
              Abubakri{' '}
              <span className="text-accent">Faaruq</span>{' '}
              Adebowale
            </motion.h1>

            <motion.div variants={heroItem} className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
              {titles.map((title) => (
                <span
                  key={title}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-mono"
                >
                  {title}
                </span>
              ))}
            </motion.div>

            <motion.p variants={heroItem} className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Dedicated IT professional with expertise in network engineering,
              cybersecurity, cloud computing, and software development. Passionate
              about building secure, scalable solutions for enterprise environments.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a
                href="/#contact"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                Hire Me
              </a>
              <a
                href="/abubakri-faaruq-adebowale-cv.pdf"
                download
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-accent hover:text-accent active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                Download CV
              </a>
              <a
                href="/#projects"
                className="px-6 py-3 text-muted-foreground font-medium hover:text-foreground active:scale-95 transition-[colors,transform] duration-200 cursor-pointer"
              >
                View Projects &rarr;
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="flex-shrink-0"
          >
            <FloatingElement amplitude={10} duration={5} rotate={1.5}>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-2xl overflow-hidden group">
              <div className="absolute -inset-8 opacity-30 pointer-events-none">
                <div className="network-node top-1/4 left-0 w-2 h-2 bg-accent node-pulse" style={{ animationDelay: '0s' }} />
                <div className="network-node top-3/4 left-[10%] w-1.5 h-1.5 bg-primary node-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="network-node top-1/2 right-0 w-2 h-2 bg-cyan-500 node-pulse" style={{ animationDelay: '1s' }} />
                <div className="network-node top-1/5 right-[15%] w-1.5 h-1.5 bg-emerald-500 node-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="network-line top-1/4 left-0 right-[60%] h-px bg-gradient-to-r from-accent/40 to-transparent data-flow-bar" style={{ animationDelay: '0.2s' }} />
                <div className="network-line top-3/4 left-[10%] right-0 h-px bg-gradient-to-l from-primary/40 to-transparent data-flow-bar" style={{ animationDelay: '0.7s' }} />
                <div className="network-line top-1/2 left-[30%] right-0 h-px bg-gradient-to-l from-cyan-500/40 to-transparent data-flow-bar" style={{ animationDelay: '1.2s' }} />
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
