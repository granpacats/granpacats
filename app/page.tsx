'use client'

import { useEffect, useState } from 'react'
import { NFT_LIST } from '@/lib/nft-data'
import NFTCard from '@/components/NFTCard'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const WalletButton = dynamic(
  () => import('@/components/WalletButton'),
  { ssr: false }
)

export default function HomePage() {
  const [trending, setTrending] = useState<typeof NFT_LIST>([])

  useEffect(() => {
    const shuffled = [...NFT_LIST]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5)

    setTrending(shuffled)
  }, [])

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-20 bg-pixel bg-arcade">

      {/* ===== TOP BAR ===== */}
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
          <Link
  href="/"
  className="flex items-center gap-2"
>
  <img
    src="/logo.png"
    alt="GranpaCats"
    className="h-7 w-auto image-rendering-pixelated drop-shadow-[0_0_6px_#22c55e]"
  />
  <span className="pixel-font text-xs hidden sm:block">
    GRANPACATS
  </span>
</Link>

          <div className="wallet-pixel">
            <WalletButton />
          </div>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs text-gray-400 mb-3">
            Solana NFT Collection
          </p>

          <h1 className="text-3xl md:text-4xl pixel-font tracking-tight text-glow-green">
  GRANPACATS
</h1>

          <p className="mt-4 text-gray-400 max-w-md text-sm leading-relaxed">
A collection of legendary old cat NFTs, chill NFT gallery inspired by timeless cats,
Soon evolving into a playable RPG game universe.

Old cats. New game.
          </p>

          <div className="mt-6 flex gap-4 items-center">
            <Link
              href="/collection"
              className="
  pixel-font text-xs
  px-5 py-3
  bg-green-400 text-black
  border-2 border-black
  glow-green glow-animate
  hover:translate-x-[1px]
  hover:translate-y-[1px]
  transition
"
            >
              VIEW COLLECTION
            </Link>

            <div className="px-4 py-2 bg-zinc-900 text-xs border border-white/10">
              Price: <b>0.25 ◎</b>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 mt-3">
            Mint: coming soon
          </p>
        </div>

        {/* FEATURED NFT */}
        <div className="max-w-sm mx-auto w-full">
          <img
            src="/gif/hero.gif"
            alt="GranpaCats GIF"
            className="
              w-full
              border-2 border-black
              image-rendering-pixelated
              shadow-[6px_6px_0_#000]
            "
          />
        </div>
      </section>

      {/* ===== TRENDING ===== */}
      <section>
        <h2 className="pixel-font text-sm mb-4 flex items-center gap-2">
          🔥 TRENDING
          <span className="text-[10px] px-2 py-0.5 border border-white/20">
            Now
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {trending.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="max-w-3xl">
        <h2 className="pixel-font text-sm mb-3">
          ABOUT
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed">
          Granpa Cats is an original NFT collection designed to serve as the foundation for a Web3-based RPG game ecosystem.
Each NFT represents a unique character that can be used directly in the game.
Holders will gain access to gameplay, the progression system, and future utilities within the Grandpa Cats ecosystem.
More than art. Built for utility.
        </p>
      </section>

      {/* ===== ROADMAP ===== */}
      <section>
        <h2 className="pixel-font text-sm mb-6">
          ROADMAP
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              phase: 'PHASE 1',
              title: 'Community',
              desc: 'Social links, Feedback, updates',
            },
            {
              phase: 'PHASE 2',
              title: 'Website Launch',
              desc: 'NFT gallery, collection page, detail view',
            },
            {
              phase: 'PHASE 3',
              title: 'Utility Launch',
              desc: 'Mint, RPG game integration, Playable NFT characters, Ongoing development & updates',
            },
          ].map((item) => (
            <div
              key={item.phase}
              className="bg-zinc-900 p-5 border-2 border-black shadow-[4px_4px_0_#000]"
            >
              <p className="text-[10px] text-gray-400 mb-1">
                {item.phase}
              </p>
              <p className="pixel-font text-xs mb-2">
                {item.title}
              </p>
              <p className="text-xs text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="pt-10 border-t border-white/10">
        <h2 className="pixel-font text-sm mb-4">
          OUR PARTNERS
        </h2>

        <p className="text-sm text-gray-400 mb-6 max-w-xl">
          GranpaCats is built together with friends from the Solana ecosystem.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { name: 'Solana', logo: '/partners/solana.png' },
            { name: 'Phantom', logo: '/partners/phantom.png' },
            { name: 'Magic Eden', logo: '/partners/magiceden.png' },
          ].map((p) => (
            <div
              key={p.name}
              className="
                bg-zinc-900
                border-2 border-black
                p-4
                flex items-center justify-center
                pixel-shadow
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-none
                transition
              "
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 object-contain image-rendering-pixelated"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
