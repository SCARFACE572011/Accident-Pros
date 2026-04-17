import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseResultCard from '@/components/shared/CaseResultCard'
import { featuredResults } from '@/content/case-results'

export default function CaseResults() {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
              Case Results
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight">
              We Win What Insurance
              <br />
              Companies Try to Deny.
            </h2>
          </div>
          <Link
            href="/case-results"
            className="flex items-center gap-2 text-sm font-semibold text-[#1B2B4B] hover:text-[#C8973A] transition-colors flex-shrink-0"
          >
            View All Results <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredResults.slice(0, 6).map((result) => (
            <CaseResultCard key={result.id} result={result} />
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-400 text-center max-w-2xl mx-auto">
          Past results do not guarantee similar outcomes. Results depend on the specific legal and factual circumstances of each matter. Attorney advertising.
        </p>
      </div>
    </section>
  )
}
