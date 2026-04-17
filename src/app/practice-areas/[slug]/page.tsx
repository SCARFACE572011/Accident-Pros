import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import ConsultationForm from '@/components/shared/ConsultationForm'
import SchemaOrg from '@/components/seo/SchemaOrg'
import { practiceAreas } from '@/content/practice-areas-data'
import { getPracticeAreaContent, getAllPracticeAreaSlugs } from '@/lib/mdx'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPracticeAreaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = practiceAreas.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://accidentpros.com/practice-areas/${slug}` },
  }
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params
  const area = practiceAreas.find((a) => a.slug === slug)
  if (!area) notFound()

  const mdxData = getPracticeAreaContent(slug)
  const relatedAreas = area.relatedAreas
    ?.map((s) => practiceAreas.find((a) => a.slug === s))
    .filter(Boolean) ?? []

  return (
    <>
      <SchemaOrg
        type="practiceArea"
        data={{ serviceType: area.title, slug: area.slug }}
      />
      <PageHero
        headline={area.heroHeadline}
        subheadline={area.heroSubheadline}
        breadcrumbs={[
          { label: 'Practice Areas', href: '/practice-areas' },
          { label: area.shortTitle },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:8778997767"
            className="inline-flex items-center gap-2 bg-[#C8973A] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#b8872a] transition-colors"
          >
            Call (877) 899-7767
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/20 transition-colors"
          >
            Free Case Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageHero>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              {mdxData && (
                <article className="prose prose-sm max-w-none prose-headings:font-black prose-headings:text-[#1B2B4B] prose-a:text-[#C8973A] prose-strong:text-[#1B2B4B]">
                  <MDXRemote source={mdxData.content} />
                </article>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ConsultationForm variant="sidebar" />

              {/* Related areas */}
              {relatedAreas.length > 0 && (
                <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#1B2B4B] text-sm mb-3">Related Practice Areas</h3>
                  <ul className="space-y-2">
                    {relatedAreas.map((rel) => rel && (
                      <li key={rel.slug}>
                        <Link
                          href={`/practice-areas/${rel.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1B2B4B] transition-colors"
                        >
                          <ArrowRight className="w-3 h-3 text-[#C8973A]" />
                          {rel.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* No fee promise */}
              <div className="bg-[#1B2B4B] rounded-2xl p-5 text-white">
                <p className="font-bold text-sm mb-2">No Win, No Fee.</p>
                <p className="text-blue-200/70 text-xs leading-relaxed">
                  You pay nothing unless we win your case. Our fee is a percentage of your recovery only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
