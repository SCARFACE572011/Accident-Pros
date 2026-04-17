import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { PHONE, PHONE_RAW } from '@/lib/utils'

interface Props {
  headline?: string
  subheadline?: string
  variant?: 'navy' | 'gold' | 'light'
}

export default function CTABlock({
  headline = 'Ready to Fight for What You Deserve?',
  subheadline = 'Free consultation. No fees unless we win. Available 24/7.',
  variant = 'navy',
}: Props) {
  const isNavy = variant === 'navy'
  const isGold = variant === 'gold'

  return (
    <section
      className={
        isNavy
          ? 'bg-[#1B2B4B] py-16'
          : isGold
            ? 'bg-[#C8973A] py-16'
            : 'bg-[#F8F9FB] py-16 border-t border-gray-100'
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl md:text-4xl font-black leading-tight mb-4 ${
            isNavy || isGold ? 'text-white' : 'text-[#1B2B4B]'
          }`}
        >
          {headline}
        </h2>
        <p
          className={`text-base md:text-lg mb-8 ${
            isNavy ? 'text-blue-100/80' : isGold ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#C8973A] hover:bg-[#b8872a] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm"
          >
            Get Your Free Case Review
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${PHONE_RAW}`}
            className={`flex items-center gap-2 font-bold px-8 py-4 rounded-full border-2 transition-colors text-sm ${
              isNavy
                ? 'border-white/30 text-white hover:bg-white/10'
                : isGold
                  ? 'border-white/50 text-white hover:bg-white/20'
                  : 'border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            Call {PHONE}
          </a>
        </div>
        <p
          className={`text-xs mt-6 ${
            isNavy ? 'text-blue-200/60' : isGold ? 'text-white/70' : 'text-gray-400'
          }`}
        >
          Available 24/7 · No upfront costs · Confidential consultation
        </p>
      </div>
    </section>
  )
}
