// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.

import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abubakri Faaruq Adebowale | IT Professional & Network Engineer',
    short_name: 'Faaruq Adebowale',
    description: 'Portfolio of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#00e5ff',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
