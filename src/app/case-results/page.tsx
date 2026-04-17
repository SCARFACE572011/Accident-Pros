import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import CaseResultCard from '@/components/shared/CaseResultCard'
import CTABlock from '@/components/shared/CTABlock'
import { caseResults } from '@/content/case-results'

export const metadata: Metadata = {
  title: 'Case Results & Settlements | Accident Pros',
  description:
    'See Accident Pros case results — settlements and verdicts recovered for personal injury clients in California, Texas, and North Carolina. No fees unless we win.',
  alternates: { canonical: 'https://accidentpros.com/case-results' },
}

export default function CaseResultsPage() {
  return (
    <>
      <PageHero
        headline="We Win What Insurers Try to Deny."
        subheadline="A sample of the settlements and verdicts we've recovered for our clients. Your case may have similar potential."
        breadcrumbs={[{ label: 'Case Results' }]}
      />

      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseResults.map((result) => (
              <CaseResultCard key={result.id} result={result} />
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8 max-w-2xl mx-auto">
            Past results do not guarantee similar outcomes. Results depend on the specific legal and factual circumstances of each case. These are a representative sample of settlements and verdicts obtained by Accident Pros attorneys. Attorney advertising.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
