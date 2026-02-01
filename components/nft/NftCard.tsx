import Image from 'next/image'
import Link from 'next/link'
import type { NFTItem } from '@/lib/nft-data'

export default function NftCard({ nft }: { nft: NFTItem }) {
  return (
    <Link href={`/nft/${nft.id}`}>
      <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:scale-[1.02] transition">
        <div className="relative aspect-square">
          <Image
            src={nft.image}
            alt={nft.name}
            fill
            className="object-cover group-hover:opacity-90"
          />
        </div>
        <div className="p-3">
          <div className="text-sm font-medium">{nft.name}</div>
        </div>
      </div>
    </Link>
  )
}
