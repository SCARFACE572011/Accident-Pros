import Image from 'next/image'
import { Trophy, Clock, Users } from 'lucide-react'

const signals = [
  {
    icon: Trophy,
    label: '$87M+ Recovered',
    sub: 'For injured clients',
  },
  {
    icon: Clock,
    label: 'Available 24/7',
    sub: 'Always ready to help',
  },
  {
    icon: Users,
    label: '3 States. 9 Offices.',
    sub: 'CA, TX & NC coverage',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6">
          {/* Real badge */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/trust/zero-fee-guarantee.png"
              alt="Zero Fee Guarantee — No fees unless we win"
              width={64}
              height={64}
              className="object-contain"
            />
            <div>
              <p className="font-bold text-[#1B2B4B] text-sm leading-tight">Zero Fee Guarantee</p>
              <p className="text-xs text-gray-500">No fees unless we win</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-gray-200" />

          {/* Stats */}
          {signals.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B2B4B]/8 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-[#1B2B4B]" />
                </div>
                <div>
                  <p className="font-bold text-[#1B2B4B] text-sm leading-tight">{s.label}</p>
                  <p className="text-xs text-gray-500">{s.sub}</p>
                </div>
              </div>
              {i < signals.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
