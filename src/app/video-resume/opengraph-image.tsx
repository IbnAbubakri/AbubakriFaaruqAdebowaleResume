// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { ImageResponse } from 'next/og'
import OGPortfolio from '@/components/OGPortfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Video Resume of Abubakri Faaruq Adebowale — IT, networking, security, cloud, and software development'

export default function OpengraphImage() {
  return new ImageResponse(
    <OGPortfolio
      title="Video Resume"
      subtitle="A 35-second professional overview of experience, skills, and certifications across IT, networking, cybersecurity, and cloud computing."
      chips={['35s', '1080p', '9 scenes']}
    />,
    { ...size }
  )
}