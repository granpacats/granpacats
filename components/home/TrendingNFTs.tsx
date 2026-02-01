import Image from 'next/image'
import Link from 'next/link'
import { TRENDING_NFTS } from '@/lib/trending-data'

export default function TrendingNFTs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">
          🔥 Trending Collections
        </h2>

        <Link
          href="/collection"
          className="text-sm text-zinc-400 hover:text-white transition"
        >
          View all →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRENDING_NFTS.map(nft => (
          <Link
            key={nft.id}
            href={`/collection`}
            className="group flex items-center gap-4 rounded-xl bg-white/5 hover:bg-white/10 p-4 transition"
          >
            {/* IMAGE SMALL */}
            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-zinc-800 shrink-0">
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            {/* INFO */}
            <div className="flex-1">
              <p className="text-sm font-medium truncate">
                {nft.name}
              </p>

              <div className="flex gap-3 text-xs text-zinc-400 mt-1">
                <span>Floor: {nft.floor}</span>
                <span>Vol: {nft.volume}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
