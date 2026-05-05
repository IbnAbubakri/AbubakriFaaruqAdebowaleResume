'use client'

import { motion } from 'framer-motion'

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
    description: 'Delivering comprehensive training on CompTIA Network+ and A+ certifications. Covering network fundamentals, hardware, software, and security. Achieved distinction in student performance.',
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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{exp.period}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full mt-6"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
