'use client'

import CollectionCard from './CollectionCard'
import { NFTItem } from '@/lib/nft-data'

export default function CollectionGrid({
  items,
  loading = false,
}: {
  items: NFTItem[]
  loading?: boolean
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl bg-zinc-800 animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((nft) => (
        <CollectionCard key={nft.id} nft={nft} />
      ))}
    </div>
  )
}
