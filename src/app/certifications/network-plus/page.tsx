// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'CompTIA Network+ Certificate | Abubakri Faaruq Adebowale',
  description: 'CompTIA Network+ certification covering networking concepts, infrastructure, and troubleshooting.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.vercel.app/certifications/network-plus' },
  openGraph: {
    title: 'CompTIA Network+ Certificate | Abubakri Faaruq Adebowale',
    description: 'CompTIA Network+ certification covering networking concepts, infrastructure, and troubleshooting.',
    images: [{ url: 'https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg', width: 1200, height: 1200 }],
  },
}

export default function NetworkPlusCertificate() {
  return (
    <>
      <CertificateViewer
        title="CompTIA Network+ Certificate"
        subtitle="CompTIA Network+ - Networking Concepts and Infrastructure"
        provider="HIIT Plc"
        downloadUrl="/comptia-network-plus-certificate.pdf"
        isPdf
        intro="I earned the CompTIA Network+ certification with distinction at HIIT Plc. As a vendor-neutral credential, it validates a broad, platform-agnostic understanding of networking concepts, infrastructure, operations, security, and troubleshooting — skills that apply across every major technology stack."
        highlights={[
          'Network architectures and models',
          'Network operations and hardening',
          'Wireless and cloud technologies',
          'Diagnostics and troubleshooting',
          'Network security fundamentals',
        ]}
        sections={[
          {
            heading: 'A Foundation Beyond Any Single Vendor',
            body: 'Unlike vendor-specific credentials, Network+ proves an understanding of networking that is not tied to one platform. I studied network topologies, the OSI model, IP addressing, routing and switching, wireless standards, and both wired and fiber infrastructure — giving me the grounding to work confidently with Cisco, cloud providers, and enterprise systems alike.',
          },
          {
            heading: 'Teaching It Changed How I Use It',
            body: 'I teach combined CompTIA Network+ and A+ courses at HIIT Plc, mentoring over 200 students toward certification success. Teaching forced me to master the material at a deeper level and to translate abstract concepts into hands-on labs students can actually grasp — a skill I now apply directly in my own network engineering work.',
          },
          {
            heading: 'Operational Readiness',
            body: 'Network+ emphasizes real-world operations: monitoring, documentation, incident response, and troubleshooting methodology. These operational habits carry directly into my role managing enterprise infrastructure, where maintaining uptime and quickly resolving issues are the daily reality.',
          },
        ]}
      />
    </>
  )
}
