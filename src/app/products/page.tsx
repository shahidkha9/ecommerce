
import { ProductCard } from "@/components/productsCard"

const products = [
  {
    id: 1,
    name: "The Dandy chair",
    price: 250,
    image: "/assets/img1.png",
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: 155,
    image: "/assets/img3.png",
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: 125,
    image: "/assets/img2.png",
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: 399,
    image: "/assets/img8.png",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-medium mb-8">All products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

