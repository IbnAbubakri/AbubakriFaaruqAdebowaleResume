// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from 'next'
import CertificateViewer from '@/components/CertificateViewer'

export const metadata: Metadata = {
  title: 'AWS Cloud Computing Certificate | Abubakri Faaruq Adebowale',
  description: 'Amazon Web Services Cloud Computing Certificate from ThinkCloudly covering cloud architecture, deployment, and management.',
  alternates: { canonical: 'https://abubakrifaaruqadebowaleresume.vercel.app/certifications/aws' },
  openGraph: {
    title: 'AWS Cloud Computing Certificate | Abubakri Faaruq Adebowale',
    description: 'Amazon Web Services Cloud Computing Certificate from ThinkCloudly covering cloud architecture, deployment, and management.',
    images: [{ url: 'https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg', width: 1200, height: 1200 }],
  },
}

export default function AWSCertificate() {
  return (
    <>
      <CertificateViewer
        title="AWS Cloud Computing Certificate"
        subtitle="Amazon Web Services - Cloud Architecture, Deployment, and Management"
        provider="ThinkCloudly"
        downloadUrl="/aws-certificate.jpg"
        imgAlt="AWS Cloud Computing Certificate"
        intro="I completed my Amazon Web Services Cloud Computing certification through ThinkCloudly, covering cloud architecture, deployment, and management. It gave me a practical command of AWS core services and the patterns used to build scalable, secure cloud-native applications."
        highlights={[
          'EC2 compute and instance management',
          'S3 storage and lifecycle strategies',
          'Lambda serverless functions',
          'VPC networking and IAM security',
          'Cloud deployment best practices',
        ]}
        sections={[
          {
            heading: 'Building on AWS',
            body: 'The certification trained me in the essential building blocks of the AWS platform — EC2 for compute, S3 for scalable object storage, Lambda for serverless workloads, and VPC for network isolation. I learned how these services compose into secure, cost-effective architectures designed for production use.',
          },
          {
            heading: 'Security at the Core',
            body: 'Cloud security is fundamental, not an afterthought. I focused on IAM for identity and access control, VPC design for network segmentation, and security groups for instance-level protection. This security-first approach aligns directly with my work managing enterprise AWS infrastructure and migrations.',
          },
          {
            heading: 'From Cloud to DevOps',
            body: 'Understanding AWS native services naturally extends into a DevOps workflow. I apply these skills alongside CI/CD pipelines, containerized deployments, and infrastructure as code to ship applications that are both resilient and repeatable — now a core part of how I build and deliver software.',
          },
        ]}
      />
    </>
  )
}
