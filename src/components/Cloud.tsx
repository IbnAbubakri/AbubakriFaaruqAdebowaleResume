'use client'

export default function Cloud() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <style jsx>{`
        @keyframes cloudDrift1 {
          0% { transform: translateX(-300px); }
          100% { transform: translateX(calc(100vw + 300px)); }
        }
        @keyframes cloudDrift2 {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes cloudDrift3 {
          0% { transform: translateX(-250px); }
          100% { transform: translateX(calc(100vw + 250px)); }
        }
      `}</style>
      <div
        className="absolute text-5xl opacity-20 dark:opacity-15"
        style={{ top: '8%', animation: 'cloudDrift1 45s linear infinite' }}
      >
        ☁️
      </div>
      <div
        className="absolute text-4xl opacity-15 dark:opacity-10"
        style={{ top: '20%', animation: 'cloudDrift2 60s linear infinite', animationDelay: '-15s' }}
      >
        ☁️
      </div>
      <div
        className="absolute text-6xl opacity-10 dark:opacity-8"
        style={{ top: '45%', animation: 'cloudDrift3 70s linear infinite', animationDelay: '-30s' }}
      >
        ☁️
      </div>
      <div
        className="absolute text-3xl opacity-20 dark:opacity-15"
        style={{ top: '65%', animation: 'cloudDrift2 55s linear infinite', animationDelay: '-10s' }}
      >
        ☁️
      </div>
      <div
        className="absolute text-5xl opacity-10 dark:opacity-8"
        style={{ top: '80%', animation: 'cloudDrift1 50s linear infinite', animationDelay: '-25s' }}
      >
        ☁️
      </div>
    </div>
  )
}
