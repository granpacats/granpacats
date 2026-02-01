'use client'

import { motion } from 'framer-motion'
import NFTCard from '@/components/NFTCard'

export default function CollectionGrid({ items }: { items: any[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.04,
          },
        },
      }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
    >
      {items.map((nft) => (
        <motion.div
          key={nft.id}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <NFTCard nft={nft} small />
        </motion.div>
      ))}
    </motion.div>
  )
}

