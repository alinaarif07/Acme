"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Global keydown listener when hovered, making arrow key scrolling instant & intuitive
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (!isHovered || !carouselRef.current) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        carouselRef.current.scrollBy({ left: -420, behavior: "smooth" });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        carouselRef.current.scrollBy({ left: 420, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isHovered]);

  const handleKeyDown = (e) => {
    if (!carouselRef.current) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      carouselRef.current.scrollBy({ left: -420, behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      carouselRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  const handleMouseDown = () => {
    if (carouselRef.current) {
      carouselRef.current.focus();
    }
  };

  const products = [
    { id: "mug-1", href: "/product/mug-1", src: "/mug.png", name: "Acme Mug", price: "$15.00 USD" },
    { id: "hoodie-1", href: "/product/hoodie-1", src: "/hoodie.png", name: "Acme Hoodie", price: "$50.00 USD" },
    { id: "onesie-1", href: "/product/onesie-1", src: "/onesie.png", name: "Acme Baby Onesie", price: "$10.00 USD" },
    { id: "babycap-1", href: "/product/babycap-1", src: "/babycap.png", name: "Acme Baby Cap", price: "$10.00 USD" },
    { id: "mug-2", href: "/product/mug-1", src: "/mug.png", name: "Acme Mug", price: "$15.00 USD" },
    { id: "hoodie-2", href: "/product/hoodie-1", src: "/hoodie.png", name: "Acme Hoodie", price: "$50.00 USD" },
    { id: "onesie-2", href: "/product/onesie-1", src: "/onesie.png", name: "Acme Baby Onesie", price: "$10.00 USD" },
    { id: "babycap-2", href: "/product/babycap-1", src: "/babycap.png", name: "Acme Baby Cap", price: "$10.00 USD" },
  ];

  return (
    <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white transition-colors duration-200">
      <main className="w-full px-6 py-8 lg:px-12 flex flex-col gap-6">
        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2 md:h-[350px] lg:h-[400px] w-full">
          {/* Card 1: Acme Circles T-Shirt */}
          <Link
            href="/product/tshirt-circles"
            className="group relative flex h-[240px] md:h-full md:col-span-4 md:row-span-2 overflow-hidden rounded-xl border border-zinc-200 bg-white hover:border-blue-600 dark:border-zinc-800/80 dark:bg-black dark:hover:border-blue-600 transition-all duration-300"
          >
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src="/tshirt.png"
                alt="Acme Circles T-Shirt"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-[22%] left-6 md:left-10 flex items-center rounded-full border border-zinc-200/80 bg-zinc-50/70 p-1 pl-4 pr-1 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/70">
              <span className="text-xs font-semibold text-black dark:text-white">Acme Circles T-Shirt</span>
              <span className="ml-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white whitespace-nowrap">$20.00 USD</span>
            </div>
          </Link>

          {/* Card 2: Acme Drawstring Bag */}
          <Link
            href="/product/bag-1"
            className="group relative flex h-[140px] md:h-full md:col-span-2 md:row-span-1 overflow-hidden rounded-xl border border-zinc-200 bg-white hover:border-blue-600 dark:border-zinc-800/80 dark:bg-black dark:hover:border-blue-600 transition-all duration-300"
          >
            <div className="relative h-full w-full flex items-center justify-center">
              <Image src="/bag.png" alt="Acme Drawstring Bag" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute bottom-[20%] left-6 md:left-8 flex items-center rounded-full border border-zinc-200/80 bg-zinc-50/70 p-1 pl-4 pr-1 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/70">
              <span className="text-xs font-semibold text-black dark:text-white">Acme Drawstring Bag</span>
              <span className="ml-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white whitespace-nowrap">$12.00 USD</span>
            </div>
          </Link>

          {/* Card 3: Acme Cup */}
          <Link
            href="/product/cup-1"
            className="group relative flex h-[140px] md:h-full md:col-span-2 md:row-span-1 overflow-hidden rounded-xl border border-zinc-200 bg-white hover:border-blue-600 dark:border-zinc-800/80 dark:bg-black dark:hover:border-blue-600 transition-all duration-300"
          >
            <div className="relative h-full w-full flex items-center justify-center">
              <Image src="/cup.png" alt="Acme Cup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute bottom-[10%] left-6 md:left-8 flex items-center rounded-full border border-zinc-200/80 bg-zinc-50/70 p-1 pl-4 pr-1 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/70">
              <span className="text-xs font-semibold text-black dark:text-white">Acme Cup</span>
              <span className="ml-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white whitespace-nowrap">$15.00 USD</span>
            </div>
          </Link>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={carouselRef}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          tabIndex={0}
          className="w-full overflow-x-auto pb-4 custom-scrollbar focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-xl"
          aria-label="Product Carousel (Hover mouse and use Left/Right arrow keys to scroll)"
        >
          <div className="flex gap-4 w-full">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group relative flex h-[140px] w-[300px] md:h-[160px] md:w-[420px] lg:h-[180px] lg:w-[480px] flex-none overflow-hidden rounded-xl border border-zinc-200 bg-white hover:border-blue-600 dark:border-zinc-800/80 dark:bg-black dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image src={product.src} alt={product.name} fill sizes="(max-width: 768px) 300px, 480px" className="object-contain p-0 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-[12%] left-6 flex items-center rounded-full border border-zinc-200/80 bg-zinc-50/70 p-1 pl-4 pr-1 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/70">
                  <span className="text-[10px] md:text-xs font-semibold text-black dark:text-white">{product.name}</span>
                  <span className="ml-3 rounded-full bg-blue-600 px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold text-white whitespace-nowrap">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
