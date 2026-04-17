import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import { locationsByState } from '@/content/locations'

export const metadata: Metadata = {
  title: 'Office Locations | Accident Pros | CA, TX & NC',
  description:
    'Accident Pros has 7 offices across California, Texas, and North Carolina. Find a personal injury attorney near you. Free consultation. Call (877) 899-7767.',
  alternates: { canonical: 'https://accidentpros.com/locations' },
}

export default function LocationsPage() {
  return (
    <>
      <PageHero
        headline="We're in Your State. In Your City."
        subheadline="7 offices across California, Texas, and North Carolina — built to provide local representation with the resources of a multi-state firm."
        breadcrumbs={[{ label: 'Locations' }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(locationsByState).map(([state, offices]) => (
              <div key={state}>
                <h2 className="text-2xl font-black text-[#1B2B4B] mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C8973A]" />
                  {state}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {offices.map((office) => (
                    <Link
                      key={office.slug}
                      href={`/locations/${office.slug}`}
                      className="group block p-6 rounded-2xl border border-gray-100 bg-[#F8F9FB] hover:bg-[#1B2B4B] hover:border-[#1B2B4B] transition-all duration-200 hover:shadow-lg"
                    >
                      <h3 className="font-bold text-[#1B2B4B] group-hover:text-white mb-2 transition-colors">
                        {office.city}
                      </h3>
                      <p className="text-xs text-gray-500 group-hover:text-blue-200/70 mb-3 leading-relaxed transition-colors">
                        {office.address}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#C8973A]">
                        <Phone className="w-3 h-3" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#C8973A] mt-2">
                        View office <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
