import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface Props {
  items: Breadcrumb[]
}

export default function BreadcrumbNav({ items }: Props) {
  const all = [{ label: 'Home', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `https://accidentpros.com${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap"
      >
        {all.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i === 0 && <Home className="w-3.5 h-3.5" />}
            {crumb.href && i < all.length - 1 ? (
              <Link href={crumb.href} className="hover:text-[#1B2B4B] transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{crumb.label}</span>
            )}
            {i < all.length - 1 && (
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
