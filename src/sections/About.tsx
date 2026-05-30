'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

export default function About() {
  const highlights = [
    {
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Professional Focus',
      desc: 'Enterprise IT, Network Security, Cloud Architecture',
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674m-2.337-8.54A5.001 5.001 0 0112 4.5c1.747 0 3.332.764 4.5 2.036m-2.163 9.464A5.001 5.001 0 0112 19.5a5.001 5.001 0 01-3.337-1.464M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      title: 'Core Strengths',
      desc: 'Problem Solving, System Design, Technical Leadership',
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.5 14.5 0 00-3.24-3.24m3.24 3.24zM14.34 16.5h4.8a2.25 2.25 0 001.89-3.17l-3.24-5.63a2.25 2.25 0 00-3.78 0l-3.24 5.63a2.25 2.25 0 001.89 3.17h4.8z" />
        </svg>
      ),
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
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              IT Professional &amp; Vibecoder
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                My Mission
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To leverage technology in solving complex business challenges
                while maintaining the highest standards of security and
                efficiency.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
                >
                  <div className="mt-0.5 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
