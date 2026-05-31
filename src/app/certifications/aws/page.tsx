import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'AWS Cloud Computing Certificate | Abubakri Faaruq Adebowale',
  description: 'Amazon Web Services Cloud Computing Certificate from ThinkCloudly covering cloud architecture, deployment, and management.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.onrender.com/certifications/aws' },
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
