"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#2A254B] text-white text-center py-2 text-sm">
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>

      {/* Header Section */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold text-gray-900">
            Avion
          </Link>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="md:hidden text-gray-900 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-700" />
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <User className="h-5 w-5 text-gray-700" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block bg-white md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-900 text-sm px-4 py-4 md:py-0 md:container md:mx-auto">
         
            <li>
              <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                All products
              </Link>
            </li>
            <li>
              <Link href="/products/plant-pots" onClick={() => setIsMenuOpen(false)}>
                Plant pots
              </Link>
            </li>
            <li>
              <Link href="/products/ceramics" onClick={() => setIsMenuOpen(false)}>
                Ceramics
              </Link>
            </li>
            <li>
              <Link href="/products/tables" onClick={() => setIsMenuOpen(false)}>
                Tables
              </Link>
            </li>
            <li>
              <Link href="/products/chairs" onClick={() => setIsMenuOpen(false)}>
                Chairs
              </Link>
            </li>
            <li>
              <Link href="/products/crockery" onClick={() => setIsMenuOpen(false)}>
                Crockery
              </Link>
            </li>
            <li>
              <Link href="/products/tableware" onClick={() => setIsMenuOpen(false)}>
                Tableware
              </Link>
            </li>
            <li>
              <Link href="/products/cutlery" onClick={() => setIsMenuOpen(false)}>
                Cutlery
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

