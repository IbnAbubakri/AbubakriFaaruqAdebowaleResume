'use client'

import { useEffect, useState } from 'react'

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Rain() {
  const [drops] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: rand(0, 100),
      delay: rand(0, 3),
      duration: rand(0.6, 1.5),
      opacity: rand(0.15, 0.45),
      height: rand(10, 25),
    }))
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {drops.map(d => (
        <div
          key={d.id}
          className="absolute top-0 w-px bg-blue-200 dark:bg-blue-300"
          style={{
            left: `${d.left}%`,
            height: `${d.height}px`,
            opacity: d.opacity,
            animation: `rainFall ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes rainFall {
          0% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}
