// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'DevOps Certificate | Abubakri Faaruq Adebowale',
  description: 'DevOps professional certificate covering CI/CD, containerization, and infrastructure automation.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.vercel.app/certifications/devops' },
  openGraph: {
    title: 'DevOps Certificate | Abubakri Faaruq Adebowale',
    description: 'DevOps professional certificate covering CI/CD, containerization, and infrastructure automation.',
    images: [{ url: 'https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg', width: 1200, height: 1200 }],
  },
}

export default function DevOpsCertificate() {
  return (
    <>
      <CertificateViewer
        title="DevOps Certificate"
        subtitle="DevOps Engineering - CI/CD, Containerization, and Automation"
        downloadUrl="/certificate-devops.jpg"
        imgAlt="DevOps Certificate"
        intro="I completed a comprehensive DevOps certification covering CI/CD pipelines, Docker containerization, and cloud deployment strategies. It formalized the automation-first practices I use to deliver software reliably and repeatedly."
        highlights={[
          'CI/CD pipeline design and automation',
          'Docker containerization',
          'Infrastructure as Code',
          'Cloud deployment strategies',
          'Monitoring and release management',
        ]}
        sections={[
          {
            heading: 'Automating the Path to Production',
            body: 'The core of DevOps is removing manual, error-prone steps from software delivery. I learned to design CI/CD pipelines that build, test, and deploy code automatically — practices I now apply with GitHub Actions and related tooling to ship production applications rapidly and confidently.',
          },
          {
            heading: 'Containers and Infrastructure as Code',
            body: 'Docker taught me to package applications and their dependencies into portable, reproducible containers. Combined with infrastructure as code, this means environments are defined and versioned rather than configured by hand — leading to consistent, auditable deployments across cloud and on-premise targets.',
          },
          {
            heading: 'DevOps in Practice',
            body: 'These skills bridge my networking and cloud background into full software delivery. I have deployed multiple production applications with automated pipelines and containerized environments on Vercel, Render, and AWS, treating reliability and repeatability as first-class requirements.',
          },
        ]}
      />
    </>
  )
}
