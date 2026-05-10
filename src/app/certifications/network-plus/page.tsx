import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CompTIA Network+ Certificate | Abubakri Faaruq Adebowale",
  description: "CompTIA Network+ certification - vendor-neutral networking certification covering network technologies, installation, and configuration.",
}

export default function NetworkPlusCertificate() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section className="py-20 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              CompTIA Network+ Certificate
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              View the full certificate below
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
              Training Provider: HIIT Plc
            </p>
            <a
              href="/comptia-network-plus-certificate.pdf"
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Certificate
            </a>
          </div>

          <div className="animate-slide-up-delayed bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="/comptia-network-plus-certificate.pdf"
              className="w-full h-screen"
              title="CompTIA Network+ Certificate"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
