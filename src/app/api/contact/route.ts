import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['faruqsuzay@gmail.com'],
          subject: `Portfolio Contact: ${subject}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error('[Contact] Resend error:', err)
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    console.log('[Contact] No RESEND_API_KEY configured. Form submission:', { name, email, subject, message })
    return NextResponse.json({ success: true, note: 'Logged (email not sent — configure RESEND_API_KEY)' })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
