import { NextRequest } from 'next/server'
import * as viewStore from '@/lib/viewStore'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ count: viewStore.get() })}\n\n`)
      )

      const unsubscribe = viewStore.subscribe((count) => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ count })}\n\n`)
          )
        } catch {
          unsubscribe()
        }
      })

      request.signal.addEventListener('abort', () => unsubscribe())
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}

export async function POST() {
  const count = viewStore.increment()
  return Response.json({ count })
}
