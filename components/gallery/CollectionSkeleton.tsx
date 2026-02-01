export default function CollectionSkeleton({
  count = 8,
}: {
  count?: number
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden bg-zinc-900 border border-white/5 animate-pulse"
        >
          {/* IMAGE */}
          <div className="aspect-square bg-zinc-800" />

          {/* TEXT */}
          <div className="p-4 space-y-2">
            <div className="h-4 w-3/4 bg-zinc-800 rounded" />
            <div className="h-3 w-1/2 bg-zinc-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

