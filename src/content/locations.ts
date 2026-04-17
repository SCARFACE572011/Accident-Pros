import type { Location } from '@/types'

export const locations: Location[] = [
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    address: '1801 Century Park East, Suite 1600, Los Angeles, CA 90067',
    phone: '(877) 899-7767',
    description:
      'Our Los Angeles office is the hub of our California practice. Serving the greater LA metro area, we represent victims of car accidents, truck accidents, rideshare injuries, slip and falls, and more. The Century City location keeps us close to the courts that matter most for our clients.',
    attorneys: ['daniel-pouldar', 'nathan-behnam'],
  },
  {
    slug: 'irvine',
    city: 'Irvine',
    state: 'California',
    stateCode: 'CA',
    address: '400 Spectrum Center Drive, Irvine, CA 92618',
    phone: '(877) 899-7767',
    description:
      'Our Irvine office serves Orange County residents injured in accidents throughout the region. Whether you were hurt on the 405, in a shopping center parking lot, or at work, our team is ready to evaluate your case at no charge.',
    attorneys: ['daniel-pouldar'],
  },
  {
    slug: 'san-francisco',
    city: 'San Francisco',
    state: 'California',
    stateCode: 'CA',
    address: '2 Embarcadero Center, 8th Floor, San Francisco, CA 94111',
    phone: '(877) 899-7767',
    description:
      'Our San Francisco office serves the Bay Area — from the Peninsula to the East Bay. Personal injury cases in Northern California involve unique venues and local courts that our attorneys know well.',
    attorneys: ['daniel-pouldar'],
  },
  {
    slug: 'houston',
    city: 'Houston',
    state: 'Texas',
    stateCode: 'TX',
    address: '708 Main Street, Houston, TX 77002',
    phone: '(877) 899-7767',
    description:
      "Houston's roads are among the most dangerous in the country. Our Houston attorneys have deep experience with Texas personal injury law and are ready to take on the insurance companies on your behalf.",
    attorneys: ['daniel-pouldar'],
  },
  {
    slug: 'dallas',
    city: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
    address: '3500 Oak Lawn Ave #460, Dallas, TX 75219',
    phone: '(877) 899-7767',
    description:
      'Our Dallas office covers the DFW Metroplex. Texas personal injury law is distinct, and our attorneys are licensed and experienced in pursuing maximum recovery under Texas statutes.',
    attorneys: ['daniel-pouldar'],
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'Texas',
    stateCode: 'TX',
    address: '600 Congress Ave, Austin, TX 78701',
    phone: '(877) 899-7767',
    description:
      "Austin's rapid growth has brought heavier traffic and more accidents. Our Austin attorneys are here to help Central Texas residents fight for the compensation they deserve after an injury.",
    attorneys: ['daniel-pouldar'],
  },
  {
    slug: 'charlotte',
    city: 'Charlotte',
    state: 'North Carolina',
    stateCode: 'NC',
    address: '4111 Rose Lake Dr, Suite 7081, Charlotte, NC 28217',
    phone: '(877) 899-7767',
    description:
      "Our Charlotte office extends our reach to the Carolinas. Whether you've been injured in a car accident on I-77, a slip and fall, or a workplace incident, our North Carolina-admitted attorneys are ready to help.",
    attorneys: ['daniel-pouldar'],
  },
]

export const locationsByState = locations.reduce(
  (acc, loc) => {
    if (!acc[loc.state]) acc[loc.state] = []
    acc[loc.state].push(loc)
    return acc
  },
  {} as Record<string, Location[]>
)
