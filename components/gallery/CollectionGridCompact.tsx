import Link from 'next/link'
import Image from 'next/image'
import { NFT_LIST } from '@/lib/nft-data'

export default function CollectionGridCompact() {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-4
      "
    >
      {NFT_LIST.map(nft => (
        <Link
          key={nft.id}
          href={`/nft/${nft.id}`}
          className="group rounded-lg bg-white/5 hover:bg-white/10 p-2 transition"
        >
          {/* IMAGE SMALL */}
          <div className="relative aspect-square rounded-md overflow-hidden bg-zinc-800">
            <Image
              src={nft.image}
              alt={nft.name}
              fill
              sizes="(max-width: 640px) 50vw,
                     (max-width: 1024px) 25vw,
                     180px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* INFO */}
          <div className="mt-2 space-y-0.5">
            <p className="text-xs font-medium truncate">
              {nft.name}
            </p>

            <p className="text-[11px] text-zinc-400">
              Floor · {nft.floor ?? '—'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

