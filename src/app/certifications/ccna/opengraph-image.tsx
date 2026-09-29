// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { ImageResponse } from 'next/og'
import OGPortfolio from '@/components/OGPortfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'CCNA Certificate of Abubakri Faaruq Adebowale — Cisco Certified Network Associate with Distinction'

export default function OpengraphImage() {
  return new ImageResponse(
    <OGPortfolio
      eyebrow="CERTIFICATION · CCNA · 2024"
      title="CCNA — Distinction"
      subtitle="Cisco Certified Network Associate, earned with distinction at HIIT Plc. Routing, switching, security, automation."
      chips={['Cisco', 'Routing & Switching', 'OSPF', 'EIGRP', 'Security']}
    />,
    { ...size }
  )
}