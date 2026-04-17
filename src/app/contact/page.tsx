import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import ConsultationForm from '@/components/shared/ConsultationForm'
import { locations } from '@/content/locations'
import { PHONE, EMAIL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact Us | Free Consultation | Accident Pros',
  description:
    'Contact Accident Pros for a free, confidential personal injury consultation. Available 24/7. No fees unless we win. Call (877) 899-7767.',
  alternates: { canonical: 'https://accidentpros.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Get Your Free Case Review Today."
        subheadline="No obligation. No fees unless we win. We'll respond within one business hour during business hours, or the next morning if after hours."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: info */}
            <div>
              <h2 className="text-2xl font-black text-[#1B2B4B] mb-6">
                How to Reach Us
              </h2>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:8778997767"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-100 hover:border-[#1B2B4B] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1B2B4B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Call or text us</p>
                    <p className="font-bold text-[#1B2B4B] group-hover:text-[#C8973A] transition-colors">
                      {PHONE}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-100 hover:border-[#1B2B4B] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1B2B4B] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email us</p>
                    <p className="font-bold text-[#1B2B4B] group-hover:text-[#C8973A] transition-colors">
                      {EMAIL}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1B2B4B] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Availability</p>
                    <p className="font-bold text-[#1B2B4B]">24/7 — Always available</p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <h3 className="font-bold text-[#1B2B4B] mb-4">Our Offices</h3>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <div key={loc.slug} className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[#C8973A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1B2B4B]">{loc.city}, {loc.stateCode}</p>
                      <p className="text-gray-500 text-xs">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h2 className="text-2xl font-black text-[#1B2B4B] mb-6">
                Start Your Free Case Review
              </h2>
              <ConsultationForm variant="hero" />
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                By submitting this form, you consent to being contacted by Accident Pros regarding your case. We will not share your information with third parties. This form does not create an attorney-client relationship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
