'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { NFT_LIST } from '@/lib/nft-data'
import NFTCard from '@/components/NFTCard'
import dynamic from 'next/dynamic'

const WalletButton = dynamic(
  () => import('@/components/WalletButton'),
  { ssr: false }
)

const FAKE_TOTAL = 333
const ITEMS_PER_PAGE = 10

export default function CollectionPage() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'az' | 'za'>('az')
  const [page, setPage] = useState(1)

  // ✅ RANDOM SEKALI SAAT LOAD (TETAP)
  const randomizedNFTs = useMemo(() => {
    return [...NFT_LIST].sort(() => Math.random() - 0.5)
  }, [])

  // ✅ FILTER + SORT (TETAP)
  const filteredNFTs = useMemo(() => {
    let list = randomizedNFTs.filter((nft) =>
      nft.name.toLowerCase().includes(search.toLowerCase())
    )

    if (sort === 'az') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sort === 'za') {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name))
    }

    return list
  }, [search, sort, randomizedNFTs])

  // ✅ PAGINATION PALSU (TETAP)
  const totalPages = Math.ceil(FAKE_TOTAL / ITEMS_PER_PAGE)

  const paginatedNFTs = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return filteredNFTs.slice(start, end)
  }, [filteredNFTs, page])

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-10">

      {/* TOP BAR – CONSISTENT WITH HOME */}
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur md:static md:bg-transparent md:backdrop-blur-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
          <Link href="/" className="font-bold text-lg pixel-font">
            GranpaCats
          </Link>

          <WalletButton />
        </div>
      </div>

      {/* HEADER */}
      <section className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold pixel-font">
          Collection
        </h1>

        <p className="text-sm text-gray-500">
          Showing <b className="text-white">{filteredNFTs.length}</b> of{' '}
          <b className="text-white">{FAKE_TOTAL.toLocaleString()}</b> items
        </p>
      </section>

      {/* FILTER BAR */}
      <section className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search cats..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          className="
            flex-1
            px-4 py-2
            rounded-md
            bg-[#111]
            border border-white/10
            text-sm
            outline-none
            focus:border-white/30
          "
        />

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value as 'az' | 'za')
            setPage(1)
          }}
          className="
            px-4 py-2
            rounded-md
            bg-[#111]
            border border-white/10
            text-sm
          "
        >
          <option value="az">Name A–Z</option>
          <option value="za">Name Z–A</option>
        </select>
      </section>

      {/* GRID */}
      <section>
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-3
            sm:gap-4
          "
        >
          {paginatedNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {paginatedNFTs.length === 0 && (
          <div className="mt-16 text-center text-gray-500">
            <p className="text-sm">No cats found 😿</p>
            <p className="text-xs mt-1">Try another keyword</p>
          </div>
        )}
      </section>

      {/* PAGINATION */}
      <section className="flex items-center justify-center gap-4 pt-6 text-sm">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="
            px-3 py-1
            rounded
            bg-zinc-900
            disabled:opacity-40
          "
        >
          ← Prev
        </button>

        <span className="text-gray-400">
          Page <b className="text-white">{page}</b> of{' '}
          <b className="text-white">{totalPages}</b>
        </span>

        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="
            px-3 py-1
            rounded
            bg-zinc-900
            disabled:opacity-40
          "
        >
          Next →
        </button>
      </section>

    </main>
  )
}
