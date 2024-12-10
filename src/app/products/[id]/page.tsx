"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-medium mb-6">
            A brand built on the love of craftsmanship, quality, and outstanding customer service
          </h1>
          <Button asChild>
            <Link href="/products">View our products</Link>
          </Button>
        </div>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#2A254B] text-white p-8 md:p-12">
          <h2 className="text-xl md:text-2xl mb-4">It started with a small idea</h2>
          <p className="mb-6 md:mb-8">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <Button variant="secondary">View collection</Button>
        </div>
        <div className="relative h-60 md:h-[400px]">
          <Image
            src="/assets/img4.png"
            alt="Modern sofa"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Service Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-[500px]">
            <Image
              src="/assets/image (2).png"
              alt="Modern sofa"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Our service isn&apos;t just personal. It&apos;s actually hyper-personally exquisite.
            </h2>
            <p className="mb-4">
              When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
            </p>
            <p className="mb-6">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique became the hotbed for the London interior design community.
            </p>
            <Button variant="outline">Get in touch</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl text-center font-medium mb-12">What makes our brand different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Next day as standard",
              description: "Order before 3pm and get your order the next day as standard.",
            },
            {
              title: "Made by true artisans",
              description: "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              title: "Unbeatable prices",
              description: "For our materials and quality, you won't find better prices anywhere.",
            },
            {
              title: "Recycled packaging",
              description: "We use 100% recycled packaging to ensure our footprint is more manageable.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: "url('/assets/img5.png')" }}
      >
        <div className="bg-white bg-opacity-90 p-8 container mx-auto text-center rounded-lg">
          <h2 className="text-2xl mb-4 font-semibold">Join the club and get the benefits</h2>
          <p className="mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <Input type="email" placeholder="your@email.com" />
            <Button>Sign up</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
