import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Scale } from 'lucide-react'
import type { Attorney } from '@/types'

interface Props {
  attorney: Attorney
  compact?: boolean
}

export default function AttorneyCard({ attorney, compact = false }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full group">
      {/* Photo */}
      <div className="relative h-64 bg-[#1B2B4B]/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Scale className="w-16 h-16 text-[#1B2B4B]/10" />
        </div>
        {attorney.photo && attorney.photo !== '/images/attorneys/placeholder.jpg' && (
          <Image
            src={attorney.photo}
            alt={attorney.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1B2B4B]/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="text-white font-bold text-sm">{attorney.name}</p>
          <p className="text-[#C8973A] text-xs font-semibold">{attorney.title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {!compact && (
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {attorney.bio}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {attorney.specializations.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-xs bg-[#1B2B4B]/5 text-[#1B2B4B] px-2.5 py-1 rounded-full font-medium"
            >
              {s}
            </span>
          ))}
        </div>

        <Link
          href={`/attorneys/${attorney.slug}`}
          className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#1B2B4B] hover:text-[#C8973A] transition-colors group/link"
        >
          View Profile
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
