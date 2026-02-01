export default function StatsGrid({
  stats,
}: {
  stats: { supply: number; owners: number; floor: string; listed: number }
}) {
  const items = [
    { label: 'Supply', value: stats.supply },
    { label: 'Owners', value: stats.owners },
    { label: 'Floor', value: stats.floor },
    { label: 'Listed', value: stats.listed },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((i) => (
        <div
          key={i.label}
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <div className="text-xs text-zinc-400">{i.label}</div>
          <div className="text-lg font-semibold">{i.value}</div>
        </div>
      ))}
    </div>
  )
}
