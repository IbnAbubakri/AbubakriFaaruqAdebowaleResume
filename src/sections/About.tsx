'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import TiltCard from '@/components/TiltCard'
import { fadeInLeft, fadeInRight, scaleInLight, staggerContainer, staggerItem } from '@/lib/animations'

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
    <section id="about" className="py-24 bg-surface-50 dark:bg-surface-950 relative noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white mb-6 tracking-tight">
              IT Professional &amp; Vibecoder
            </h2>
            <div className="space-y-4 text-surface-600 dark:text-surface-400 leading-relaxed">
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

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                >
                  <TiltCard tiltDegree={5} glare={false} className="p-4 bg-surface-100 dark:bg-surface-900 rounded-xl card-depth-sm">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <div className="text-sm text-surface-500 mt-1">
                      {stat.label}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              variants={scaleInLight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative p-6 bg-surface-100 dark:bg-surface-900 rounded-2xl overflow-hidden card-depth-sm"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
              <h4 className="text-lg font-semibold text-surface-900 dark:text-white mb-4 pl-4">
                My Mission
              </h4>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed pl-4">
                To leverage technology in solving complex business challenges
                while maintaining the highest standards of security and
                efficiency.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                >
                  <TiltCard tiltDegree={4} glare={false} className="relative p-4 bg-surface-100 dark:bg-surface-900 rounded-xl overflow-hidden card-depth-sm">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />
                    <div className="pl-4">
                      <h4 className="font-medium text-surface-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-surface-500">
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
