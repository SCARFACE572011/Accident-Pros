import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import { getAllBlogPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Personal Injury Blog & Resources | Accident Pros',
  description:
    'Legal guides, accident tips, and personal injury resources from the attorneys at Accident Pros. Serving California, Texas, and North Carolina.',
  alternates: { canonical: 'https://accidentpros.com/blog' },
}

export default function BlogPage() {
  const posts = getAllBlogPosts() as any[]

  return (
    <>
      <PageHero
        headline="Resources & Legal Guides"
        subheadline="Practical information to help you understand your rights and protect your recovery after an injury."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-16">Coming soon — check back for legal guides and resources.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {posts.map((post: any) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-2xl border border-gray-100 bg-[#F8F9FB] hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-[#C8973A] font-semibold mb-3">
                    <span>{post.category}</span>
                    <span className="text-gray-300">·</span>
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-400">{post.readTime} min read</span>
                  </div>
                  <h2 className="font-bold text-[#1B2B4B] mb-2 group-hover:text-[#C8973A] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#C8973A]">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABlock />
    </>
  )
}
