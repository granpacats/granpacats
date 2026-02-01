'use client'

import Link from 'next/link'
import { Home, Grid, Search, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b0b0f]/90 backdrop-blur border-t border-white/10 md:hidden">
      <div className="flex justify-around items-center h-14">
        <Link href="/" className="flex flex-col items-center text-xs text-zinc-400 hover:text-white">
          <Home size={18} />
          Home
        </Link>

        <Link href="/collection" className="flex flex-col items-center text-xs text-zinc-400 hover:text-white">
          <Grid size={18} />
          Collection
        </Link>

        <Link href="#" className="flex flex-col items-center text-xs text-zinc-400 hover:text-white">
          <Search size={18} />
          Search
        </Link>

        <Link href="#" className="flex flex-col items-center text-xs text-zinc-400 hover:text-white">
          <User size={18} />
          Profile
        </Link>
      </div>
    </nav>
  )
}
