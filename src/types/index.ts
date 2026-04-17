export interface Attorney {
  slug: string
  name: string
  title: string
  photo: string
  education: string[]
  barAdmissions: string[]
  affiliations: string[]
  bio: string
  specializations: string[]
  notableResults?: string[]
}

export interface CaseResult {
  id: string
  amount: number
  offerAmount?: number
  type: string
  injury?: string
  location?: string
  year?: number
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  photo?: string
  quote: string
  caseType: string
  rating: number
  location?: string
}

export interface Location {
  slug: string
  city: string
  state: string
  stateCode: string
  address: string
  phone: string
  mapUrl?: string
  description: string
  attorneys?: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface PracticeArea {
  slug: string
  title: string
  shortTitle: string
  icon: string
  description: string
  heroHeadline: string
  heroSubheadline: string
  metaTitle: string
  metaDescription: string
  relatedAreas?: string[]
  content?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  category: string
  readTime: number
  content?: string
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}
