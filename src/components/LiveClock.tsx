'use client'

import { useState, useEffect } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm select-none">
      <p className="text-gray-700 dark:text-gray-300 font-medium">
        {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
      </p>
      <p className="text-blue-600 dark:text-blue-400 font-bold">
        {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </p>
    </div>
  )
}
