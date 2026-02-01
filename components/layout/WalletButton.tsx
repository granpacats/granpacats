'use client'

import dynamic from 'next/dynamic'

const WalletMultiButton = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      (m) => m.WalletMultiButton
    ),
  { ssr: false }
)

export default function WalletButton() {
  return (
    <WalletMultiButton className="!bg-white !text-black !text-sm !h-9 !px-4 !rounded-full" />
  )
}
