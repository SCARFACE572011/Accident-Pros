import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendLeadEmail } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  caseType: z.string().min(1).max(100),
  message: z.string().max(2000).optional(),
  email: z.string().email().optional().or(z.literal('')),
  honeypot: z.string().max(0, 'Bot detected'),
})

// In-memory rate limiter (per IP, per hour)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = Number(process.env.RATE_LIMIT_MAX) || 5
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please call us directly.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const { name, phone, caseType, message, email } = parsed.data

  try {
    await sendLeadEmail({ name, phone, caseType, message, email, ip })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    // Still return success to avoid leaking SMTP config errors to client
    return NextResponse.json({ success: true })
  }
}
