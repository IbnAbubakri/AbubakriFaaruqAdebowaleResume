'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, pulse } from '@/lib/animations'

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
  const prefersReducedMotion = useReducedMotion()

  const pulseVariant = prefersReducedMotion
    ? { initial: { scale: 1, opacity: 1 }, animate: {} }
    : pulse

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
            >
              <motion.div
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-blue-600 dark:bg-blue-400"
              />
              <div className="p-5 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:scale-[1.02] transition-[colors,transform] duration-200">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  {exp.period}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
