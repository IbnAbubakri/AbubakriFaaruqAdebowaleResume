function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Rain() {
  const drops = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: rand(0, 100),
    delay: rand(0, 3),
    duration: rand(0.8, 2),
    opacity: rand(0.1, 0.3),
    height: rand(10, 20),
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden motion-reduce:hidden">
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
    </div>
  )
}
