export type NFTItem = {
  id: string
  name: string
  image: string
}

export const NFT_LIST: NFTItem[] = Array.from({ length: 45 }).map((_, i) => {
  const id = (i + 1).toString()

  return {
    id,
    name: `GranpaCats #${id}`,
    image: `/nfts/${id}.png`,
  }
})
