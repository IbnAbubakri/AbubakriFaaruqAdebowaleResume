// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'CCNA Certificate | Abubakri Faaruq Adebowale',
  description: 'Cisco Certified Network Associate certificate with Distinction from HIIT Plc.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.vercel.app/certifications/ccna' },
  openGraph: {
    title: 'CCNA Certificate | Abubakri Faaruq Adebowale',
    description: 'Cisco Certified Network Associate certificate with Distinction from HIIT Plc.',
    images: [{ url: 'https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg', width: 1200, height: 1200 }],
  },
}

export default function CCNACertificate() {
  return (
    <>
      <CertificateViewer
        title="CCNA Certificate"
        subtitle="Cisco Certified Network Associate - Distinction"
        provider="HIIT Plc"
        downloadUrl="/abubakri-ccna.pdf"
        isPdf
      />
    </>
  )
}
