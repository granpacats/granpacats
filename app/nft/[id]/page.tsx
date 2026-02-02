import { NFT_LIST } from '@/lib/nft-data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function NFTDetailPage({ params }: PageProps) {
  const { id } = await params

  const nft = NFT_LIST.find((n) => n.id === id)
  if (!nft) return notFound()

  /* 🎮 FAKE RPG STATS (deterministic) */
  const stats = {
    hp: 60 + (Number(id) * 3) % 40,
    atk: 40 + (Number(id) * 5) % 60,
    def: 30 + (Number(id) * 7) % 50,
    luck: 10 + (Number(id) * 11) % 90,
  }

  const rarity =
    stats.luck > 70
      ? 'Legendary'
      : stats.luck > 45
      ? 'Rare'
      : 'Common'

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pixel-font">

      {/* BACK */}
      <Link
        href="/collection"
        className="
          inline-block mb-6 text-xs
          bg-black text-white
          px-4 py-2
          border-2 border-white
          shadow-[3px_3px_0_#000]
          hover:-translate-x-[1px]
          hover:-translate-y-[1px]
          transition
        "
      >
        ← BACK TO COLLECTION
      </Link>

      <div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-8
          bg-[#111]
          border-2 border-black
          shadow-[6px_6px_0_#000]
          p-6
        "
      >
        {/* IMAGE */}
        <div className="border-2 border-black bg-black">
          <img
            src={nft.image}
            alt={nft.name}
            className="
              w-full aspect-square object-cover
              image-rendering-pixelated
            "
          />
        </div>

        {/* INFO */}
        <div className="space-y-4 text-xs">

          <h1 className="text-lg">
            {nft.name}
          </h1>

          {/* RARITY */}
          <div
            className={`
              inline-block px-3 py-1 border-2
              ${
                rarity === 'Legendary'
                  ? 'bg-yellow-400 text-black'
                  : rarity === 'Rare'
                  ? 'bg-blue-400 text-black'
                  : 'bg-zinc-700 text-white'
              }
              border-black
            `}
          >
            {rarity}
          </div>

          {/* LORE */}
          <p className="text-gray-400 leading-relaxed">
            An old but wise cat wandering the Solana lands.
            Known for its chill aura and unexpected strength.
          </p>

          {/* STATS */}
          <div className="space-y-3 mt-4">
            <Stat label="HP" value={stats.hp} max={100} />
            <Stat label="ATK" value={stats.atk} max={100} />
            <Stat label="DEF" value={stats.def} max={100} />
            <Stat label="LUCK" value={stats.luck} max={100} />
          </div>

          {/* META */}
          <div className="pt-4 border-t border-white/20 text-[10px] space-y-1">
            <p>ID: #{nft.id}</p>
            <p>Collection: GranpaCats</p>
            <p>Chain: Solana</p>
            <p>Status: Unlisted</p>
          </div>

          {/* ACTION */}
          <button
            disabled
            className="
              mt-4
              bg-zinc-800 text-gray-400
              px-5 py-3
              border-2 border-black
              cursor-not-allowed
            "
          >
            NOT FOR SALE
          </button>

        </div>
      </div>
    </main>
  )
}

/* ===================== */
/* 🎮 STAT BAR COMPONENT */
/* ===================== */
function Stat({
  label,
  value,
  max,
}: {
  label: string
  value: number
  max: number
}) {
  const percent = Math.min(100, Math.round((value / max) * 100))

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="w-full h-3 bg-black border-2 border-white/20">
        <div
          className="h-full bg-green-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
