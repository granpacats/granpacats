export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* Left */}
          <div>
            <p className="text-sm font-medium">GranpaCats 🐱</p>
            <p className="text-xs text-gray-500 mt-1">
              Small NFT gallery · built for fun
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-6 text-xs text-gray-400">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition"
            >
              Discord
            </a>
            <a
              href="#"
              className="hover:text-white transition"
            >
              MagicEden
            </a>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 mt-8">
          © {new Date().getFullYear()} GranpaCats. Not affiliated with Magic Eden.
        </p>
      </div>
    </footer>
  )
}
