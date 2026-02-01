import './globals.css'
import Footer from '@/components/layout/Footer'
import SolanaWalletProvider from '@/components/WalletProvider'
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={pixelFont.variable}>
      <body className="min-h-screen bg-[#0b0b0f] text-white">
        <SolanaWalletProvider>
          {children}
          <Footer />
        </SolanaWalletProvider>
      </body>
    </html>
  )
}
