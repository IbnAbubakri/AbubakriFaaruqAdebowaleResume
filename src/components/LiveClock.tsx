'use client'

import { useState, useEffect } from 'react'

function randPos() {
  const corners = [
    { bottom: '1rem', left: '1rem', right: 'auto', top: 'auto' },
    { bottom: '1rem', right: '1rem', left: 'auto', top: 'auto' },
    { top: '5rem', left: '1rem', bottom: 'auto', right: 'auto' },
    { top: '5rem', right: '1rem', bottom: 'auto', left: 'auto' },
  ]
  return corners[Math.floor(Math.random() * corners.length)]
}

export default function LiveClock() {
  const [time, setTime] = useState(new Date())
  const [pos, setPos] = useState(() => randPos())

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000)
    const move = setInterval(() => setPos(randPos()), 60000)
    return () => { clearInterval(tick); clearInterval(move) }
  }, [])

  return (
    <div
      className="fixed z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm select-none transition-all duration-700 ease-in-out"
      aria-live="off"
      style={pos}
    >
      <p className="text-gray-700 dark:text-gray-300 font-medium">
        {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
      </p>
      <p className="text-blue-600 dark:text-blue-400 font-bold">
        {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </p>
    </div>
  )
}
