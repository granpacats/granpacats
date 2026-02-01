import Image from 'next/image'
import Link from 'next/link'
import { NFT_LIST } from '@/lib/nft-data'

export default function TrendingNFT() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold mb-4">🔥 Trending</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {NFT_LIST.slice(0, 6).map((nft) => (
          <Link key={nft.id} href={`/nft/${nft.id}`}>
            <div className="min-w-[120px] bg-zinc-900 rounded-lg p-2 hover:bg-zinc-800 transition">
              <div className="relative w-full h-[90px] rounded overflow-hidden bg-zinc-800">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  fill
                  sizes="90px"
                  className="object-cover"
                />
              </div>
              <p className="mt-1 text-xs text-zinc-300 truncate">
                {nft.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
