import { NFTItem } from './nft-data'

export function getTraitCounts(nfts: NFTItem[]) {
  const counts: Record<string, Record<string, number>> = {}

  nfts.forEach(nft => {
    nft.traits.forEach(trait => {
      counts[trait.trait_type] ??= {}
      counts[trait.trait_type][trait.value] =
        (counts[trait.trait_type][trait.value] || 0) + 1
    })
  })

  return counts
}

