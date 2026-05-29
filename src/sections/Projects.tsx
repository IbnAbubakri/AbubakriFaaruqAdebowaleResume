'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const FileIcon = () => (
  <svg aria-hidden="true" className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
)

const projects = [
  {
    title: 'FinTech Application (BillXpress)',
    description: 'Designed and developed scalable fintech platform for digital payment services. Built frontend and backend infrastructures for secure financial transactions. Applied full-stack engineering, API development, and deployment strategies.',
    techStack: ['React', 'Node.js', 'API Development', 'Full-Stack', 'Deployment'],
    github: 'https://github.com/IbnAbubakri/billxpress-frontend.git',
  },
  {
    title: 'Weather Forecast Application',
    description: 'Developed and deployed weather forecasting web application with live API integration. Built responsive user interfaces and optimized user experience.',
    techStack: ['Next.js', 'TypeScript', 'Weather API', 'Tailwind CSS', 'Netlify'],
    liveDemo: 'https://weatherbyibnabubakri.netlify.app/',
    github: 'https://github.com/IbnAbubakri/WeatherForecast.git',
  },
  {
    title: 'Hospital Management System',
    description: 'Designed scalable hospital management platform frontend. Developed healthcare workflow interfaces for operational management.',
    techStack: ['React', 'Frontend Development', 'Healthcare UI', 'Render'],
    liveDemo: 'https://hospital-system-management.onrender.com/',
    github: 'https://github.com/IbnAbubakri/Hospital-System-Management.git',
  },
  {
    title: 'Enterprise Networking Labs',
    description: 'Built enterprise-grade VLAN infrastructures. Configured dynamic routing protocols. Applied network security controls. Implemented redundancy, failover, and troubleshooting systems. Developed practical Packet Tracer and GNS3 simulations.',
    techStack: ['Cisco Packet Tracer', 'GNS3', 'VLANs', 'OSPF', 'EIGRP', 'Network Security'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <FileIcon />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.liveDemo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center cursor-pointer"
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors text-center cursor-pointer"
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
