interface Props {
  type: 'home' | 'location' | 'practiceArea' | 'faq' | 'article' | 'attorney'
  data?: Record<string, unknown>
}

const BASE_URL = 'https://accidentpros.com'
const FIRM_NAME = 'Accident Pros'
const PHONE = '+18778997767'
const EMAIL = 'info@accidentpros.com'

function legalServiceBase(serviceType?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: serviceType ? `${FIRM_NAME} — ${serviceType}` : FIRM_NAME,
    url: BASE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: 'Free consultation. Contingency fee basis.',
    description:
      'Personal injury law firm serving California, Texas, and North Carolina. No fees unless we win.',
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'State', name: 'Texas' },
      { '@type': 'State', name: 'North Carolina' },
    ],
  }
}

export default function SchemaOrg({ type, data = {} }: Props) {
  let schema: object

  switch (type) {
    case 'home':
      schema = {
        ...legalServiceBase(),
        '@type': ['LegalService', 'LocalBusiness'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1801 Century Park East, Suite 1600',
          addressLocality: 'Los Angeles',
          addressRegion: 'CA',
          postalCode: '90067',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 34.0558,
          longitude: -118.4168,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        sameAs: [`https://www.facebook.com/accidentpros`],
      }
      break

    case 'location':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${FIRM_NAME} — ${data.city} Office`,
        url: `${BASE_URL}/locations/${data.slug}`,
        telephone: PHONE,
        email: EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.streetAddress,
          addressLocality: data.city,
          addressRegion: data.stateCode,
          addressCountry: 'US',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      }
      break

    case 'practiceArea':
      schema = {
        ...legalServiceBase(data.serviceType as string),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/practice-areas/${data.slug}`,
        },
      }
      break

    case 'faq':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: (data.faqs as { question: string; answer: string }[]).map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
      break

    case 'article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        datePublished: data.publishedAt,
        publisher: {
          '@type': 'Organization',
          name: FIRM_NAME,
          url: BASE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/blog/${data.slug}`,
        },
      }
      break

    case 'attorney':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: data.name,
        jobTitle: data.title,
        worksFor: {
          '@type': 'LegalService',
          name: FIRM_NAME,
          url: BASE_URL,
        },
        url: `${BASE_URL}/attorneys/${data.slug}`,
      }
      break

    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
