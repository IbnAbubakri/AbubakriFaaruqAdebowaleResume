// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

/**
 * Renders a project's real deployed site inside the card instead of a
 * pre-captured screenshot.
 *
 * Two things make this survivable. The frame is only mounted once the card is
 * close to the viewport, so a full page of projects does not boot a dozen apps
 * at once. And pointer events stay off until hover, because a live frame
 * swallows touch scrolling the moment your finger is over it.
 *
 * Not every site can be framed: `X-Frame-Options` and `CSP frame-ancestors`
 * are enforced by the browser and cannot be worked around from here. Sites
 * that refuse (or that only render a login screen) get a static panel instead,
 * so a card never shows an empty white box.
 */
export default function LivePreview({
  url,
  title,
  accent = 'var(--accent)',
  className = '',
}: {
  url: string
  title: string
  accent?: string
  className?: string
}) {
  const holder = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = holder.current
    if (!node) return
    // rootMargin starts the load before the card is on screen, so the frame is
    // usually painted by the time it scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  let host = url
  try {
    host = new URL(url).host
  } catch {
    /* keep the raw url if it is not parseable */
  }

  return (
    <div
      ref={holder}
      // A click inside the frame must not bubble up to the FlipCard parent,
      // or interacting with the preview flips the card instead.
      onClick={(e) => e.stopPropagation()}
      className={`overflow-hidden rounded-lg border border-border bg-muted/40 ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/60">
        <span aria-hidden="true" className="flex gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
        </span>
        <span className="font-mono text-[11px] text-muted-foreground truncate">
          {host}
        </span>
      </div>

      <div className="relative aspect-video bg-background">
        {mounted ? (
          <iframe
            src={url}
            title={`${title} — live preview`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className={`absolute inset-0 h-full w-full border-0 ${
              active ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-[11px] text-muted-foreground/70">
              loading preview…
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Shown in place of a frame for sites that cannot be framed, or whose landing
 * route is a login screen. Explains why instead of leaving a blank rectangle.
 */
export function PreviewUnavailable({
  url,
  title,
  reason,
  accent = 'var(--accent)',
  className = '',
}: {
  url?: string
  title: string
  reason: string
  accent?: string
  className?: string
}) {
  let host = url ?? ''
  try {
    host = host ? new URL(url as string).host : ''
  } catch {
    /* no usable host to show */
  }

  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-muted/30 ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/50">
        <span aria-hidden="true" className="flex gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
        </span>
        {host && (
          <span className="font-mono text-[11px] text-muted-foreground/60 truncate">
            {host}
          </span>
        )}
      </div>

      <div className="relative aspect-video grid place-items-center px-6 text-center">
        <div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[26ch] mx-auto">
            {reason}
          </p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] transition-colors hover:underline"
              style={{ color: accent }}
            >
              Open {title}
              <ExternalLink aria-hidden="true" className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
