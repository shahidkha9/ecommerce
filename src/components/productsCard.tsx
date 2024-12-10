import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="relative aspect-square mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-gray-600">£{price}</p>
    </Link>
  )
}

