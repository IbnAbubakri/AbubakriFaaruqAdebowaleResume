import ViewCounter from './ViewCounter'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              AF<span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-500 max-w-xs">
              IT Professional, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Vibecoder.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="block text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/IbnAbubakri' },
                { label: 'Email', href: 'mailto:faruqsuzay@gmail.com' },
                { label: 'WhatsApp', href: 'https://wa.me/qr/BSDWHYAVN7HBD1' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-900 rounded-md hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {year} Abubakri Faaruq Adebowale. All rights reserved.
          </p>
          <ViewCounter />
        </div>
      </div>
    </footer>
  )
}
