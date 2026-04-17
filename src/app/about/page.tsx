import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Scale, Globe2, Users, Trophy } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import SchemaOrg from '@/components/seo/SchemaOrg'

export const metadata: Metadata = {
  title: 'About Accident Pros | Personal Injury Law Firm',
  description:
    'Learn about Accident Pros — a personal injury firm built to fight for injured clients in California, Texas, and North Carolina. No fees unless we win.',
  alternates: { canonical: 'https://accidentpros.com/about' },
}

const values = [
  {
    icon: Scale,
    title: 'Relentless Advocacy',
    description:
      'We prepare every case as if it will go to trial. That posture — and that reputation — is what compels insurance companies to settle fairly.',
  },
  {
    icon: Globe2,
    title: 'Multi-State Reach',
    description:
      'Licensed in California, Texas, and North Carolina, with 7 offices and real local knowledge in each state\'s courts.',
  },
  {
    icon: Users,
    title: 'Client-First Service',
    description:
      'We arrange medical care, rental cars, and transportation so you can focus on recovering while we handle everything else.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description:
      'Tens of millions recovered for injured clients, including multi-million dollar verdicts and settlements across multiple practice areas.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SchemaOrg type="home" />
      <PageHero
        headline="A Different Kind of Injury Firm."
        subheadline="Built by lawyers who believe every injured person deserves the same quality of representation that corporations give themselves."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight mb-6">
                We&apos;re Here Because Injured People Deserve Better.
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Accident Pros was founded with a straightforward mission: to give every injured client access to the kind of aggressive, resourceful legal representation that large corporations and insurance companies give themselves every day.
                </p>
                <p>
                  Most people who are injured in accidents have never dealt with an insurance company&apos;s legal team before. Insurance adjusters have one job: minimize what the company pays you. Without experienced legal counsel, most people accept far less than they deserve — often without even knowing it.
                </p>
                <p>
                  Our attorneys have seen this pattern enough times to know how to counter it. We investigate thoroughly, document comprehensively, and negotiate with the kind of conviction that comes from being fully prepared to take every case to trial if necessary.
                </p>
                <p>
                  We operate on a contingency fee basis — meaning you never pay us anything upfront, and you only pay us if we win your case. We believe this alignment of incentives is how a law firm should operate.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '$87M+', label: 'Recovered for clients' },
                { value: '9', label: 'Office locations' },
                { value: '3', label: 'States licensed' },
                { value: '24/7', label: 'Availability' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100"
                >
                  <p className="text-3xl font-black text-[#1B2B4B]">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1B2B4B]">What Sets Us Apart</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#1B2B4B] flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[#1B2B4B] mb-2 text-sm">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No fee promise */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#1B2B4B] mb-4">
            Our Promise: No Win, No Fee.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            We take on the full financial risk of your case. If we don&apos;t win, you don&apos;t owe us attorney&apos;s fees or costs. This isn&apos;t just a business model — it&apos;s how we stay accountable to our clients.
          </p>
          <Link
            href="/attorneys"
            className="inline-flex items-center gap-2 bg-[#1B2B4B] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#243459] transition-colors text-sm"
          >
            Meet Our Attorneys <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
