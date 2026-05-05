import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Laptop body */}
                  <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
                  {/* Laptop screen */}
                  <rect x="4" y="5" width="16" height="8" rx="1" strokeWidth="2" fill="currentColor" className="text-blue-100 dark:text-blue-900"/>
                  {/* Screen text AFA */}
                  <text x="12" y="11" textAnchor="middle" fontSize="4" fontWeight="bold" fill="currentColor" className="text-blue-600 dark:text-blue-400">AFA</text>
                  {/* Laptop base */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8"/>
                </svg>
                <span className="text-2xl font-bold text-blue-400">Abubakri Faaruq</span>
              </div>
            <p className="text-gray-400">
              IT Professional, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Vibecoder.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {[
                  { label: 'GitHub', href: 'https://github.com/IbnAbubakri' },
                  { label: 'Email', href: 'mailto:faruqsuzay@gmail.com' },
                  { label: 'WhatsApp', href: 'https://wa.me/qr/BSDWHYAVN7HBD1' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    href={social.href}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abubakri Faaruq Adebowale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
