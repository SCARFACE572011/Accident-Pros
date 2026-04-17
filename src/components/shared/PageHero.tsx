import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Breadcrumb {
  label: string
  href?: string
}

interface Props {
  headline: string
  subheadline?: string
  breadcrumbs?: Breadcrumb[]
  badge?: string
  className?: string
  children?: React.ReactNode
}

export default function PageHero({
  headline,
  subheadline,
  breadcrumbs,
  badge,
  className,
  children,
}: Props) {
  return (
    <section
      className={cn(
        'relative bg-[#1B2B4B] pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden',
        className
      )}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-blue-200 mb-5 flex-wrap"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-blue-300/50" />
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 bg-[#C8973A]/20 border border-[#C8973A]/30 rounded-full px-3 py-1 text-xs font-semibold text-[#C8973A] mb-4">
            {badge}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight text-balance max-w-3xl">
          {headline}
        </h1>

        {subheadline && (
          <p className="mt-4 text-base md:text-lg text-blue-100/80 max-w-2xl leading-relaxed">
            {subheadline}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
