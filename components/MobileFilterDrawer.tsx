'use client'

import TraitFilter from './TraitFilter'

type Props = {
  open: boolean
  onClose: () => void
  counts: Record<string, Record<string, number>>
  selected: Record<string, string[]>
  onToggle: (type: string, value: string) => void
}

export default function MobileFilterDrawer({
  open,
  onClose,
  counts,
  selected,
  onToggle,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] bg-zinc-950 rounded-t-2xl p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button
            onClick={onClose}
            className="text-sm opacity-70"
          >
            Close
          </button>
        </div>

        <TraitFilter
          counts={counts}
          selected={selected}
          onToggle={onToggle}
        />
      </div>
    </div>
  )
}
