import Image from 'next/image'
import Link from 'next/link'

const nfts = [
  { id: '1', name: 'GrandpaCat #1' },
  { id: '2', name: 'GrandpaCat #2' },
  { id: '3', name: 'GrandpaCat #3' },
  { id: '4', name: 'GrandpaCat #4' },
]

export default function NftGallery() {
  return (
    <section className="px-6 py-24">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center tracking-wide">
  Collection Preview
</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {nfts.map((nft) => (
          <Link
            key={nft.id}
            href={`/nft/${nft.id}`}
            className="neon-card rounded-2xl overflow-hidden border border-zinc-800 bg-black block"
          >
            <Image
              src={`/nfts/${nft.id}.png`}
              alt={nft.name}
              width={400}
              height={400}
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

