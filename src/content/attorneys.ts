import type { Attorney } from '@/types'

export const attorneys: Attorney[] = [
  {
    slug: 'daniel-pouldar',
    name: 'Daniel S. Pouldar',
    title: 'Founding Partner',
    photo: '/images/attorneys/pouldar.webp',
    education: ['Loyola Law School (J.D., 2016)'],
    barAdmissions: [
      'State Bar of California',
      'State Bar of Texas',
      'State Bar of North Carolina',
      'U.S. District Court, Central District of California',
    ],
    affiliations: [
      'Beverly Hills Bar Association',
      'Los Angeles County Bar Association',
      'Texas Trial Lawyers Association',
    ],
    bio: 'Daniel S. Pouldar founded Accident Pros with a singular mission: to give every injured client the same aggressive, resourceful representation that corporations give themselves. With bar admissions in California, Texas, and North Carolina, Daniel brings a rare multi-state reach to personal injury and catastrophic injury cases. He has aided in securing tens of millions of dollars in settlements and verdicts for his clients, including over $15 million in a complex case involving a professional athlete. Daniel is relentless at the negotiating table and unafraid to take cases to trial.',
    specializations: [
      'Catastrophic Personal Injury',
      'Motor Vehicle Accidents',
      'Complex Litigation',
      'Wrongful Death',
    ],
    notableResults: [
      '$15,000,000 — Complex fraud and injury case (professional athlete)',
      '$1,000,000 — Spinal cord injury settlement',
    ],
  },
  {
    slug: 'nathan-behnam',
    name: 'Nathan Behnam',
    title: 'Partner',
    photo: '/images/attorneys/behnam.webp',
    education: ['Juris Doctor — [Verification Needed]'],
    barAdmissions: ['State Bar of California — [Additional Admissions: Verification Needed]'],
    affiliations: ['California State Bar', 'Los Angeles County Bar Association'],
    bio: 'Nathan Behnam launched his own practice within a year of passing the bar — a testament to his confidence and drive. After cutting his teeth in business litigation, Nathan pivoted to plaintiff-side personal injury work because he believes that individuals deserve the same legal firepower as corporations. He has secured significant wins in both settlement and motion practice, including a $975,000 motor vehicle accident settlement and successful summary adjudication in employment matters exceeding $2 million in disputed value.',
    specializations: [
      'Motor Vehicle Accidents',
      'Business Litigation',
      'Employment Disputes',
      'Personal Injury',
    ],
    notableResults: [
      '$975,000 — Motor vehicle accident settlement',
      'Summary judgment — Breach of contract / emotional distress ($5M+ demand)',
      'Summary adjudication — Employment dispute ($2M+ demand)',
    ],
  },
]
