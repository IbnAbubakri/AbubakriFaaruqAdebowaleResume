import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Certification | Abubakri Faaruq Adebowale",
  description: "View professional certifications including CCNA, CompTIA Network+, and DevOps.",
}

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
