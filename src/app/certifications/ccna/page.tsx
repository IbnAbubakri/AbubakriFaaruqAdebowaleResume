import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'CCNA Certificate | Abubakri Faaruq Adebowale',
  description: 'Cisco Certified Network Associate certificate with Distinction from HIIT Plc.',
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
