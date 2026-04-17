import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE, PHONE_RAW, EMAIL, FIRM_NAME } from '@/lib/utils'

const practiceLinks = [
  { label: 'Car Accidents', href: '/practice-areas/car-accidents' },
  { label: 'Truck Accidents', href: '/practice-areas/truck-accidents' },
  { label: 'Motorcycle Accidents', href: '/practice-areas/motorcycle-accidents' },
  { label: 'Rideshare Accidents', href: '/practice-areas/rideshare-accidents' },
  { label: 'Slip & Fall', href: '/practice-areas/slip-and-fall' },
  { label: 'Wrongful Death', href: '/practice-areas/wrongful-death' },
  { label: 'Brain Injury', href: '/practice-areas/traumatic-brain-injury' },
  { label: 'All Practice Areas', href: '/practice-areas' },
]

const firmLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Attorneys', href: '/attorneys' },
  { label: 'Case Results', href: '/case-results' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Locations', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const offices = [
  { city: 'Los Angeles, CA', href: '/locations/los-angeles' },
  { city: 'Irvine, CA', href: '/locations/irvine' },
  { city: 'San Francisco, CA', href: '/locations/san-francisco' },
  { city: 'Houston, TX', href: '/locations/houston' },
  { city: 'Dallas, TX', href: '/locations/dallas' },
  { city: 'Austin, TX', href: '/locations/austin' },
  { city: 'Charlotte, NC', href: '/locations/charlotte' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111D33] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo.png"
                alt="Accident Pros"
                width={160}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Personal injury attorneys serving California, Texas, and North Carolina. No fees unless we win.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#C8973A]/20 flex items-center justify-center group-hover:bg-[#C8973A]/30 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C8973A]" />
                </div>
                <span>{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#C8973A]/20 flex items-center justify-center group-hover:bg-[#C8973A]/30 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C8973A]" />
                </div>
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-[#C8973A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8973A]" />
                </div>
                <span>7 offices across CA, TX & NC</span>
              </div>
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Firm
            </h4>
            <ul className="space-y-2.5">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Office Locations
            </h4>
            <ul className="space-y-2.5">
              {offices.map((office) => (
                <li key={office.href}>
                  <Link
                    href={office.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {office.city}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-[#1B2B4B]/60 rounded-xl">
              <p className="text-sm font-semibold text-white">Available 24/7</p>
              <p className="text-xs text-gray-400 mt-1">Call anytime — we answer.</p>
              <a
                href={`tel:${PHONE_RAW}`}
                className="mt-3 inline-block bg-[#C8973A] hover:bg-[#b8872a] text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-600 leading-relaxed max-w-4xl">
            <strong className="text-gray-500">Attorney Advertising.</strong> The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this website. Past results do not guarantee similar outcomes — results depend on the specific facts and legal circumstances of each matter. {FIRM_NAME} is licensed in California, Texas, and North Carolina. Do not rely on this information without seeking advice from a qualified attorney licensed in your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  )
}
