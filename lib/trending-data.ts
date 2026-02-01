export type TrendingNFT = {
  id: string
  name: string
  image: string
  floor: string
  volume: string
}

export const TRENDING_NFTS: TrendingNFT[] = [
  {
    id: '1',
    name: 'GrandpaCats',
    image: '/nft/1.png',
    floor: '2.1 SOL',
    volume: '120 SOL',
  },
  {
    id: '2',
    name: 'SolPunks',
    image: '/nft/2.png',
    floor: '1.4 SOL',
    volume: '98 SOL',
  },
  {
    id: '3',
    name: 'Mad Lads',
    image: '/nft/3.png',
    floor: '18.2 SOL',
    volume: '420 SOL',
  },
  {
    id: '4',
    name: 'Okay Bears',
    image: '/nft/4.png',
    floor: '7.9 SOL',
    volume: '260 SOL',
  },
]
