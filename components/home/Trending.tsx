import Image from 'next/image'
import Link from 'next/link'

const TRENDING = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  name: `Trending Cats #${i + 1}`,
  floor: `${(1.2 + i * 0.1).toFixed(2)} SOL`,
  image: `/nft/${i + 1}.png`,
}))

export default function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-8">
        Trending Collections
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {TRENDING.map((item) => (
          <Link
            key={item.id}
            href="/collection"
            className="group bg-white/5 rounded-xl p-3 hover:bg-white/10 transition"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-zinc-900">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="200px"
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="mt-3">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-zinc-400">
                Floor: {item.floor}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
