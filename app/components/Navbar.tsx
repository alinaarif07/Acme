"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { openCart, cartCount } = useCart();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/95">
      <div className="w-full px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Left side: Logo & Navigation Links */}
          <div className="flex flex-1 justify-start items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group font-semibold text-black dark:text-white">
              {/* Logo icon - rounded box with border, dark background with white triangle */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-black shadow-sm transition-all group-hover:scale-105 dark:border-zinc-800 dark:bg-black dark:text-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 text-black dark:text-white"
                >
                  <polygon points="12 4, 22 20, 2 20" />
                </svg>
              </div>
              <span className="font-extrabold text-sm tracking-wider uppercase text-black dark:text-white whitespace-nowrap">
                Acme Store
              </span>
            </Link>

            {/* Links: All, Shirts, Stickers */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/all" className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                All
              </Link>
              <Link href="/shirts" className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                Shirts
              </Link>
              <Link href="/stickers" className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                Stickers
              </Link>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-none w-full max-w-md justify-center">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full rounded-lg border border-zinc-200 bg-transparent px-4 py-2 pr-10 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 dark:text-zinc-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.608 10.608Z"
                  />
                </svg>
              </div>
            </form>
          </div>

          {/* Right side: Cart Icon & Hamburger */}
          <div className="flex flex-1 justify-end items-center gap-3">
            {/* Cart Icon - border restored to border-zinc-200 / dark:border-zinc-800 */}
            <button
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 bg-transparent transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 cursor-pointer dark:border-zinc-800 dark:text-zinc-300 dark:bg-transparent dark:hover:bg-zinc-800"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-black dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              {/* Cart Item Badge */}
              {cartCount > 0 && (
                <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-md ring-2 ring-zinc-50 dark:ring-zinc-900 animate-in zoom-in duration-200">
                  {cartCount}
                </div>
              )}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 bg-transparent transition-colors hover:bg-zinc-100 md:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Search (below main row, only on small/medium screens) */}
        <div className="pb-4 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full rounded-lg border border-zinc-200 bg-transparent px-4 py-2 pr-10 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 dark:text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.608 10.608Z"
                />
              </svg>
            </div>
          </form>
        </div>

      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 bg-white/95 px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-black/95 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link
              href="/all"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white transition-colors"
            >
              All
            </Link>
            <Link
              href="/shirts"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white transition-colors"
            >
              Shirts
            </Link>
            <Link
              href="/stickers"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white transition-colors"
            >
              Stickers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
