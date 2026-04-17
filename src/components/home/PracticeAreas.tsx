import Link from 'next/link'
import { ArrowRight, Car, Truck, Bike, Smartphone, PersonStanding, AlertTriangle, Building2, Heart } from 'lucide-react'
import { featuredPracticeAreas } from '@/content/practice-areas-data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Truck,
  Bike,
  Smartphone,
  PersonStanding,
  AlertTriangle,
  Building2,
  Heart,
}

export default function PracticeAreas() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
            What We Handle
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight">
            Personal Injury Cases We Win
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From car accidents to wrongful death, our attorneys handle the full spectrum of personal injury cases across California, Texas, and North Carolina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPracticeAreas.map((area) => {
            const Icon = iconMap[area.icon] || Car
            return (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#1B2B4B] hover:border-[#1B2B4B] transition-all duration-200 hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1B2B4B]/8 group-hover:bg-white/15 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-[#1B2B4B] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-[#1B2B4B] group-hover:text-white text-sm transition-colors">
                    {area.shortTitle}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-blue-200/70 mt-1 leading-relaxed transition-colors line-clamp-2">
                    {area.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#C8973A] mt-auto">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 bg-[#1B2B4B] hover:bg-[#243459] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            View All Practice Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
