import type { FAQ } from '@/types'

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How much does it cost to hire Accident Pros?',
    answer:
      "Nothing upfront — ever. We work on a contingency fee basis, which means you pay absolutely nothing unless we win your case. Our fee comes as a percentage of the recovery we secure for you. If we don't win, you owe us nothing.",
    category: 'Fees',
  },
  {
    id: '2',
    question: 'What should I do immediately after an accident?',
    answer:
      'First, make sure you and anyone else involved is safe and call 911 if there are injuries. Document the scene with photos if possible. Exchange information with the other party. Do NOT admit fault or make statements to the other party\'s insurance. Then call us — a free case review costs you nothing and can protect your rights from day one.',
    category: 'Process',
  },
  {
    id: '3',
    question: 'How long do I have to file a personal injury claim?',
    answer:
      'The statute of limitations varies by state. In California, you generally have 2 years from the date of injury. In Texas, it\'s also 2 years. In North Carolina, 3 years. There are exceptions — claims against government entities can have much shorter windows (as little as 6 months). Do not wait. Contact us immediately to protect your right to recover.',
    category: 'Legal',
  },
  {
    id: '4',
    question: 'How much is my personal injury case worth?',
    answer:
      'Every case is different. Compensation can include medical expenses (past and future), lost wages, reduced earning capacity, pain and suffering, property damage, and in some cases, punitive damages. The best way to understand what your case may be worth is to schedule a free case evaluation with our team.',
    category: 'Compensation',
  },
  {
    id: '5',
    question: 'What if I was partially at fault for the accident?',
    answer:
      'You may still be able to recover compensation. California and Texas use a "comparative fault" system — your recovery is reduced by your percentage of fault, but you can still collect if you were less than 100% responsible. North Carolina uses "contributory negligence," which is stricter. Our attorneys will assess your specific situation.',
    category: 'Legal',
  },
  {
    id: '6',
    question: 'Do I have to go to court?',
    answer:
      'Most personal injury cases settle before trial. However, we prepare every case as if it will go to trial, because that preparation is what gets our clients the best settlements. If the insurance company refuses to offer fair compensation, we will take your case to court.',
    category: 'Process',
  },
  {
    id: '7',
    question: 'How long will my case take?',
    answer:
      'Settlement timelines vary significantly. Minor injury cases may resolve in a few months. Complex cases involving severe injuries, multiple parties, or litigation can take one to two years or more. We will keep you informed at every stage and work efficiently to maximize your recovery in as short a time as possible.',
    category: 'Process',
  },
  {
    id: '8',
    question: 'Can I handle my personal injury claim without a lawyer?',
    answer:
      'Technically, yes. But insurance companies employ teams of adjusters and lawyers whose job is to minimize what they pay you. Without legal representation, most injured people accept far less than they deserve. Our clients consistently receive more — often several times more — than unrepresented claimants.',
    category: 'General',
  },
  {
    id: '9',
    question: 'What types of cases does Accident Pros handle?',
    answer:
      'We handle a wide range of personal injury cases including: car accidents, truck accidents, motorcycle accidents, rideshare accidents (Uber/Lyft), pedestrian accidents, slip and fall, premises liability, wrongful death, traumatic brain injury, spinal cord injury, dog bites, products liability, construction accidents, aviation accidents, and more. If you\'re not sure whether your situation qualifies, call us — the consultation is free.',
    category: 'Services',
  },
  {
    id: '10',
    question: 'What states do you practice in?',
    answer:
      'We are licensed and actively practice in California, Texas, and North Carolina, with offices in Los Angeles, Irvine, San Francisco, Houston, Dallas, Austin, and Charlotte. We can often assist with cases in other jurisdictions through our network of affiliated counsel.',
    category: 'Services',
  },
  {
    id: '11',
    question: 'What if the at-fault driver has no insurance or minimal insurance?',
    answer:
      'We can pursue compensation through your own Uninsured/Underinsured Motorist (UM/UIM) coverage if you have it. We can also explore other liable parties — vehicle owners, employers, government entities — depending on the circumstances. We leave no avenue unexplored.',
    category: 'Legal',
  },
  {
    id: '12',
    question: 'Do you handle cases involving rideshare companies like Uber or Lyft?',
    answer:
      'Yes. Rideshare accident cases are complex because multiple insurance policies may be involved depending on what the driver was doing at the time. We have specific experience navigating Uber and Lyft\'s insurance structures to maximize your recovery.',
    category: 'Services',
  },
  {
    id: '13',
    question: 'What happens during a free case evaluation?',
    answer:
      'You\'ll speak with a member of our legal team — not a call center representative — who will listen to the details of your situation, explain your rights, and give you an honest assessment of your case\'s strength and potential value. There\'s no pressure, no obligation, and no cost.',
    category: 'Process',
  },
  {
    id: '14',
    question: 'Can you help me get medical treatment even if I don\'t have insurance?',
    answer:
      'Yes. We work with a network of qualified medical providers who treat personal injury clients on a lien basis — meaning they are paid from your settlement at the conclusion of the case. You get the care you need now, without worrying about upfront medical costs.',
    category: 'Services',
  },
  {
    id: '15',
    question: 'How do I get started?',
    answer:
      'Simply call (877) 899-7767 or fill out our contact form. We\'re available 24/7. One of our team members will reach out promptly to schedule your free, no-obligation case evaluation. The sooner you contact us, the better we can protect your rights and preserve evidence.',
    category: 'Process',
  },
]

export const featuredFaqs = faqs.slice(0, 6)
