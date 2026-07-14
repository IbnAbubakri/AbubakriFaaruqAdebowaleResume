// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://abubakrifaaruqadebowaleresume.onrender.com'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/certifications/ccna`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/certifications/devops`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/certifications/network-plus`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/certifications/aws`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
