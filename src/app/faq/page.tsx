'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTABlock from '@/components/shared/CTABlock'
import { faqs } from '@/content/faqs'

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category ?? 'General')))]

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null)
  const [category, setCategory] = useState('All')

  const filtered = category === 'All' ? faqs : faqs.filter((f) => f.category === category)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        headline="Frequently Asked Questions"
        subheadline="Clear answers to common questions about personal injury cases, our process, and your rights."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  category === cat
                    ? 'bg-[#1B2B4B] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-[#F8F9FB] hover:bg-gray-100 transition-colors"
                  aria-expanded={open === faq.id}
                >
                  <span className="font-semibold text-[#1B2B4B] text-sm pr-4">
                    {faq.question}
                  </span>
                  {open === faq.id ? (
                    <Minus className="w-4 h-4 text-[#C8973A] flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {open === faq.id && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
