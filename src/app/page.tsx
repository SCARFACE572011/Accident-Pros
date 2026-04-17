import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import CaseResults from '@/components/home/CaseResults'
import PracticeAreas from '@/components/home/PracticeAreas'
import HowItWorks from '@/components/home/HowItWorks'
import WhyUs from '@/components/home/WhyUs'
import AttorneyTeaser from '@/components/home/AttorneyTeaser'
import Testimonials from '@/components/home/Testimonials'
import LocationMap from '@/components/home/LocationMap'
import FAQAccordion from '@/components/home/FAQAccordion'
import FinalCTA from '@/components/home/FinalCTA'
import SchemaOrg from '@/components/seo/SchemaOrg'

export const metadata: Metadata = {
  title: 'Personal Injury Lawyers in CA, TX & NC | Free Consultation',
  description:
    'Accident Pros — Personal injury attorneys serving California, Texas, and North Carolina. Car accidents, truck accidents, slip and fall, wrongful death. No fees unless we win. Call (877) 899-7767.',
  alternates: { canonical: 'https://accidentpros.com' },
  openGraph: {
    title: 'Accident Pros | Personal Injury Lawyers',
    description: 'We fight for injured clients in CA, TX & NC. No fees unless we win.',
    url: 'https://accidentpros.com',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaOrg type="home" />
      <Hero />
      <TrustBar />
      <CaseResults />
      <PracticeAreas />
      <HowItWorks />
      <WhyUs />
      <AttorneyTeaser />
      <Testimonials />
      <LocationMap />
      <FAQAccordion />
      <FinalCTA />
    </>
  )
}
