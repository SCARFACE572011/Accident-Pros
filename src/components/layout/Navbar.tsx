'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { cn, PHONE, PHONE_RAW } from '@/lib/utils'
import { practiceAreas } from '@/content/practice-areas-data'

const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  {
    label: 'Practice Areas',
    href: '/practice-areas',
    children: practiceAreas.slice(0, 8).map((a) => ({
      label: a.shortTitle,
      href: `/practice-areas/${a.slug}`,
    })),
  },
  { label: 'Attorneys', href: '/attorneys' },
  { label: 'Case Results', href: '/case-results' },
  { label: 'Locations', href: '/locations' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      {/* Top bar */}
      <div className="bg-[#1B2B4B] text-white text-sm py-1.5 px-4 text-center hidden md:block">
        <span>Free Consultations 24/7 — No Fees Unless We Win.</span>
        <a
          href={`tel:${PHONE_RAW}`}
          className="ml-3 font-semibold text-[#C8973A] hover:underline"
        >
          {PHONE}
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Accident Pros"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1B2B4B] rounded-lg hover:bg-gray-50 transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm font-semibold text-[#1B2B4B] hover:bg-gray-50 border-b border-gray-100 mb-1"
                      >
                        All Practice Areas
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-1.5 text-sm text-gray-600 hover:text-[#1B2B4B] hover:bg-gray-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1B2B4B] rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center gap-2 text-[#1B2B4B] font-semibold text-sm hover:text-[#C8973A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-[#C8973A] hover:bg-[#b8872a] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1B2B4B] text-white"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 pb-4">
            <div className="pt-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-sm font-semibold text-[#1B2B4B] hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-5 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-1.5 text-sm text-gray-500 hover:text-[#1B2B4B]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 px-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-[#C8973A] text-white font-semibold py-3 rounded-full"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
