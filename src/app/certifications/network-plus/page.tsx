import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'CompTIA Network+ Certificate | Abubakri Faaruq Adebowale',
  description: 'CompTIA Network+ certification covering networking concepts, infrastructure, and troubleshooting.',
}

export default function NetworkPlusCertificate() {
  return (
    <>
      <CertificateViewer
        title="CompTIA Network+ Certificate"
        subtitle="CompTIA Network+ - Networking Concepts and Infrastructure"
        downloadUrl="/network-plus-certificate.jpg"
        imgAlt="CompTIA Network+ Certificate"
      />
    </>
  )
}
