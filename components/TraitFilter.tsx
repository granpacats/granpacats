'use client'

type Props = {
  counts: Record<string, Record<string, number>>
  selected: Record<string, string[]>
  onToggle: (type: string, value: string) => void
}

export default function TraitFilter({
  counts,
  selected,
  onToggle,
}: Props) {
  return (
    <div className="space-y-6">
      {Object.entries(counts).map(([type, values]) => (
        <div key={type}>
          <h3 className="mb-2 text-sm font-semibold uppercase text-zinc-400">
            {type}
          </h3>

          <div className="space-y-1">
            {Object.entries(values).map(([value, count]) => {
              const active =
                selected[type]?.includes(value)

              return (
                <button
                  key={value}
                  onClick={() => onToggle(type, value)}
                  className={`w-full flex justify-between text-sm px-2 py-1 rounded
                    ${
                      active
                        ? 'bg-white text-black'
                        : 'hover:bg-zinc-800 text-zinc-300'
                    }`}
                >
                  <span>{value}</span>
                  <span className="opacity-60">{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
