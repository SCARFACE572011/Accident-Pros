import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { FIRM_NAME, EMAIL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Terms of Use | Accident Pros',
  description: 'Terms of use for accidentpros.com.',
  alternates: { canonical: 'https://accidentpros.com/terms' },
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        headline="Terms of Use"
        breadcrumbs={[{ label: 'Terms of Use' }]}
      />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-headings:text-[#1B2B4B] prose-headings:font-bold max-w-none">
          <p className="text-gray-500 text-sm">Last updated: January 1, 2024</p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing accidentpros.com, you agree to these terms of use. If you do not agree, please do not use this website.</p>

          <h2>Use of Website</h2>
          <p>This website is provided for informational purposes only. You may not use this website for any unlawful purpose or in any way that violates these terms.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos, and images — is the property of {FIRM_NAME} and is protected by copyright law. You may not reproduce, distribute, or use any content without written permission.</p>

          <h2>Limitation of Liability</h2>
          <p>{FIRM_NAME} is not liable for any damages arising from your use of this website or reliance on information contained herein. The information on this site is provided &quot;as is&quot; without warranty of any kind.</p>

          <h2>External Links</h2>
          <p>This website may contain links to third-party websites. We are not responsible for the content or practices of those sites.</p>

          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of updated terms.</p>

          <h2>Contact</h2>
          <p>Questions about these terms? Contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </div>
      </section>
    </>
  )
}
