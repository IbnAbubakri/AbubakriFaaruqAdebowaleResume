import { RefreshCw } from 'lucide-react'

export default function FlipHint({
  children = 'Click a card to flip',
}: {
  children?: React.ReactNode
}) {
  return (
    <p className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-mono shadow-sm">
      <RefreshCw aria-hidden="true" className="w-4 h-4 shrink-0" />
      {children}
    </p>
  )
}