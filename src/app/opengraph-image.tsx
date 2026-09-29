// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { ImageResponse } from 'next/og'
import OGPortfolio from '@/components/OGPortfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt =
  'Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Software Developer'

export default function OpengraphImage() {
  return new ImageResponse(
    <OGPortfolio
      title="IT Professional, Network Engineer &amp; Software Developer"
      subtitle="5+ years across enterprise IT infrastructure, networking, security, cloud, and full-stack development. Lagos, Nigeria."
    />,
    { ...size }
  )
}