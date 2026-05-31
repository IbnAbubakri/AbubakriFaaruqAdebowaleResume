'use client'

import { useState, useEffect, useRef } from 'react'

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null)
  const counted = useRef(false)

  useEffect(() => {
    if (!counted.current && !sessionStorage.getItem('viewed')) {
      counted.current = true
      sessionStorage.setItem('viewed', 'true')
      fetch('/api/views', { method: 'POST' }).catch(() => {})
    }

    let eventSource: EventSource | null = null
    let pollTimer: ReturnType<typeof setInterval> | null = null

    function connectSSE() {
      eventSource = new EventSource('/api/views')

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          setCount(data.count)
        } catch {}
      }

      eventSource.onerror = () => {
        eventSource?.close()

        if (!pollTimer) {
          pollTimer = setInterval(async () => {
            try {
              const res = await fetch('/api/views')
              const data = await res.json()
              setCount(data.count)
            } catch {}
          }, 10000)
        }
      }
    }

    connectSSE()

    return () => {
      eventSource?.close()
      if (pollTimer) clearInterval(pollTimer)
    }
  }, [])

  if (count === null) return null

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {count.toLocaleString()} profile views
    </span>
  )
}
