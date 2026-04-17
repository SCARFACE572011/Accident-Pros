'use client'

import { track } from '@vercel/analytics'
import { PHONE, PHONE_RAW } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
  source?: string
}

export default function CallLink({ className, children, source = 'unknown' }: Props) {
  return (
    <a
      href={`tel:${PHONE_RAW}`}
      className={className}
      onClick={() => track('call_click', { source })}
    >
      {children}
    </a>
  )
}
