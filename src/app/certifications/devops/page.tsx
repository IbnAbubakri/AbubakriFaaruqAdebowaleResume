import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'DevOps Certificate | Abubakri Faaruq Adebowale',
  description: 'DevOps professional certificate covering CI/CD, containerization, and infrastructure automation.',
}

export default function DevOpsCertificate() {
  return (
    <>
      <CertificateViewer
        title="DevOps Certificate"
        subtitle="DevOps Engineering - CI/CD, Containerization, and Automation"
        downloadUrl="/devops-certificate.jpg"
        imgAlt="DevOps Certificate"
      />
    </>
  )
}
