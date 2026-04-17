'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { featuredFaqs } from '@/content/faqs'

export default function FAQAccordion() {
  const [open, setOpen] = useState<string | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: featuredFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <section className="bg-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight">
            Common Questions Answered
          </h2>
        </div>

        <div className="space-y-3">
          {featuredFaqs.map((faq) => (
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

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2B4B] hover:text-[#C8973A] transition-colors"
          >
            View All FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
