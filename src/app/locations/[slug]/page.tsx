import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import ConsultationForm from '@/components/shared/ConsultationForm'
import SchemaOrg from '@/components/seo/SchemaOrg'
import { locations } from '@/content/locations'
import { attorneys } from '@/content/attorneys'
import { practiceAreas } from '@/content/practice-areas-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) return {}
  return {
    title: `Personal Injury Lawyer ${location.city}, ${location.stateCode} | Accident Pros`,
    description: `Injured in ${location.city}? Our personal injury attorneys fight for maximum compensation. Free consultation. No fees unless we win. Call (877) 899-7767.`,
    alternates: { canonical: `https://accidentpros.com/locations/${slug}` },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) notFound()

  const locationAttorneys = attorneys.filter((a) =>
    location.attorneys?.includes(a.slug)
  )

  const [street, ...rest] = location.address.split(',')

  return (
    <>
      <SchemaOrg
        type="location"
        data={{
          slug: location.slug,
          city: location.city,
          stateCode: location.stateCode,
          streetAddress: street,
        }}
      />
      <PageHero
        headline={`Personal Injury Lawyers in ${location.city}, ${location.stateCode}`}
        subheadline={`Local representation, relentless advocacy. Serving ${location.city} and the surrounding area.`}
        breadcrumbs={[
          { label: 'Locations', href: '/locations' },
          { label: location.city },
        ]}
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">{location.description}</p>
              </div>

              {/* Office info */}
              <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-[#1B2B4B] mb-4">
                  {location.city} Office
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C8973A] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C8973A] flex-shrink-0" />
                    <a
                      href="tel:8778997767"
                      className="text-sm text-gray-600 hover:text-[#1B2B4B] transition-colors font-semibold"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Practice areas */}
              <div>
                <h2 className="text-xl font-black text-[#1B2B4B] mb-5">
                  Cases We Handle in {location.city}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {practiceAreas.slice(0, 8).map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1B2B4B] transition-colors p-3 rounded-xl hover:bg-gray-50"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8973A] flex-shrink-0" />
                      {area.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ConsultationForm variant="sidebar" />

              <div className="bg-[#1B2B4B] rounded-2xl p-5 text-white">
                <p className="font-bold text-sm mb-2">No Win, No Fee</p>
                <p className="text-blue-200/70 text-xs leading-relaxed">
                  You pay nothing upfront. Our fee is a percentage of your recovery only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline={`Ready to Speak with a ${location.city} Personal Injury Attorney?`}
        subheadline="Free consultation. No fees unless we win. Available 24/7."
      />
    </>
  )
}
