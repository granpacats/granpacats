import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <p className="text-sm text-zinc-400 mb-4">
            Solana NFT Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            GrandpaCats
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl mb-10">
            A slow-built NFT collection crafted with patience, personality,
            and purpose. No hype. Just timeless cats.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/collection"
              className="px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90"
            >
              Explore Collection
            </Link>

            <span className="text-sm text-zinc-500">
              Mint coming soon
            </span>
          </div>
        </div>

{/* RIGHT – BRAND LOGO */}
<div className="flex justify-center md:justify-end">
  <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full
                  bg-black border border-white/10
                  shadow-[0_0_120px_rgba(168,85,247,0.35)]
                  flex items-center justify-center">

    {/* glow */}
    <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl" />

    <Image
      src="/logo.png"
      alt="GrandpaCats Logo"
      width={1000}
      height={1000}
className="relative z-10 drop-shadow-xl animate-pulse"
      priority
    />
  </div>
</div>
      </div>
    </section>
  )
}

