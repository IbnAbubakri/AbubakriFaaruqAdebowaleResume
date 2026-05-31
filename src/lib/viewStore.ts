import fs from 'fs'
import path from 'path'

type Listener = (count: number) => void
const listeners = new Set<Listener>()

const filePath = path.join(process.cwd(), 'views.json')

function readCount(): number {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8')).count
    }
  } catch {}
  return 0
}

function writeCount(count: number) {
  try {
    fs.writeFileSync(filePath, JSON.stringify({ count }))
  } catch {}
}

export function get(): number {
  return readCount()
}

export function increment(): number {
  const count = readCount() + 1
  writeCount(count)
  listeners.forEach(fn => fn(count))
  return count
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
