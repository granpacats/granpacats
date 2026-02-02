import { NFTItem } from '@/lib/nft-data'

export default function NftDetailContent({ nft }: { nft: NFTItem }) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <div className="bg-white/5 rounded-xl p-4">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full aspect-square object-cover rounded-lg"
        />
      </div>

      {/* INFO */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{nft.name}</h1>

        <p className="text-white/70 mb-6">
          An old but wise GranpaCat wandering the Solana lands.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white/50">Type</p>
            <p className="font-medium">GranpaCat</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white/50">Chain</p>
            <p className="font-medium">Solana</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white/50">Edition</p>
            <p className="font-medium">#{nft.id}</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white/50">Status</p>
            <p className="font-medium">Unlisted</p>
          </div>
        </div>

        <div className="mt-8 bg-white/5 rounded-lg p-4 text-sm">
          <p className="text-white/50">Floor Price</p>
          <p className="text-lg font-semibold">0.25 SOL</p>
          <p className="text-white/40 mt-1">Mint: Coming Soon</p>
        </div>
      </div>
    </div>
  )
}
