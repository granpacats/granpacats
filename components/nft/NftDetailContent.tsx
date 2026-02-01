import { NFT } from '@/lib/nft-data'

export default function NftDetailContent({ nft }: { nft: NFT }) {
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
        <p className="text-white/70 mb-6">{nft.description}</p>

        <div className="grid grid-cols-2 gap-4">
          {nft.attributes.map((attr) => (
            <div
              key={attr.trait_type}
              className="bg-white/5 rounded-lg p-3 text-sm"
            >
              <p className="text-white/50">{attr.trait_type}</p>
              <p className="font-medium">{attr.value}</p>
            </div>
          ))}
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

