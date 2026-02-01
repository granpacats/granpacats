import type { Trait } from '@/lib/nft-data'

export default function TraitsGrid({ traits }: { traits: Trait[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {traits.map((t, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
        >
          <div className="text-xs text-zinc-400">{t.trait_type}</div>
          <div className="font-medium">{t.value}</div>
        </div>
      ))}
    </div>
  )
}
