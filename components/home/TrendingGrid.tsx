import Image from 'next/image'
import Link from 'next/link'
import { NFT_LIST } from '@/lib/nft-data'

export default function TrendingGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-lg font-semibold mb-4">
        🔥 Trending NFTs
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {NFT_LIST.slice(0, 16).map(nft => (
          <Link
            key={nft.id}
            href={`/nft/${nft.id}`}
            className="group"
          >
            <div className="relative w-full h-[96px] rounded-md overflow-hidden bg-zinc-800">
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                sizes="96px"
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <p className="mt-1 text-[11px] truncate">
              {nft.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
