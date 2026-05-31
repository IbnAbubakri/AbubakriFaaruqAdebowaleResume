# Abubakri Faaruq Adebowale — Portfolio

Professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Deployed on Render.

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Linting:** ESLint 9 (flat config) with `@next/eslint-plugin-next`
- **Deployment:** Render (Static Site)

## Sections

- Hero (profile photo, tagline, CV download, social links)
- About (highlights, stats, mission statement)
- Skills (technical categories with tags)
- Certifications (grid with links to dedicated viewer pages)
- Experience (timeline with animated indicators)
- Education (institution cards)
- Projects (project cards)
- Achievements (award cards)
- Testimonials (quote cards)
- Contact (Email, Phone, GitHub, WhatsApp links)

## Features

- Dark/Light mode toggle with system preference detection and localStorage persistence
- Responsive design (mobile, tablet, desktop)
- Certificate viewer pages for CCNA, Network+, AWS, and DevOps (PDF/image download)
- Custom 404 page
- Error boundary wrapping the full app
- Scroll progress bar and back-to-top button
- Mobile menu with keyboard focus trap
- SEO-optimized: per-page metadata, canonical URLs, Open Graph, Twitter cards, sitemap, robots.txt
- Animations with `prefers-reduced-motion` support
- Skip-to-content link for keyboard users

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Lint

```bash
npx eslint .
```

## Build

```bash
npm run build
```

Outputs static site to the `out/` directory.

## Deployment

Deployed as a Render Static Site. Build command: `npm install && npm run build`. Publish directory: `out`.
