import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { FIRM_NAME, EMAIL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Privacy Policy | Accident Pros',
  description: 'Privacy policy for accidentpros.com. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://accidentpros.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        headline="Privacy Policy"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-headings:text-[#1B2B4B] prose-headings:font-bold max-w-none">
          <p className="text-gray-500 text-sm">Last updated: January 1, 2024</p>

          <h2>Information We Collect</h2>
          <p>When you contact us through our website, we collect information you provide directly, including your name, phone number, email address, and information about your case. We also collect standard web analytics data (pages visited, browser type, IP address) through third-party analytics tools.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to respond to your inquiry, evaluate your legal matter, and communicate with you about our services. We do not sell your personal information to third parties.</p>

          <h2>SMS and Communication Consent</h2>
          <p>By providing your phone number, you may consent to receive text messages from {FIRM_NAME} regarding your case inquiry. Message and data rates may apply. Text messaging originator opt-in data and consent will not be shared with third parties except as required by service providers. You may opt out at any time by replying STOP.</p>

          <h2>Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information. However, no internet transmission is completely secure.</p>

          <h2>Third-Party Services</h2>
          <p>Our website may use third-party services for analytics and form processing. These services have their own privacy policies.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this privacy policy, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </div>
      </section>
    </>
  )
}
