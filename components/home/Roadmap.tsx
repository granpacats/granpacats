export default function Roadmap() {
  const steps = [
    {
      title: 'Phase 1 – Foundation',
      desc: 'Art creation, lore building, and smart contract development.',
    },
    {
      title: 'Phase 2 – Mint',
      desc: 'Public mint, listings, and initial marketplace presence.',
    },
    {
      title: 'Phase 3 – Utility',
      desc: 'Community tools, holder perks, and on-chain experiments.',
    },
    {
      title: 'Phase 4 – Expansion',
      desc: 'Collabs, new drops, and long-term ecosystem growth.',
    },
  ]

  return (
    <section className="bg-black/40">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Roadmap
        </h2>

        <div className="space-y-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-6 items-start"
            >
              <div className="w-3 h-3 rounded-full bg-white mt-2" />
              <div>
                <h3 className="font-semibold mb-1">
                  {s.title}
                </h3>
                <p className="text-zinc-400">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
