// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <span className="text-lg font-bold text-foreground font-display">
                AF<span className="text-accent">.</span>
              </span>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                IT Professional, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Vibecoder.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Certifications', 'Experience', 'Education', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    href={`/#${link.toLowerCase()}`}
                    className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
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
                    className="px-3 py-1.5 text-sm text-muted-foreground bg-muted rounded-md hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Abubakri Faaruq Adebowale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
