'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Placeholder for future employer, client, and student reviews. Recommendations will be added as they become available.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                "Recommendation placeholder - will be updated with actual testimonials from employers, clients, and students."
              </div>
              <p className="font-semibold text-gray-900 dark:text-white">Name</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Title, Company</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
