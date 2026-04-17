import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { FIRM_NAME } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Legal Disclaimer | Accident Pros',
  description: 'Legal disclaimer for accidentpros.com. Attorney advertising. Past results do not guarantee similar outcomes.',
  alternates: { canonical: 'https://accidentpros.com/disclaimer' },
}

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        headline="Legal Disclaimer"
        breadcrumbs={[{ label: 'Disclaimer' }]}
      />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-headings:text-[#1B2B4B] prose-headings:font-bold max-w-none">
          <h2>Attorney Advertising</h2>
          <p>This website is attorney advertising. The information on this website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting {FIRM_NAME} does not create an attorney-client relationship.</p>

          <h2>No Guarantee of Results</h2>
          <p>Past results described on this website do not guarantee similar outcomes in future cases. Results depend upon the specific legal and factual circumstances of each matter, including but not limited to liability, damages, jurisdiction, venue, and applicable law.</p>

          <h2>Jurisdictional Limitations</h2>
          <p>{FIRM_NAME} attorneys are licensed in California, Texas, and North Carolina. Nothing on this website should be construed as an offer to represent clients in jurisdictions where our attorneys are not licensed, except where permissible through pro hac vice admission or referral arrangements.</p>

          <h2>No Attorney-Client Relationship</h2>
          <p>Submitting a contact form, calling our offices, or emailing us does not create an attorney-client relationship. An attorney-client relationship is formed only upon a written engagement agreement signed by both parties.</p>

          <h2>Contingency Fee Disclosure</h2>
          <p>References to &quot;no fees unless we win&quot; refer to attorney&apos;s fees only. Clients may still be responsible for case costs and expenses in the event of an unsuccessful outcome, depending on the terms of their individual fee agreement.</p>
        </div>
      </section>
    </>
  )
}
