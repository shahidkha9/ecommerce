import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-medium mb-8">
            A brand built on the love of craftmanship, quality and outstanding customer service
          </h1>
          <Button asChild>
            <Link href="/products">View our products</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#2A254B] text-white p-12">
          <h2 className="text-2xl mb-4">It started with a small idea</h2>
          <p className="mb-8">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <Button variant="secondary">View collection</Button>
        </div>
        <div className="relative h-[400px]">
        <Image
            src="/assets/img4.png"
            alt="Modern sofa"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
          <Image
        src="/assets/image (2).png" // Corrected image path
        alt="Modern sofa"
        width={600} // Specified width
        height={400} // Specified height
        className="object-cover"
      />
          </div>
          <div>
            <h2 className="text-3xl mb-6">Our service isn&apos;t just personal. It&apos;s actually hyper personally exquisite</h2>
            <p className="mb-4">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="mb-8">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <Button variant="outline">Get in touch</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl text-center mb-12">What makes our brand different</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="font-medium mb-2">Next day as standard</h3>
            <p className="text-sm text-gray-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-2">Made by true artisans</h3>
            <p className="text-sm text-gray-600">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-2">Unbeatable prices</h3>
            <p className="text-sm text-gray-600">
              For our materials and quality you won&apos;t find better prices anywhere
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-2">Recycled packaging</h3>
            <p className="text-sm text-gray-600">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </section>

      <section
  className="bg-cover bg-center py-16"
  style={{ backgroundImage: "url('/assets/img5.png')" }}
>
  <div className="bg-gray-0 bg-opacity-0 p-8 container mx-auto px-4 text-center rounded-lg">
 
    <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
    <p className="mb-8">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
    </p>
    <div className="max-w-md mx-auto flex gap-4">
      <Input type="email" placeholder="your@email.com" />
      <Button>Sign up</Button>
    </div>
  </div>
</section>

    </div>
  )
}

