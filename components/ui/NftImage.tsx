import Image from 'next/image'

export default function NftImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-zinc-800">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw,
               (max-width: 1024px) 33vw,
               25vw"
        className="object-cover"
      />
    </div>
  )
}
