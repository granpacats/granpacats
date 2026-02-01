'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useEffect } from 'react'

export default function WalletButton() {
  const { connected, publicKey } = useWallet()

  useEffect(() => {
    if (connected && publicKey) {
      console.log('Connected:', publicKey.toBase58())
    }
  }, [connected, publicKey])

  return (
    <div
      className="
        wallet-pixel"
    >
      <WalletMultiButton />
    </div>
  )
}
