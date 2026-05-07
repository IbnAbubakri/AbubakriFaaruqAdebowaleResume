'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const testimonials = [
  {
    name: 'John Olawoye',
    role: 'Networking Student, HIIT PLC',
    institution: 'Osun State University',
    content: 'Under Mr. Faruq Abubakri\'s guidance, I successfully configured 802.1Q trunking, VTP server/client mode, inter-VLAN routing on a Layer 3 switch with SVIs, and verified broadcast isolation and extended ping tests. He systematically debugs using debug trunk events and monitor session. He is a true practitioner.',
    rating: 5,
  },
  {
    name: 'Rayyan A. Akindele',
    role: 'Intern, HIIT PLC',
    content: 'Great learning experience with hands-on projects and some supportive guidance through you. Working under his guidance helped me build both technical skills and confidence. I\'m grateful for the opportunity.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Testimonials & Recommendations</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from students, colleagues, and clients about their experience working with me.
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="min-w-[350px] md:min-w-[450px] max-w-[450px] bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative"
              >
                <div className="text-6xl text-blue-100 dark:text-blue-900 absolute top-4 left-4">"</div>
                <div className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
