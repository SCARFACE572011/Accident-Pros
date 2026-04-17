import { TrendingUp } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import type { CaseResult } from '@/types'

interface Props {
  result: CaseResult
  showComparison?: boolean
}

export default function CaseResultCard({ result, showComparison = true }: Props) {
  const multiplier =
    result.offerAmount && result.offerAmount > 0
      ? (result.amount / result.offerAmount).toFixed(1)
      : null

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
      {/* Amount */}
      <div className="mb-3">
        <p className="text-3xl font-black text-[#1B2B4B]">
          {formatCurrency(result.amount)}
        </p>
        <p className="text-sm font-semibold text-[#C8973A] mt-0.5">{result.type}</p>
      </div>

      {/* Comparison */}
      {showComparison && result.offerAmount && (
        <div className="flex items-center gap-3 mb-4 p-3 bg-green-50 rounded-xl">
          <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0" />
          <div className="text-xs">
            <span className="text-gray-500">Insurer offered: </span>
            <span className="font-semibold text-gray-700">
              {formatCurrency(result.offerAmount)}
            </span>
            {multiplier && (
              <span className="ml-1 text-green-700 font-bold">({multiplier}x more)</span>
            )}
          </div>
        </div>
      )}

      {/* Details */}
      <div className="mt-auto space-y-1.5">
        {result.injury && (
          <p className="text-xs text-gray-500 leading-relaxed">{result.injury}</p>
        )}
        <div className="flex items-center gap-3 text-xs text-gray-400">
          {result.location && <span>{result.location}</span>}
          {result.year && <span>· {result.year}</span>}
        </div>
      </div>
    </div>
  )
}
