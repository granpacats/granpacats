'use client'

import { dummyNFTs } from '@/lib/nftSource'

export default function Gallery() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          🐱 GrandpaCats NFT
        </h1>
        <p className="mt-3 text-zinc-400">Pre-Launch NFT Gallery</p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {dummyNFTs.map((nft) => (
          <div
            key={nft.id}
            className="bg-zinc-900 rounded-2xl p-3
                       transition-transform duration-300
                       hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="rounded-xl w-full aspect-square object-cover"
            />
            <div className="mt-3">
              <p className="text-sm font-medium">{nft.name}</p>
              <p className="text-xs text-zinc-500">GrandpaCats Collection</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

