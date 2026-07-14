// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'CompTIA Network+ Certificate | Abubakri Faaruq Adebowale',
  description: 'CompTIA Network+ certification covering networking concepts, infrastructure, and troubleshooting.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.onrender.com/certifications/network-plus' },
}

export default function NetworkPlusCertificate() {
  return (
    <>
      <CertificateViewer
        title="CompTIA Network+ Certificate"
        subtitle="CompTIA Network+ - Networking Concepts and Infrastructure"
        downloadUrl="/comptia-network-plus-certificate.pdf"
        isPdf
      />
    </>
  )
}
