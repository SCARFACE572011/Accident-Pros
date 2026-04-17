import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Scale, GraduationCap, Award, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import SchemaOrg from '@/components/seo/SchemaOrg'
import { attorneys } from '@/content/attorneys'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const attorney = attorneys.find((a) => a.slug === slug)
  if (!attorney) return {}
  return {
    title: `${attorney.name} | ${attorney.title}`,
    description: `${attorney.bio.slice(0, 155)}...`,
    alternates: { canonical: `https://accidentpros.com/attorneys/${slug}` },
  }
}

export default async function AttorneyPage({ params }: Props) {
  const { slug } = await params
  const attorney = attorneys.find((a) => a.slug === slug)
  if (!attorney) notFound()

  return (
    <>
      <SchemaOrg
        type="attorney"
        data={{ name: attorney.name, title: attorney.title, slug: attorney.slug }}
      />
      <PageHero
        headline={attorney.name}
        subheadline={attorney.title}
        breadcrumbs={[
          { label: 'Attorneys', href: '/attorneys' },
          { label: attorney.name },
        ]}
      />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Photo sidebar */}
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] rounded-2xl bg-[#1B2B4B]/5 overflow-hidden shadow-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scale className="w-20 h-20 text-[#1B2B4B]/10" />
                </div>
                {attorney.photo && (
                  <Image
                    src={attorney.photo}
                    alt={attorney.name}
                    fill
                    className="object-cover object-top"
                  />
                )}
              </div>

              {/* Specializations */}
              <div className="mt-5">
                <h3 className="font-bold text-[#1B2B4B] text-sm mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {attorney.specializations.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#1B2B4B]/8 text-[#1B2B4B] px-2.5 py-1 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">{attorney.bio}</p>
              </div>

              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-[#1B2B4B] mb-3">
                  <GraduationCap className="w-4 h-4 text-[#C8973A]" />
                  Education
                </h3>
                <ul className="space-y-1.5">
                  {attorney.education.map((e) => (
                    <li key={e} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8973A] mt-0.5 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar Admissions */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-[#1B2B4B] mb-3">
                  <Scale className="w-4 h-4 text-[#C8973A]" />
                  Bar Admissions
                </h3>
                <ul className="space-y-1.5">
                  {attorney.barAdmissions.map((b) => (
                    <li key={b} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8973A] mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affiliations */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-[#1B2B4B] mb-3">
                  <Award className="w-4 h-4 text-[#C8973A]" />
                  Professional Affiliations
                </h3>
                <ul className="space-y-1.5">
                  {attorney.affiliations.map((a) => (
                    <li key={a} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8973A] mt-0.5 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notable results */}
              {attorney.notableResults && attorney.notableResults.length > 0 && (
                <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#1B2B4B] mb-3 text-sm">Selected Results</h3>
                  <ul className="space-y-2">
                    {attorney.notableResults.map((r) => (
                      <li key={r} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-[#C8973A] font-bold flex-shrink-0">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 mt-3">
                    Past results do not guarantee similar outcomes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
