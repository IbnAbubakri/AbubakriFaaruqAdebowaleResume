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
    <section id="testimonials" className="py-24 bg-white dark:bg-surface-950 relative section-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white tracking-tight">
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
              className="relative p-6 bg-surface-50 dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800 card-depth overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-accent" />
              <div className="pl-4">
                <div className="relative">
                  <svg aria-hidden="true" className="w-8 h-8 text-accent/20 dark:text-accent/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span className="absolute top-0 right-0 text-2xl text-accent/5 font-display font-bold leading-none select-none pointer-events-none">
                    &rdquo;
                  </span>
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-6 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold text-sm ring-2 ring-accent/20 shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-surface-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-surface-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
