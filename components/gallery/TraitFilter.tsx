'use client'

export default function TraitFilter({
  counts,
  selected,
  onToggle,
}: any) {
  return (
    <div className="space-y-6">
      {Object.entries(counts).map(([type, values]: any) => (
        <div key={type}>
          <h4 className="text-sm font-semibold mb-2">{type}</h4>
          <div className="space-y-1">
            {Object.entries(values).map(([value, count]: any) => {
              const active = selected[type] === value
              return (
                <button
                  key={value}
                  onClick={() => onToggle(type, value)}
                  className={`w-full flex justify-between px-3 py-2 rounded-lg text-sm ${
                    active
                      ? 'bg-white text-black'
                      : 'bg-white/5 hover:bg-white/10'
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

