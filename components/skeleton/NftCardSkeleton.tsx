export default function NftCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden bg-zinc-900 border border-white/5 animate-pulse">
      {/* IMAGE */}
      <div className="aspect-square bg-zinc-800" />

      {/* INFO */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-zinc-800 rounded" />
        <div className="h-3 w-1/2 bg-zinc-800 rounded" />
      </div>
    </div>
  )
}
