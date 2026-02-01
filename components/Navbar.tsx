'use client'

import Link from 'next/link'
import WalletButton from './WalletButton'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          MAGICEDEN
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/collection">Collection</Link>
        </nav>

        <WalletButton />
      </div>
    </header>
  )
}
