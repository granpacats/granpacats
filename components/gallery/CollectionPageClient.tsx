'use client'

import { useMemo } from 'react'
import { NFT_LIST } from '@/lib/nft-data'
import CollectionGrid from './CollectionGrid'

export default function CollectionPageClient() {
  const filteredNFTs = useMemo(() => {
    return NFT_LIST
  }, [])

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <CollectionGrid items={filteredNFTs} />
      </div>
    </div>
  )
}
