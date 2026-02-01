'use client'

import Image from 'next/image'

const nfts = [
  { id: 1, image: '/nfts/1.png', name: 'GrandpaCat #1' },
  { id: 2, image: '/nfts/2.png', name: 'GrandpaCat #2' },
  { id: 3, image: '/nfts/3.png', name: 'GrandpaCat #3' },
]

export default function NftGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className="bg-zinc-900 rounded-xl p-4 hover:scale-105 transition"
        >
          <Image
            src={nft.image}
            alt={nft.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-3 text-center font-semibold">{nft.name}</p>
        </div>
      ))}
    </div>
  )
}
