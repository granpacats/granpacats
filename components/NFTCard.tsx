import Link from 'next/link'
import { NFTItem } from '@/lib/nft-data' // ✅ FIX INI

export default function NFTCard({
  nft,
  small = false,
}: {
  nft: NFTItem
  small?: boolean
}) {
  return (
    <Link href={`/nft/${nft.id}`} className="group">
      <div
        className="
          bg-zinc-900
          border-2 border-black
          pixel-shadow
          transition-all duration-150
          group-hover:-translate-y-1
          group-hover:shadow-[6px_6px_0_#22c55e]
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={nft.image}
            alt={nft.name}
            className="
              w-full aspect-square object-cover
              image-rendering-pixelated
              transition-transform duration-200
              group-hover:scale-105
            "
          />

          {/* ID BADGE */}
          <span
            className="
              absolute top-1 left-1
              bg-black text-green-400
              text-[9px] px-1 py-0.5
              pixel-font
              border border-green-400
            "
          >
            #{nft.id}
          </span>
        </div>

        {/* INFO */}
        <div className="p-2">
          <p className="pixel-font text-[10px] truncate">
            {nft.name}
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            Floor 0.25 ◎
          </p>
        </div>
      </div>
    </Link>
  )
}
