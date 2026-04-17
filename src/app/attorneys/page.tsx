import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import AttorneyCard from '@/components/shared/AttorneyCard'
import CTABlock from '@/components/shared/CTABlock'
import { attorneys } from '@/content/attorneys'

export const metadata: Metadata = {
  title: 'Our Attorneys | Accident Pros',
  description:
    'Meet the Accident Pros legal team. Experienced personal injury attorneys licensed in California, Texas, and North Carolina. Free consultation.',
  alternates: { canonical: 'https://accidentpros.com/attorneys' },
}

export default function AttorneysPage() {
  return (
    <>
      <PageHero
        headline="Meet Your Legal Team."
        subheadline="Experienced. Multi-state licensed. Trial-ready. And completely on your side."
        breadcrumbs={[{ label: 'Attorneys' }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
