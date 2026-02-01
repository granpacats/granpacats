export default function NftDetailSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-12 animate-pulse">
      {/* IMAGE SKELETON */}
      <div className="aspect-square rounded-2xl bg-zinc-800" />

      {/* TEXT SKELETON */}
      <div className="space-y-6">
        <div className="h-8 w-2/3 bg-zinc-800 rounded" />
        <div className="h-4 w-full bg-zinc-800 rounded" />
        <div className="h-4 w-5/6 bg-zinc-800 rounded" />

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="h-20 bg-zinc-800 rounded-xl" />
          <div className="h-20 bg-zinc-800 rounded-xl" />
          <div className="h-20 bg-zinc-800 rounded-xl" />
          <div className="h-20 bg-zinc-800 rounded-xl" />
        </div>
      </div>
    </div>
  )
}

