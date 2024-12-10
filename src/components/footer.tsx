import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals">New arrivals</Link></li>
              <li><Link href="/best-sellers">Best sellers</Link></li>
              <li><Link href="/recently-viewed">Recently viewed</Link></li>
              <li><Link href="/popular">Popular this week</Link></li>
              <li><Link href="/all-products">All products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/crockery">Crockery</Link></li>
              <li><Link href="/furniture">Furniture</Link></li>
              <li><Link href="/homeware">Homeware</Link></li>
              <li><Link href="/plant-pots">Plant pots</Link></li>
              <li><Link href="/chairs">Chairs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/vacancies">Vacancies</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/returns">Returns policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="your@email.com" className="bg-white text-black" />
              <Button variant="secondary">Sign up</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm">
          <p>Copyright 2024 Avion LTD</p>
        </div>
      </div>
    </footer>
  )
}

