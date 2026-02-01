'use client'

export default function FilterBar({
  onChange,
}: {
  onChange: (v: string) => void
}) {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm"
    >
      <option value="all">All</option>
      <option value="rare">Rare</option>
      <option value="common">Common</option>
    </select>
  )
}
