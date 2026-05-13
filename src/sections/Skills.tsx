'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const NetworkIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c0 4.97-1.343 9-3 9m0-18c1.657 0 3 4.03 3 9s-1.343 9-3 9M3 12c0 4.97 1.343 9 3 9s3-4.03 3-9-1.343-9-3-9-3 4.03-3 9z" />
  </svg>
)

const SecurityIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const CloudIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.002 4.002 0 003 15z" />
  </svg>
)

const LinuxIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
)

const DevOpsIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
  </svg>
)

const FrontendIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21h9M12 17.25V21m0 0H5.25A2.25 2.25 0 013 18.75V4.5A2.25 2.25 0 015.25 2.25h13.5A2.25 2.25 0 0121 4.5v14.25A2.25 2.25 0 0118.75 21H12z" />
  </svg>
)

const BackendIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
)

const ToolsIcon = () => (
  <svg aria-hidden="true" className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17l-5.25 5.25a2.25 2.25 0 01-3.18-3.18l5.25-5.25m3.18 3.18l5.25-5.25a2.25 2.25 0 013.18 3.18l-5.25 5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 6.5a3 3 0 11-5.714 1.286 2.25 2.25 0 104.928 0 3 3 0 013.75-3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.803 17.5a3 3 0 11-3.75-3.75 3 3 0 013.75 3.75z" />
  </svg>
)

const skillCategories = [
  {
    title: 'Networking',
    icon: NetworkIcon,
    skills: ['CCNA', 'Network+', 'Routing & Switching', 'VLANs', 'OSPF', 'EIGRP', 'Network Security'],
  },
  {
    title: 'Cybersecurity',
    icon: SecurityIcon,
    skills: ['Network Security', 'Firewall Config', 'Penetration Testing', 'Security Protocols', 'Risk Assessment'],
  },
  {
    title: 'Cloud Computing',
    icon: CloudIcon,
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda', 'Cloud Security'],
  },
  {
    title: 'Linux Administration',
    icon: LinuxIcon,
    skills: ['Ubuntu', 'CentOS', 'Shell Scripting', 'System Administration', 'Server Management'],
  },
  {
    title: 'DevOps',
    icon: DevOpsIcon,
    skills: ['CI/CD', 'Docker', 'Git/GitHub', 'Automation', 'Infrastructure as Code'],
  },
  {
    title: 'Frontend Development',
    icon: FrontendIcon,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    icon: BackendIcon,
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Database Design', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: ToolsIcon,
    skills: ['Cisco Packet Tracer', 'GNS3', 'Wireshark', 'Git/GitHub', 'AWS Console', 'Render', 'Netlify', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4"><category.icon /></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
