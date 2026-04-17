'use client'

import { Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { PHONE, PHONE_RAW } from '@/lib/utils'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex gap-3">
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1B2B4B] text-white font-semibold text-sm py-3 rounded-xl"
        >
          <Phone className="w-4 h-4" />
          <span>Call {PHONE}</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C8973A] text-white font-semibold text-sm py-3 rounded-xl"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Free Review</span>
        </Link>
      </div>
    </div>
  )
}
