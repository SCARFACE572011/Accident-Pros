import { Globe2, DollarSign, Stethoscope, Gavel } from 'lucide-react'

const reasons = [
  {
    icon: Globe2,
    title: 'Multi-State Reach',
    description:
      'Licensed in California, Texas, and North Carolina with 7 offices. Wherever you are, we\'re nearby — and our attorneys know the local courts.',
  },
  {
    icon: DollarSign,
    title: 'Zero Upfront Cost',
    description:
      'You never pay us out of pocket. Our fee is a percentage of your recovery, collected only when we win your case.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Access',
    description:
      'No insurance? No problem. We connect clients with qualified doctors and specialists who provide care now and are paid from the settlement later.',
  },
  {
    icon: Gavel,
    title: 'Trial-Ready Firm',
    description:
      'We prepare every case as if it will go to trial. Insurance companies know we\'ll follow through — and that posture gets better settlements.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-2">
            Why Accident Pros
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B2B4B] leading-tight">
            We&apos;re Built Different.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="group">
              <div className="w-12 h-12 rounded-2xl bg-[#1B2B4B] flex items-center justify-center mb-4 group-hover:bg-[#C8973A] transition-colors duration-200">
                <reason.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-[#1B2B4B] mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
