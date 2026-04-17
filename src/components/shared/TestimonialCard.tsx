import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

interface Props {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#C8973A] text-[#C8973A]" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-[#1B2B4B]/10 flex items-center justify-center text-[#1B2B4B] font-bold text-sm flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[#1B2B4B] text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-400">
            {testimonial.caseType}
            {testimonial.location ? ` · ${testimonial.location}` : ''}
          </p>
        </div>
      </div>
    </div>
  )
}
