export type SimpleTrait = {
  trait_type: string
  value: string
}

export default function TraitsGrid({
  traits,
}: {
  traits: SimpleTrait[]
}) {
  if (!traits || traits.length === 0) return null

  return (
    <div className="grid grid-cols-2 gap-3">
      {traits.map((trait) => (
        <div
          key={trait.trait_type}
          className="bg-white/5 rounded-lg p-3 text-sm"
        >
          <p className="text-white/50">{trait.trait_type}</p>
          <p className="font-medium">{trait.value}</p>
        </div>
      ))}
    </div>
  )
}
