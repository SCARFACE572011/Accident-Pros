import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import { PHONE, PHONE_RAW } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Thank You | Accident Pros',
  description: 'Your case review request has been received. An Accident Pros attorney will contact you shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>

        <h1 className="text-2xl font-black text-[#1B2B4B] mb-3">
          We Received Your Request.
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          A member of our team will contact you shortly — usually within one business hour. If your matter is urgent, please call us directly.
        </p>

        <a
          href={`tel:${PHONE_RAW}`}
          className="flex items-center justify-center gap-2 bg-[#1B2B4B] text-white font-bold px-6 py-3.5 rounded-full mb-4 hover:bg-[#243459] transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now: {PHONE}
        </a>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1B2B4B] transition-colors"
        >
          Return to Home <ArrowRight className="w-4 h-4" />
        </Link>

        <p className="mt-8 text-xs text-gray-400">
          This form submission does not create an attorney-client relationship. We will reach out to discuss whether we can assist with your matter.
        </p>
      </div>
    </div>
  )
}
