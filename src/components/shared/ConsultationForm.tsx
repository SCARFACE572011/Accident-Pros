'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, Loader2 } from 'lucide-react'
import { track } from '@vercel/analytics'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  caseType: z.string().min(1, 'Please select a case type'),
  honeypot: z.string().max(0),
})

type FormData = z.infer<typeof schema>

const CASE_TYPES = [
  'Car Accident',
  'Truck Accident',
  'Motorcycle Accident',
  'Rideshare Accident (Uber/Lyft)',
  'Pedestrian Accident',
  'Slip & Fall',
  'Premises Liability',
  'Wrongful Death',
  'Traumatic Brain Injury',
  'Dog Bite',
  'Products Liability',
  'Construction Accident',
  'Other',
]

interface Props {
  variant?: 'hero' | 'inline' | 'sidebar'
  className?: string
}

export default function ConsultationForm({ variant = 'inline', className }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [started, setStarted] = useState(false)

  const handleStart = () => {
    if (!started) {
      setStarted(true)
      track('form_start')
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    track('form_submit', { caseType: data.caseType })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
        window.location.href = '/thank-you'
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isHero = variant === 'hero'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'w-full',
        isHero
          ? 'bg-white rounded-2xl p-6 shadow-2xl'
          : 'bg-white rounded-xl p-6 shadow-lg border border-gray-100',
        className
      )}
      noValidate
    >
      {isHero && (
        <p className="text-[#1B2B4B] font-bold text-lg mb-4">
          Get Your Free Case Review
        </p>
      )}

      {/* Honeypot — hidden from real users */}
      <input
        {...register('honeypot')}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        aria-hidden="true"
      />

      <div className="space-y-3">
        <div>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Your Name"
            autoComplete="name"
            onFocus={handleStart}
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C8973A] focus:bg-white transition-all',
              errors.name ? 'border-red-400' : 'border-gray-200'
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            placeholder="Phone Number"
            autoComplete="tel"
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C8973A] focus:bg-white transition-all',
              errors.phone ? 'border-red-400' : 'border-gray-200'
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="caseType" className="sr-only">
            Type of Case
          </label>
          <select
            {...register('caseType')}
            id="caseType"
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C8973A] focus:bg-white transition-all text-gray-700',
              errors.caseType ? 'border-red-400' : 'border-gray-200'
            )}
          >
            <option value="">Type of Case</option>
            {CASE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.caseType && (
            <p className="text-red-500 text-xs mt-1">{errors.caseType.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-[#C8973A] hover:bg-[#b8872a] disabled:opacity-70 text-white font-bold text-sm py-3.5 rounded-xl transition-all"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get My Free Case Review
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-xs text-center">
            Something went wrong. Please call us directly at (877) 899-7767.
          </p>
        )}
      </div>

      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
        No fees unless we win. By submitting, you consent to being contacted by our firm regarding your case. We respect your privacy.
      </p>
    </form>
  )
}
