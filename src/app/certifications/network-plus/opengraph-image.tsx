// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { ImageResponse } from 'next/og'
import OGPortfolio from '@/components/OGPortfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'CompTIA Network+ Certificate of Abubakri Faaruq Adebowale — networking concepts, infrastructure, and troubleshooting'

export default function OpengraphImage() {
  return new ImageResponse(
    <OGPortfolio
      eyebrow="CERTIFICATION · COMPTIA NETWORK+ · 2024"
      title="CompTIA Network+"
      subtitle="Vendor-neutral networking certification — concepts, infrastructure, operations, security, and troubleshooting."
      chips={['CompTIA', 'VLANs', '802.1Q', 'TCP/IP', 'Troubleshooting']}
    />,
    { ...size }
  )
}