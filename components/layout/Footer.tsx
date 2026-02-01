import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-10
        flex flex-col sm:flex-row
        items-center justify-between gap-4
        text-sm text-gray-500">

        {/* LEFT */}
        <p>
          © {new Date().getFullYear()} <span className="text-white">GranpaCats</span>
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="hover:text-white transition"
          >
            Twitter
          </Link>

          <Link
            href="#"
            className="hover:text-white transition"
          >
            Discord
          </Link>

          <Link
            href="/collection"
            className="hover:text-white transition"
          >
            Collection
          </Link>
        </div>
      </div>
    </footer>
  )
}
