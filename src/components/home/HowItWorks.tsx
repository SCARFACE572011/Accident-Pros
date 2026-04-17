import ConsultationForm from '@/components/shared/ConsultationForm'

const steps = [
  {
    number: '01',
    title: 'Free Case Review',
    description:
      'Call us or submit the form. We\'ll review your case at no cost and explain your rights — no pressure, no obligation.',
  },
  {
    number: '02',
    title: 'We Investigate',
    description:
      'Our team gathers evidence, medical records, witness statements, and expert opinions to build the strongest possible case.',
  },
  {
    number: '03',
    title: 'We Negotiate Hard',
    description:
      'We present a comprehensive demand to the insurance company and fight for maximum value — refusing lowball offers.',
  },
  {
    number: '04',
    title: 'You Get Paid',
    description:
      'Most cases settle. When they don\'t, we go to trial. Either way, we don\'t get paid until you do.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#1B2B4B] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: steps */}
          <div>
            <p className="text-[#C8973A] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-10">
              Simple. Transparent.
              <br />
              Built Around You.
            </h2>

            <div className="space-y-7">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8973A]/20 border border-[#C8973A]/40 flex items-center justify-center">
                    <span className="text-[#C8973A] font-black text-xs">{step.number}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{step.title}</p>
                    <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                    {i < steps.length - 1 && (
                      <div className="w-px h-5 bg-white/10 ml-0 mt-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ConsultationForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
