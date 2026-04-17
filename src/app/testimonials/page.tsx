import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import TestimonialCard from '@/components/shared/TestimonialCard'
import CTABlock from '@/components/shared/CTABlock'
import { testimonials } from '@/content/testimonials'

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Accident Pros',
  description:
    'Read real reviews from Accident Pros clients across California, Texas, and North Carolina. See why injured people trust us to fight for their recovery.',
  alternates: { canonical: 'https://accidentpros.com/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        headline="What Our Clients Say."
        subheadline="Real people. Real cases. Real outcomes."
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">
            Testimonials represent actual client experiences. Individual results vary. Past results do not guarantee similar outcomes. Attorney advertising.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
