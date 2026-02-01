import Providers from '@/app/providers'

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
