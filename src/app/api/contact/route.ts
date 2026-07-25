import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().max(0), // honeypot — must be empty
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjkyqobw'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { website, ...data } = result.data

    if (website) {
      return NextResponse.json({ success: true }) // silent reject for bots
    }

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
