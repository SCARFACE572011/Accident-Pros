import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import ConsultationForm from '@/components/shared/ConsultationForm'
import { PHONE, PHONE_RAW } from '@/lib/utils'

export default function FinalCTA() {
  return (
    <section className="bg-[#1B2B4B] py-20 relative overflow-hidden">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8973A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Don&apos;t Wait. Every Day
              <br />
              Matters in Your Case.
            </h2>
            <p className="text-blue-100/75 text-base leading-relaxed mb-8">
              Evidence fades. Witnesses become harder to reach. Statutes of limitations count down. The sooner you contact us, the better we can protect your rights and build your case.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-3 text-white hover:text-[#C8973A] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8973A] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold">{PHONE}</p>
                  <p className="text-xs text-blue-200/60">Available 24/7</p>
                </div>
              </a>
            </div>

            <ul className="mt-8 space-y-2.5">
              {[
                'Free, confidential case evaluation',
                'No fees unless we win your case',
                'Immediate response from our team',
                'Medical referrals if you need care now',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8973A] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ConsultationForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
