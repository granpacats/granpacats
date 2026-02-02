'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NFTItem } from '@/lib/nft-data'

export default function CollectionCard({ nft }: { nft: NFTItem }) {
  const [selected, setSelected] = useState(false)

  return (
    <div
      className={`
        relative group rounded-xl overflow-hidden
        border transition
        ${selected ? 'border-indigo-500' : 'border-zinc-800'}
        bg-zinc-900
      `}
    >
      {/* checkbox select */}
      <button
        onClick={() => setSelected(!selected)}
        className="absolute top-2 left-2 z-10 w-5 h-5 rounded border border-white/40 bg-black/60"
      >
        {selected && <div className="w-full h-full bg-indigo-500 rounded" />}
      </button>

      {/* rarity badge */}
      <div className="absolute top-2 right-2 z-10 text-[11px] px-2 py-1 rounded bg-black/70">
        Top {(Number(nft.id) * 7) % 100}%
      </div>

      <Link href={`/nft/${nft.id}`}>
        {/* image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition" />

        {/* info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition">
          <div className="bg-zinc-950/80 backdrop-blur rounded-lg p-2">
            <p className="text-xs opacity-60">GrandpaCats</p>
            <p className="text-sm font-semibold truncate">{nft.name}</p>

            <p className="text-xs mt-1">
              Floor{' '}
              <span className="font-medium text-green-400">
                ◎ {(0.12 + (Number(nft.id) % 7) * 0.04).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
