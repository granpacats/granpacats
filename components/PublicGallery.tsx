'use client'

import { useEffect, useState } from 'react'

type NFT = {
  id: string
  name: string
  image: string
}

export default function PublicGallery() {
  const [nfts, setNfts] = useState<NFT[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const res = await fetch(
          `https://rpc.helius.xyz/?api-key=${process.env.NEXT_PUBLIC_HELIUS_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: '1',
              method: 'getAssetsByGroup',
              params: {
                groupKey: 'collection',
                groupValue: 'ISI_COLLECTION_ADDRESS_GRANDPACATS',
                page: 1,
                limit: 20
              }
            })
          }
        )

        const json = await res.json()

        const items =
          json.result?.items?.map((nft: any) => ({
            id: nft.id,
            name: nft.content?.metadata?.name ?? 'GrandpaCats NFT',
            image: nft.content?.files?.[0]?.uri
          })) || []

        setNfts(items)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNFTs()
  }, [])

  if (loading) return <p>Loading GrandpaCats NFTs...</p>

  return (
    <div style={{ padding: 24 }}>
      <h1>🐱 GrandpaCats NFT Gallery</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
          marginTop: 24
        }}
      >
        {nfts.map(nft => (
          <div
            key={nft.id}
            style={{
              border: '1px solid #333',
              borderRadius: 12,
              padding: 12
            }}
          >
            <img
              src={nft.image}
              alt={nft.name}
              style={{ width: '100%', borderRadius: 8 }}
            />
            <p style={{ marginTop: 8 }}>{nft.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
