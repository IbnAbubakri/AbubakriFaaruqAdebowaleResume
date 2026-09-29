// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { ImageResponse } from 'next/og'
import OGPortfolio from '@/components/OGPortfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'DevOps Certificate of Abubakri Faaruq Adebowale — CI/CD, containerization, and automation'

export default function OpengraphImage() {
  return new ImageResponse(
    <OGPortfolio
      eyebrow="CERTIFICATION · DEVOPS · 2025"
      title="DevOps Engineering"
      subtitle="CI/CD pipelines, Docker containerization, infrastructure as code, and cloud deployment strategies."
      chips={['CI/CD', 'Docker', 'Kubernetes', 'IaC', 'AWS']}
      accent="#34d399"
    />,
    { ...size }
  )
}