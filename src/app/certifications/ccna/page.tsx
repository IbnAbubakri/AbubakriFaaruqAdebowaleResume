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
        intro="I earned my Cisco Certified Network Associate (CCNA) certification with distinction, completing the rigorous curriculum at HIIT Plc. This certification is the industry benchmark for enterprise networking, validating hands-on ability to configure, operate, and troubleshoot routed and switched networks."
        highlights={[
          'Network fundamentals and IP addressing',
          'OSPF and EIGRP dynamic routing',
          'VLAN segmentation and Layer 2 switching',
          'Network security and access control',
          'Automation and network programmability',
        ]}
        sections={[
          {
            heading: 'What the CCNA Covers',
            body: 'The CCNA exam spans the full modern networking stack — from foundational concepts like IP connectivity and subnetting to advanced topics such as wireless LANs, network automation, and programmability. I trained extensively in Cisco Packet Tracer and on real equipment, configuring OSPF, EIGRP, STP, VLANs, and inter-VLAN routing on Layer 3 switches using SVIs.',
          },
          {
            heading: 'Applied in the Real World',
            body: 'The principles I mastered for the CCNA inform my daily work as a network engineer and IT administrator. Skills like VLAN segmentation, access control lists, and secure routing underpin the enterprise network designs I build and manage, where I prioritize reliability and security-first thinking in every deployment.',
          },
          {
            heading: 'A Distinction With Purpose',
            body: 'Earning this certification with distinction reflects a commitment to mastery, not just passing. It established the deep networking foundation that supports my work in cybersecurity, cloud architecture, and teaching — where I now guide students through the very same networks I learned to build.',
          },
        ]}
      />
    </>
  )
}
