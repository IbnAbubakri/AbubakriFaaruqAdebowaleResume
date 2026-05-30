'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const testimonials = [
  {
    name: 'John Olawoye',
    role: 'Networking Student, HIIT PLC',
    content: 'Under Mr. Faruq Abubakri\'s guidance, I successfully configured 802.1Q trunking, VTP server/client mode, inter-VLAN routing on a Layer 3 switch with SVIs, and verified broadcast isolation. He is a true practitioner.',
    rating: 5,
  },
  {
    name: 'Rayyan A. Akindele',
    role: 'Intern, HIIT PLC',
    content: 'Great learning experience with hands-on projects and supportive guidance. Working under his guidance helped me build both technical skills and confidence.',
    rating: 5,
  },
  {
    name: 'Nelson Olokodana',
    role: 'Student, USA',
    content: 'Mr. Faaruq is a kind, patient, and hardworking teacher who teaches me very well and helps me understand my lessons easily. He makes learning enjoyable and inspires me to become a better student.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What People Say
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:scale-[1.02] transition-[colors,transform] duration-200 cursor-pointer"
            >
              <svg aria-hidden="true" className="w-8 h-8 text-blue-200 dark:text-blue-900 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
