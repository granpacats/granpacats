'use client'

import SolanaProvider from './solana/SolanaProvider'
import ClientOnly from './ClientOnly'
import NftGallery from './gallery/NftGallery'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function ClientApp() {
  return (
    <ClientOnly>
      <SolanaProvider>
        <main className="p-8 min-h-screen bg-black text-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">GrandpaCats NFT Gallery</h1>
            <WalletMultiButton />
          </div>

          <NftGallery />
        </main>
      </SolanaProvider>
    </ClientOnly>
  )
}

