'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const projects = [
  {
    title: 'FinTech Application (BillXpress)',
    description: 'Designed and developed scalable fintech platform for digital payment services. Built frontend and backend infrastructures for secure financial transactions.',
    techStack: ['React', 'Node.js', 'API Development', 'Full-Stack'],
    github: 'https://github.com/IbnAbubakri/billxpress-frontend.git',
  },
  {
    title: 'Weather Forecast Application',
    description: 'Developed and deployed weather forecasting web application with live API integration. Built responsive user interfaces and optimized user experience.',
    techStack: ['Next.js', 'TypeScript', 'Weather API', 'Tailwind CSS'],
    liveDemo: 'https://weatherbyibnabubakri.netlify.app/',
    github: 'https://github.com/IbnAbubakri/WeatherForecast.git',
  },
  {
    title: 'Hospital Management System',
    description: 'Designed scalable hospital management platform frontend. Developed healthcare workflow interfaces for operational management.',
    techStack: ['React', 'Frontend Development', 'Healthcare UI'],
    liveDemo: 'https://hospital-system-management.onrender.com/',
    github: 'https://github.com/IbnAbubakri/Hospital-System-Management.git',
  },
  {
    title: 'Enterprise Networking Labs',
    description: 'Built enterprise-grade VLAN infrastructures with dynamic routing protocols, network security controls, redundancy, and failover systems.',
    techStack: ['Cisco Packet Tracer', 'GNS3', 'VLANs', 'OSPF', 'EIGRP', 'Network Security'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:scale-[1.02] transition-[colors,transform] duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    Live Demo &rarr;
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    GitHub &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
