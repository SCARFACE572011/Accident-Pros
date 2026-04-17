import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import SchemaOrg from '@/components/seo/SchemaOrg'
import CTABlock from '@/components/shared/CTABlock'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav'
import { getBlogPost, getAllBlogSlugs } from '@/lib/mdx'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title as string,
    description: post.frontmatter.excerpt as string,
    alternates: { canonical: `https://accidentpros.com/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <>
      <SchemaOrg
        type="article"
        data={{
          title: frontmatter.title,
          publishedAt: frontmatter.publishedAt,
          slug,
        }}
      />
      <div className="bg-[#1B2B4B] pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav
            items={[
              { label: 'Blog', href: '/blog' },
              { label: frontmatter.title as string },
            ]}
          />
          <h1 className="mt-5 text-3xl md:text-4xl font-black text-white leading-tight text-balance">
            {frontmatter.title as string}
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-blue-200/70">
            <span className="text-[#C8973A] font-semibold">{frontmatter.category as string}</span>
            <span>·</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{frontmatter.readTime as number} min read</span>
            <span>·</span>
            <span>{new Date(frontmatter.publishedAt as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article className="prose prose-sm max-w-none prose-headings:font-black prose-headings:text-[#1B2B4B] prose-a:text-[#C8973A] prose-strong:text-[#1B2B4B]">
            <MDXRemote source={content} />
          </article>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2B4B] hover:text-[#C8973A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
