import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AttorneyCard from '@/components/shared/AttorneyCard'
import { attorneys } from '@/content/attorneys'

export default function AttorneyTeaser() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Attorneys
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight">
              Experienced. Tenacious.
              <br />
              On Your Side.
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-lg leading-relaxed">
              Our founding attorneys bring multi-state experience, trial readiness, and a track record of significant recoveries for injured clients.
            </p>
          </div>
          <Link
            href="/attorneys"
            className="flex items-center gap-2 text-sm font-semibold text-[#1B2B4B] hover:text-[#C8973A] transition-colors flex-shrink-0"
          >
            View Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.slug} attorney={attorney} />
          ))}
        </div>
      </div>
    </section>
  )
}
