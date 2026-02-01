'use client'

import { motion } from 'framer-motion'

export default function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4
                 bg-zinc-900/70 border border-white/5
                 rounded-2xl p-4 mb-24"
    >
      <Stat
        label="Floor Price"
        value="0.25 SOL"
        accent="text-green-400"
      />

      <Stat
        label="Supply"
        value="3,333"
      />

      <Stat
        label="Status"
        value="Mint Soon"
        accent="text-yellow-400"
        pulse
      />

      <Stat
        label="Blockchain"
        value="Solana"
      />
    </motion.section>
  )
}

function Stat({
  label,
  value,
  accent = '',
  pulse = false,
}: {
  label: string
  value: string
  accent?: string
  pulse?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs text-zinc-500">{label}</p>
      <p
        className={`text-lg font-bold ${accent} ${
          pulse ? 'animate-pulse' : ''
        }`}
      >
        {value}
      </p>
    </div>
  )
}

