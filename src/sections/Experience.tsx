'use client'

import { motion } from 'framer-motion'
import TiltCard from '@/components/TiltCard'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const experiences = [
  {
    title: 'IT Administrator',
    company: '1791 LLC',
    period: '2023 - Present',
    description: 'Managing enterprise IT infrastructure, network security, and system administration. Implementing security protocols and ensuring optimal system performance.',
    technologies: ['Network Security', 'System Administration', 'Cloud Infrastructure', 'AWS'],
  },
  {
    title: 'CompTIA Network+ & A+ Instructor',
    company: 'HIIT Plc',
    period: '2025 - Present',
    description: 'Delivering comprehensive training on CompTIA Network+ and A+ certifications. Covering network fundamentals, hardware, software, and security.',
    technologies: ['Teaching', 'Network+', 'A+', 'Curriculum Development'],
  },
  {
    title: 'Freelance Network Engineer',
    company: 'Samterk Computer',
    period: '2021 - 2022',
    description: 'Designed and implemented enterprise network solutions. Configured routers, switches, and security appliances for various clients.',
    technologies: ['Network Design', 'Cisco', 'Routing & Switching'],
  },
  {
    title: 'ICT & Mathematics Tutor',
    company: 'Freelance',
    period: '2020 - 2021',
    description: 'Provided tutoring in ICT and Mathematics, helping students understand complex technical and mathematical concepts.',
    technologies: ['Education', 'ICT', 'Mathematics'],
  },
  {
    title: 'Software Development Trainee',
    company: 'Various Projects',
    period: '2019 - 2020',
    description: 'Gained hands-on experience in vibecoding, working on real-world projects and building scalable web applications.',
    technologies: ['React', 'Node.js', 'Python', 'Database Design'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-surface-950 relative section-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={staggerItem}
              className="relative pl-8 border-l-2 border-surface-200 dark:border-surface-700"
            >
              <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-accent signal-dot" />
              <TiltCard tiltDegree={5} glare={false} className="p-5 bg-white dark:bg-surface-950 rounded-xl border border-surface-200 dark:border-surface-800 card-depth">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-semibold text-surface-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-accent font-medium">
                    {exp.company}
                  </span>
                </div>
                <p className="text-xs text-surface-500 mb-3 font-mono">
                  {exp.period}
                </p>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
