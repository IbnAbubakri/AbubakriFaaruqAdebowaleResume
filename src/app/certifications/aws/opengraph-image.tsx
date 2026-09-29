// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { ImageResponse } from 'next/og'
import OGPortfolio from '@/components/OGPortfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'AWS Cloud Computing Certificate of Abubakri Faaruq Adebowale — cloud architecture, deployment, and management'

export default function OpengraphImage() {
  return new ImageResponse(
    <OGPortfolio
      eyebrow="CERTIFICATION · AWS · 2025"
      title="AWS Cloud Computing"
      subtitle="Amazon Web Services certification — architecture, deployment, and management. Trained at ThinkCloudly."
      chips={['EC2', 'S3', 'Lambda', 'VPC', 'IAM']}
      accent="#22d3ee"
    />,
    { ...size }
  )
}