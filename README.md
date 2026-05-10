# Abubakri Faaruq Adebowale — Portfolio

Professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Deployment:** Render

## Features

- Single-page portfolio with all sections (About, Skills, Certifications, Experience, Education, Projects, Achievements, Testimonials, Contact)
- Dark/Light mode toggle with system preference detection
- Responsive design (mobile, tablet, desktop)
- Scrolling testimonials carousel
- Rain and cloud ambient effects (respects prefers-reduced-motion)
- Certificate viewer pages for CCNA, Network+, and DevOps
- PDF/image download for certificates and CV
- Contact form with API endpoint (Resend-ready)
- SEO-optimized with Open Graph, Twitter cards, sitemap, robots.txt

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Optional — enables email delivery for contact form |

## Deployment

Deployed on Render. Build: `npm install && npm run build`. Start: `npm start`.
