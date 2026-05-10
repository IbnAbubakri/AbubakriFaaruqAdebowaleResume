'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'

const TargetIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const LightbulbIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674m-2.337-8.54A5.001 5.001 0 0112 4.5c1.747 0 3.332.764 4.5 2.036m-2.163 9.464A5.001 5.001 0 0112 19.5a5.001 5.001 0 01-3.337-1.464M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
)

const RocketIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.5 14.5 0 00-3.24-3.24m3.24 3.24zM14.34 16.5h4.8a2.25 2.25 0 001.89-3.17l-3.24-5.63a2.25 2.25 0 00-3.78 0l-3.24 5.63a2.25 2.25 0 001.89 3.17h4.8z" />
  </svg>
)

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              IT Professional & Vibecoder
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a dedicated IT professional with a strong foundation in network engineering, cybersecurity, cloud computing, and software development. My journey in technology began with a passion for understanding how systems communicate and has evolved into expertise across multiple domains.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As an IT Administrator at 1791 LLC, I manage enterprise infrastructure, ensuring optimal performance and security. My experience as a CompTIA Network+ Instructor at HIIT Plc has honed my ability to communicate complex technical concepts effectively.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I combine my networking and security expertise with vibecoding skills to build comprehensive, secure, and scalable solutions. Whether it's designing enterprise networks, implementing security protocols, or developing web applications, I bring a holistic approach to technology.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Experience', value: 5, suffix: '+ Years' },
                { label: 'Projects', value: 50, suffix: '+' },
                { label: 'Certifications', value: 4, suffix: '+' },
                { label: 'Clients', value: 30, suffix: '+' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg text-center"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To leverage technology in solving complex business challenges while maintaining the highest standards of security and efficiency.
            </p>
            <div className="space-y-4">
              {[
                { icon: TargetIcon, title: 'Professional Focus', desc: 'Enterprise IT, Network Security, Cloud Architecture' },
                { icon: LightbulbIcon, title: 'Core Strengths', desc: 'Problem Solving, System Design, Technical Leadership' },
                { icon: RocketIcon, title: 'Current Focus', desc: 'Cloud Security, DevOps, Scalable Web Applications' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <item.icon />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
