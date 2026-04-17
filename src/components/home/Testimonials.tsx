import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TestimonialCard from '@/components/shared/TestimonialCard'
import { testimonials } from '@/content/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
              Client Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight">
              Real Clients.
              <br />
              Real Results.
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="flex items-center gap-2 text-sm font-semibold text-[#1B2B4B] hover:text-[#C8973A] transition-colors flex-shrink-0"
          >
            Read All Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center">
          Testimonials represent actual client experiences. Individual results vary. Past results do not guarantee similar outcomes.
        </p>
      </div>
    </section>
  )
}
