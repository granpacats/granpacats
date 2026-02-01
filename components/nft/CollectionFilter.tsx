'use client'

type Props = {
  traits: Record<string, string[]>
  selected: Record<string, string | null>
  onChange: (key: string, value: string | null) => void
  sort: string
  onSort: (v: string) => void
}

export default function CollectionFilter({
  traits,
  selected,
  onChange,
  sort,
  onSort,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {Object.entries(traits).map(([trait, values]) => (
        <select
          key={trait}
          value={selected[trait] ?? ''}
          onChange={(e) => onChange(trait, e.target.value || null)}
          className="rounded-lg bg-zinc-900 border border-white/10 px-3 py-2 text-sm"
        >
          <option value="">{trait}</option>
          {values.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      ))}

      <select
        value={sort}
        onChange={(e) => onSort(e.target.value)}
        className="rounded-lg bg-zinc-900 border border-white/10 px-3 py-2 text-sm"
      >
        <option value="default">Default</option>
        <option value="name">Name A–Z</option>
      </select>
    </div>
  )
}
