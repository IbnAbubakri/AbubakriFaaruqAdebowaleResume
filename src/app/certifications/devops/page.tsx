// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'DevOps Certificate | Abubakri Faaruq Adebowale',
  description: 'DevOps professional certificate covering CI/CD, containerization, and infrastructure automation.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.onrender.com/certifications/devops' },
}

export default function DevOpsCertificate() {
  return (
    <>
      <CertificateViewer
        title="DevOps Certificate"
        subtitle="DevOps Engineering - CI/CD, Containerization, and Automation"
        downloadUrl="/certificate-devops.jpg"
        imgAlt="DevOps Certificate"
      />
    </>
  )
}
