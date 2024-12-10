import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-medium mb-6">
            A brand built on the love of craftmanship
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            From a small store in London &apos;s heartland to a global brand with over 50 stores
          </p>
        </div>
      </section>

      <section className="relative h-[400px] mb-16">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Our workshop"
          fill
          className="object-cover"
        />
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-medium mb-6">Our story</h2>
            <div className="prose">
              <p>
                When we started Avion, the idea was simple. Make high quality furniture
                affordable and available for the mass market.
              </p>
              <p>
                Handmade, and lovingly crafted furniture and homeware is what we live,
                breathe and design so our Chelsea boutique become the hotbed for the
                London interior design community.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-6">Our values</h2>
            <div className="prose">
              <p>
                When we started Avion, the idea was simple. Make high quality furniture
                affordable and available for the mass market.
              </p>
              <p>
                Handmade, and lovingly crafted furniture and homeware is what we live,
                breathe and design so our Chelsea boutique become the hotbed for the
                London interior design community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2A254B] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6">Join our newsletter</h2>
          <p className="mb-8">
            From a small store in London&apos;s heartland to a global brand with over 50 stores
          </p>
          <Button variant="secondary" size="lg">
            Sign up
          </Button>
        </div>
      </section>
    </div>
  )
}

