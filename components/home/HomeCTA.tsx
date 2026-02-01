import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to explore?
      </h2>

      <p className="text-zinc-400 mb-10">
        Browse the full GrandpaCats collection on-chain.
      </p>

      <Link
        href="/collection"
        className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90"
      >
        View Collection
      </Link>
    </section>
  )
}
