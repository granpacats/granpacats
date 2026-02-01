'use client'

import { useMemo, useState } from 'react'
import { NFT_LIST, TRAITS } from '@/lib/nft-data'
import TraitFilter from './TraitFilter'
import CollectionGrid from './CollectionGrid'

export default function CollectionPageClient() {
  const [selectedTraits, setSelectedTraits] = useState<
    Record<string, string[]>
  >({})

  const filteredNFTs = useMemo(() => {
    return NFT_LIST.filter(nft =>
      Object.entries(selectedTraits).every(([trait, values]) => {
        if (values.length === 0) return true

        const nftValue = nft.traits.find(
          t => t.trait_type === trait
        )?.value

        return values.includes(nftValue ?? '')
      })
    )
  }, [selectedTraits])

  return (
    <div className="flex gap-8">
      <TraitFilter
        traits={TRAITS}
        selected={selectedTraits}
        onChange={setSelectedTraits}
      />

      <div className="flex-1">
        <CollectionGrid items={filteredNFTs} />
      </div>
    </div>
  )
}

