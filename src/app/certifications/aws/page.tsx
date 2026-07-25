// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'AWS Cloud Computing Certificate | Abubakri Faaruq Adebowale',
  description: 'Amazon Web Services Cloud Computing Certificate from ThinkCloudly covering cloud architecture, deployment, and management.',
  alternates: { canonical: 'https://abubakri-faaruq-adebowale-resume.vercel.app/certifications/aws' },
  openGraph: {
    title: 'AWS Cloud Computing Certificate | Abubakri Faaruq Adebowale',
    description: 'Amazon Web Services Cloud Computing Certificate from ThinkCloudly covering cloud architecture, deployment, and management.',
    images: [{ url: 'https://abubakri-faaruq-adebowale-resume.vercel.app/profile.jpeg', width: 1200, height: 1200 }],
  },
}

export default function AWSCertificate() {
  return (
    <>
      <CertificateViewer
        title="AWS Cloud Computing Certificate"
        subtitle="Amazon Web Services - Cloud Architecture, Deployment, and Management"
        provider="ThinkCloudly"
        downloadUrl="/aws-certificate.jpg"
        imgAlt="AWS Cloud Computing Certificate"
      />
    </>
  )
}
