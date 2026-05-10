const clouds = [
  { top: '15%', size: 'text-5xl', speed: 'cloudDrift1 60s linear infinite', opacity: 'opacity-15 dark:opacity-10' },
  { top: '40%', size: 'text-4xl', speed: 'cloudDrift2 75s linear infinite', opacity: 'opacity-10 dark:opacity-8' },
  { top: '70%', size: 'text-5xl', speed: 'cloudDrift1 65s linear infinite', opacity: 'opacity-12 dark:opacity-8' },
]

export default function Cloud() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden motion-reduce:hidden">
      {clouds.map((c, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`absolute ${c.size} ${c.opacity}`}
          style={{ top: c.top, animation: c.speed, animationDelay: `${-i * 20}s` }}
        >
          ☁️
        </div>
      ))}
    </div>
  )
}
