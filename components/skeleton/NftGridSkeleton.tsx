import NftCardSkeleton from './NftCardSkeleton'

export default function NftGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <NftCardSkeleton key={i} />
      ))}
    </div>
  )
}
