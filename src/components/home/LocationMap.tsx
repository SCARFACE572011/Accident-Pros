import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { locationsByState } from '@/content/locations'

export default function LocationMap() {
  const states = Object.entries(locationsByState)

  return (
    <section className="bg-[#1B2B4B] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
            Our Locations
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Local Representation.
            <br />
            National Caliber.
          </h2>
          <p className="mt-3 text-blue-200/70 text-sm max-w-lg mx-auto">
            7 offices across California, Texas, and North Carolina — close to you, and close to the courts where your case will be heard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {states.map(([state, offices]) => (
            <div key={state} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8973A]" />
                {state}
              </h3>
              <ul className="space-y-2.5">
                {offices.map((office) => (
                  <li key={office.slug}>
                    <Link
                      href={`/locations/${office.slug}`}
                      className="flex items-center justify-between text-sm text-blue-200/80 hover:text-white transition-colors group"
                    >
                      <span>{office.city}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-[#C8973A] hover:bg-[#b8872a] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            View All Offices <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
