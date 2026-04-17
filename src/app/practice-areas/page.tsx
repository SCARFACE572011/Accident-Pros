import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import { practiceAreas } from '@/content/practice-areas-data'

export const metadata: Metadata = {
  title: 'Practice Areas | Personal Injury Cases We Handle',
  description:
    'Accident Pros handles all types of personal injury cases in CA, TX & NC — car accidents, truck accidents, wrongful death, slip and fall, and more. Free consultation.',
  alternates: { canonical: 'https://accidentpros.com/practice-areas' },
}

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        headline="Every Type of Injury Case. One Team."
        subheadline="We handle the full spectrum of personal injury law across California, Texas, and North Carolina."
        breadcrumbs={[{ label: 'Practice Areas' }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-[#F8F9FB] hover:bg-[#1B2B4B] transition-all duration-200 hover:shadow-lg hover:border-[#1B2B4B]"
              >
                <h3 className="font-bold text-[#1B2B4B] group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-blue-200/70 leading-relaxed transition-colors flex-1">
                  {area.description}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#C8973A] mt-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
