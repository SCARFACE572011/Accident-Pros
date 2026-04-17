import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import ConsultationForm from '@/components/shared/ConsultationForm'
import { PHONE, PHONE_RAW } from '@/lib/utils'

const proofs = [
  'No fees unless we win',
  'Free 24/7 consultation',
  'Multi-state coverage',
]

export default function Hero() {
  return (
    <section className="relative bg-[#1B2B4B] min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8973A]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C8973A]/20 border border-[#C8973A]/40 rounded-full px-3 py-1 text-xs font-semibold text-[#C8973A] mb-6">
              California · Texas · North Carolina
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight text-balance">
              Injured?{' '}
              <span className="text-[#C8973A]">We Fight.</span>
              <br />
              You Recover.
            </h1>

            <p className="mt-5 text-lg text-blue-100/80 leading-relaxed max-w-xl">
              Accident Pros is a personal injury firm built to win. We&apos;ve recovered
              millions for injured clients in California, Texas, and North Carolina — and
              we don&apos;t collect a cent unless you do.
            </p>

            {/* Proof points */}
            <div className="mt-6 flex flex-wrap gap-3">
              {proofs.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8973A] flex-shrink-0" />
                  <span className="text-white text-xs font-medium">{p}</span>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-3 bg-white hover:bg-gray-50 text-[#1B2B4B] font-bold px-6 py-3.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE}</span>
              </a>
              <span className="text-blue-200/50 text-sm hidden sm:block">or fill out the form →</span>
            </div>

            <p className="mt-4 text-xs text-blue-200/50">
              Available 24 hours a day, 7 days a week
            </p>

            {/* Recovery totals */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { value: '$87M+', label: 'Recovered for clients' },
                { value: '9', label: 'Office locations' },
                { value: '3', label: 'States covered' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-blue-200/60 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <ConsultationForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
