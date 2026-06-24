"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

// Export custom graphics so they can be used in product details page and cart
export const PrismTshirtGraphic = () => (
  <div className="w-3/5 max-w-[220px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* T-Shirt Silhouette */}
      <path
        d="M30 15 L38 15 C41 18 45 20 50 20 C55 20 59 18 62 15 L70 15 L85 30 L74 38 L74 85 L26 85 L26 38 L15 30 Z"
        fill="#121212"
        stroke="#333"
        strokeWidth="1.5"
      />
      {/* Collar Detail */}
      <path
        d="M38 15 C41 18 45 20 50 20 C55 20 59 18 62 15"
        stroke="#444"
        strokeWidth="1.5"
      />
      {/* Sleeve folds */}
      <path d="M26 38 L15 30" stroke="#333" strokeWidth="1" />
      <path d="M74 38 L85 30" stroke="#333" strokeWidth="1" />
      
      {/* Prism colored ray lines behind the triangle */}
      <g strokeWidth="0.75" opacity="0.8">
        <line x1="50" y1="52" x2="35" y2="40" stroke="#ec4899" />
        <line x1="50" y1="52" x2="33" y2="48" stroke="#d946ef" />
        <line x1="50" y1="52" x2="33" y2="56" stroke="#a855f7" />
        <line x1="50" y1="52" x2="35" y2="64" stroke="#6366f1" />
        
        <line x1="50" y1="52" x2="65" y2="40" stroke="#3b82f6" />
        <line x1="50" y1="52" x2="67" y2="48" stroke="#06b6d4" />
        <line x1="50" y1="52" x2="67" y2="56" stroke="#10b981" />
        <line x1="50" y1="52" x2="65" y2="64" stroke="#22c55e" />
      </g>

      {/* Central triangle outline */}
      <polygon
        points="50 44, 59 60, 41 60"
        stroke="#ffffff"
        strokeWidth="1.5"
        fill="#121212"
      />
      {/* Inner cutout triangle */}
      <polygon
        points="50 50, 55 58, 45 58"
        fill="#222"
      />
      
      {/* Sleeve logo details */}
      <polygon
        points="78 32, 80 34, 78 35"
        fill="#ffffff"
        opacity="0.8"
      />
    </svg>
  </div>
);

export const CowboyHatGraphic = () => (
  <div className="w-4/5 max-w-[280px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className="w-full h-full text-zinc-800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hat Crown */}
      <path
        d="M25 52C25 38 32 30 50 30C68 30 75 38 75 52C67 52 50 50 50 50C50 50 33 52 25 52Z"
        fill="#0f0f11"
        stroke="#222"
        strokeWidth="1.2"
      />
      {/* Crown crease depth */}
      <path
        d="M38 31C43 33 47 34 50 34C53 34 57 33 62 31C58 29 54 28 50 28C46 28 42 29 38 31Z"
        fill="#060608"
      />
      {/* Embossed Logo on Crown */}
      <polygon
        points="50 38, 55 45, 45 45"
        fill="#060608"
        stroke="#1a1a1f"
        strokeWidth="0.5"
      />
      <polygon
        points="50 41, 52 44, 48 44"
        fill="#0f0f11"
      />
      {/* Hat Ribbon (Black) */}
      <path
        d="M26 49C26 49 35 47 50 47C65 47 74 49 74 49C74 49 73 52 50 52C27 52 26 49 26 49Z"
        fill="#060608"
        stroke="#111"
        strokeWidth="0.5"
      />
      {/* Hat Brim */}
      <path
        d="M10 52C25 52 35 56 50 56C65 56 75 52 90 52C95 56 85 64 50 64C15 64 5 56 10 52Z"
        fill="#0f0f11"
        stroke="#222"
        strokeWidth="1.2"
      />
      {/* Brim shadow/depth */}
      <path
        d="M15 54C28 54 38 57 50 57C62 57 72 54 85 54C80 58 65 62 50 62C35 62 20 58 15 54Z"
        fill="#060608"
      />
    </svg>
  </div>
);

export const KeyboardGraphic = () => (
  <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden group">
    {/* Reflective background */}
    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/50 to-zinc-950" />
    <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-l from-zinc-700/10 to-transparent skew-x-12 opacity-60" />
    <div className="absolute bottom-0 left-10 w-24 h-12 bg-blue-500/5 blur-xl rounded-full" />
    
    {/* Perspective Keyboard Side View */}
    <svg
      viewBox="0 0 100 60"
      fill="none"
      className="w-[85%] h-auto z-10 drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="52" rx="45" ry="6" fill="#08080a" opacity="0.8" />
      
      {/* Keyboard Case */}
      <path
        d="M15 40 L75 22 L85 24 L25 43 Z"
        fill="#f4f4f5"
      />
      <path
        d="M15 40 L25 43 L25 46 L15 43 Z"
        fill="#e4e4e7"
      />
      <path
        d="M25 43 L85 24 L85 27 L25 46 Z"
        fill="#d4d4d8"
      />
      
      {/* Embossed Logo on Side Profile */}
      <polygon
        points="55 35, 59 33, 57 37"
        fill="#a1a1aa"
        opacity="0.7"
      />
      
      {/* Keycaps */}
      <path d="M19 38 L73 22 L75 23 L21 39 Z" fill="#ffffff" />
      <path d="M22 39 L75 23 L77 24 L24 40 Z" fill="#f4f4f5" />
      <path d="M25 40 L77 24 L79 25 L27 41 Z" fill="#e4e4e7" />
      
      {/* Key separation lines */}
      <path d="M25 36 L27 38" stroke="#d4d4d8" strokeWidth="0.5" />
      <path d="M33 34 L35 36" stroke="#d4d4d8" strokeWidth="0.5" />
      <path d="M42 31 L44 33" stroke="#d4d4d8" strokeWidth="0.5" />
      <path d="M51 28 L53 30" stroke="#d4d4d8" strokeWidth="0.5" />
      <path d="M60 26 L62 28" stroke="#d4d4d8" strokeWidth="0.5" />
      
      <path d="M15 40 L75 22" stroke="#a1a1aa" strokeWidth="0.5" />
    </svg>
  </div>
);

export const ShoesGraphic = () => (
  <div className="w-3/5 max-w-[220px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shoe Upper (Bright Blue) */}
      <path
        d="M15 55 C15 55, 25 38, 55 38 C70 38, 80 48, 85 52 C85 52, 90 53, 90 56 L90 62 L15 62 Z"
        fill="#2563eb"
      />
      {/* White Trim / Collar */}
      <path
        d="M25 46 C35 38, 48 38, 55 38 C56 38, 58 40, 56 42 C52 48, 40 50, 25 46 Z"
        fill="#ffffff"
      />
      {/* White Sole */}
      <path
        d="M13 62 C13 62, 50 62, 90 62 C92 62, 93 63, 92 65 C90 67, 85 68, 50 68 C15 68, 11 67, 11 65 C11 63, 12 62, 13 62 Z"
        fill="#ffffff"
      />
      {/* Sole detail */}
      <path
        d="M12 65 L92 65"
        stroke="#e4e4e7"
        strokeWidth="0.5"
      />
      {/* Acme logo triangle */}
      <polygon
        points="22 53, 25 57, 19 57"
        fill="#ffffff"
      />
      {/* Elastic detail */}
      <path
        d="M58 43 L63 50"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// Card 10: Acme Rainbow Sticker custom component
const RainbowStickerGraphic = () => (
  <div className="w-4/5 max-w-[260px] aspect-square flex items-center justify-center p-4 bg-black">
    {/* Outer circle with gradient watercolor background */}
    <div className="w-full h-full rounded-full bg-gradient-to-tr from-emerald-300 via-cyan-200 to-purple-400 shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center relative aspect-square">
      {/* Inner thin black border */}
      <div className="absolute inset-3 rounded-full border-2 border-black/20 pointer-events-none" />
      {/* Black Acme logo */}
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-zinc-900 drop-shadow-sm"
      >
        <polygon points="12 4, 22 20, 2 20" />
      </svg>
    </div>
  </div>
);

// Card 11: Acme Cap custom component
const CapGraphic = () => (
  <div className="w-3/5 max-w-[220px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 120 100"
      fill="none"
      className="w-full h-full text-zinc-800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cap Crown (Panels) */}
      <path
        d="M20 70 C20 40, 35 25, 65 25 C95 25, 100 45, 100 70 Z"
        fill="#121212"
        stroke="#222"
        strokeWidth="1.2"
      />
      {/* Panel seams */}
      <path d="M65 25 C60 40, 50 60, 45 70" stroke="#1c1c1f" strokeWidth="1" />
      <path d="M65 25 C70 40, 80 60, 85 70" stroke="#1c1c1f" strokeWidth="1" />
      
      {/* White Acme logo on front panel */}
      <polygon
        points="60 40, 68 54, 52 54"
        fill="#ffffff"
      />
      <polygon
        points="60 45, 64 52, 56 52"
        fill="#121212"
      />
      
      {/* Cap Visor / Brim */}
      <path
        d="M10 72 C25 64, 55 64, 75 72 C55 80, 25 80, 10 72 Z"
        fill="#08080a"
        stroke="#18181b"
        strokeWidth="1"
      />
      {/* Visor shadow */}
      <path
        d="M20 71 C35 68, 55 68, 65 71 C55 74, 35 74, 20 71 Z"
        fill="#020202"
      />
      {/* Small top button */}
      <circle cx="65" cy="24" r="3" fill="#18181b" />
    </svg>
  </div>
);

// Card 12: Acme Doq Sweater custom component
const DogSweaterGraphic = () => (
  <div className="w-3/5 max-w-[220px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dog Head */}
      <path
        d="M45 15 L52 8 L58 13 L60 22 C62 25, 68 28, 72 26 L76 30 C76 30, 78 34, 75 36 C70 40, 60 40, 55 35 L45 35 Z"
        fill="#e0853c"
      />
      {/* Dog Ear Inner */}
      <polygon points="50 11, 52 8, 54 11" fill="#fca5a5" />
      {/* Dog Cheek */}
      <path
        d="M62 30 C65 32, 72 32, 74 30 L74 32 C70 36, 62 36, 60 33 Z"
        fill="#ffffff"
      />
      {/* Dog Nose & Eye */}
      <circle cx="75" cy="30" r="1.5" fill="#000000" />
      <circle cx="62" cy="22" r="1" fill="#000000" />
      
      {/* Dog Body wearing Black Sweater */}
      <path
        d="M42 35 C45 32, 50 35, 55 35 C60 42, 64 54, 66 65 L48 65 C45 54, 43 45, 42 35 Z"
        fill="#121212"
        stroke="#222"
        strokeWidth="1"
      />
      {/* Sweater Collar */}
      <path
        d="M42 35 C42 35, 48 37, 55 35 C56 38, 54 41, 48 40 C44 39, 42 35, 42 35 Z"
        fill="#1a1a1e"
      />
      {/* Little black triangle logo */}
      <polygon
        points="52 46, 56 52, 48 52"
        fill="#222"
      />
      
      {/* Dog Legs & Tail */}
      <path
        d="M48 65 L48 85 L54 85 L54 65 Z"
        fill="#ffffff"
      />
      <path
        d="M60 65 L60 85 L66 85 L66 65 Z"
        fill="#e0853c"
      />
      <path
        d="M36 68 C34 72, 36 85, 42 85 C44 85, 46 80, 44 72 Z"
        fill="#e0853c"
      />
      <path
        d="M36 68 C30 65, 25 58, 28 55 C30 55, 33 60, 36 65 Z"
        fill="#e0853c"
      />
    </svg>
  </div>
);

// Card 14: Acme Bomber Jacket custom component
const BomberJacketGraphic = () => (
  <div className="w-3/5 max-w-[220px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Jacket Body (Olive Green / Khaki) */}
      <path
        d="M30 20 L38 20 C42 24, 58 24, 62 20 L70 20 L88 38 L76 46 L76 85 L24 85 L24 46 L12 38 Z"
        fill="#6b705c"
        stroke="#4f5243"
        strokeWidth="1.5"
      />
      {/* Black collar */}
      <path
        d="M38 20 C42 24, 58 24, 62 20 L50 24 Z"
        fill="#121212"
      />
      {/* Front zipper */}
      <line x1="50" y1="24" x2="50" y2="85" stroke="#121212" strokeWidth="2.5" />
      <line x1="50" y1="24" x2="50" y2="85" stroke="#a1a1aa" strokeWidth="0.75" strokeDasharray="2 1" />
      
      {/* Black Cuffs */}
      <path d="M12 38 L15 35 L20 40 L17 43 Z" fill="#121212" />
      <path d="M88 38 L85 35 L80 40 L83 43 Z" fill="#121212" />
      {/* Black waistband */}
      <path d="M24 80 L76 80 L76 85 L24 85 Z" fill="#121212" />
      
      {/* pockets */}
      <path d="M30 65 L38 60" stroke="#4f5243" strokeWidth="1.5" />
      <path d="M70 65 L62 60" stroke="#4f5243" strokeWidth="1.5" />
      
      {/* Black Acme logo */}
      <polygon
        points="62 38, 66 45, 58 45"
        fill="#121212"
      />
      <polygon
        points="62 41, 64 44, 60 44"
        fill="#6b705c"
      />
    </svg>
  </div>
);

// Card 18: Acme Pacifier custom component
const PacifierGraphic = () => (
  <div className="w-3/5 max-w-[220px] aspect-square flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Nipple / Teat (Soft glowing yellow) */}
      <path
        d="M50 20 C42 20, 36 28, 40 40 C44 40, 56 40, 60 40 C64 28, 58 20, 50 20 Z"
        fill="#fde047"
        opacity="0.85"
      />
      <path
        d="M45 28 C48 24, 52 24, 55 28"
        stroke="#fef08a"
        strokeWidth="1.5"
      />
      
      {/* Shield / Guard */}
      <path
        d="M20 52 C20 42, 35 48, 50 48 C65 48, 80 42, 80 52 C80 62, 65 56, 50 56 C35 56, 20 62, 20 52 Z"
        fill="#1e293b"
        stroke="#334155"
        strokeWidth="1.5"
      />
      
      {/* ventilation holes */}
      <circle cx="32" cy="52" r="3" fill="#000000" opacity="0.4" />
      <circle cx="68" cy="52" r="3" fill="#000000" opacity="0.4" />
      
      {/* Center cap */}
      <circle cx="50" cy="52" r="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <polygon
        points="50 47, 54 55, 46 55"
        fill="#000000"
      />
      
      {/* Handle / Ring */}
      <path
        d="M38 56 C38 72, 62 72, 62 56"
        stroke="#334155"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M38 56 C38 72, 62 72, 62 56"
        stroke="#475569"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// Export PRODUCTS so other pages can load them
export const PRODUCTS = [
  {
    id: "sticker-1",
    name: "Acme Sticker",
    price: "$4.00 USD",
    priceNumeric: 4.0,
    category: "stickers",
    isSticker: true,
    isNew: false,
    isTrending: true,
  },
  {
    id: "mug-1",
    name: "Acme Mug",
    price: "$15.00 USD",
    priceNumeric: 15.0,
    category: "drinkware",
    image: "/mug.png",
    isNew: true,
    isTrending: true,
  },
  {
    id: "tshirt-circles",
    name: "Acme Circles T-Shirt",
    price: "$20.00 USD",
    priceNumeric: 20.0,
    category: "shirts",
    image: "/tshirt.png",
    isNew: false,
    isTrending: true,
  },
  {
    id: "prism-tshirt",
    name: "Acme Prism T-Shirt",
    price: "$25.00 USD",
    priceNumeric: 25.0,
    category: "shirts",
    isPrismTshirt: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "cowboy-hat",
    name: "Acme Cowboy Hat",
    price: "$160.00 USD",
    priceNumeric: 160.0,
    category: "headwear",
    isCowboyHat: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "keyboard-1",
    name: "Acme Keyboard",
    price: "$150.00 USD",
    priceNumeric: 150.0,
    category: "electronics",
    isKeyboard: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "tshirt-model",
    name: "Acme T-Shirt",
    price: "$20.00 USD",
    priceNumeric: 20.0,
    category: "shirts",
    image: "/tshirt.png",
    isNew: false,
    isTrending: false,
  },
  {
    id: "hoodie-1",
    name: "Acme Hoodie",
    price: "$50.00 USD",
    priceNumeric: 50.0,
    category: "hoodies",
    image: "/hoodie.png",
    isNew: false,
    isTrending: true,
  },
  {
    id: "shoes-1",
    name: "Acme Slip-On Shoes",
    price: "$45.00 USD",
    priceNumeric: 45.0,
    category: "footware",
    isShoes: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "rainbow-sticker",
    name: "Acme Rainbow Sticker",
    price: "$4.00 USD",
    priceNumeric: 4.0,
    category: "stickers",
    isRainbowSticker: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "cap-1",
    name: "Acme Cap",
    price: "$20.00 USD",
    priceNumeric: 20.0,
    category: "headwear",
    isCap: true,
    isNew: false,
    isTrending: false,
  },
  {
    id: "dog-sweater",
    name: "Acme Dog Sweater",
    price: "$20.00 USD",
    priceNumeric: 20.0,
    category: "pets",
    isDogSweater: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "cup-1",
    name: "Acme Cup",
    price: "$15.00 USD",
    priceNumeric: 15.0,
    category: "drinkware",
    image: "/cup.png",
    isNew: false,
    isTrending: false,
  },
  {
    id: "bomber-jacket",
    name: "Acme Bomber Jacket",
    price: "$50.00 USD",
    priceNumeric: 50.0,
    category: "jackets",
    isBomberJacket: true,
    isNew: true,
    isTrending: false,
  },
  {
    id: "babycap-1",
    name: "Acme Baby Cap",
    price: "$10.00 USD",
    priceNumeric: 10.0,
    category: "headwear",
    image: "/babycap.png",
    isNew: false,
    isTrending: false,
  },
  {
    id: "onesie-1",
    name: "Acme Baby Onesie",
    price: "$10.00 USD",
    priceNumeric: 10.0,
    category: "kids",
    image: "/onesie.png",
    isNew: false,
    isTrending: false,
  },
  {
    id: "bag-1",
    name: "Acme Drawstring Bag",
    price: "$12.00 USD",
    priceNumeric: 12.0,
    category: "bags",
    image: "/bag.png",
    isNew: false,
    isTrending: false,
  },
  {
    id: "pacifier-1",
    name: "Acme Pacifier",
    price: "$10.00 USD",
    priceNumeric: 10.0,
    category: "kids",
    isPacifier: true,
    isNew: true,
    isTrending: false,
  },
];

// Sidebar link configurations
const COLLECTIONS = [
  { id: "all", label: "All" },
  { id: "bags", label: "Bags" },
  { id: "drinkware", label: "Drinkware" },
  { id: "electronics", label: "Electronics" },
  { id: "footware", label: "Footware" },
  { id: "headwear", label: "Headwear" },
  { id: "hoodies", label: "Hoodies" },
  { id: "jackets", label: "Jackets" },
  { id: "kids", label: "Kids" },
  { id: "pets", label: "Pets" },
  { id: "shirts", label: "Shirts" },
  { id: "stickers", label: "Stickers" },
];

const SORT_OPTIONS = [
  { id: "relevance", label: "Relevance" },
  { id: "trending", label: "Trending" },
  { id: "latest", label: "Latest arrivals" },
  { id: "price-asc", label: "Price: Low to high" },
  { id: "price-desc", label: "Price: High to low" },
];

export default function ProductCatalog({ defaultCategory }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 1. Determine active category
  const activeCategory = useMemo(() => {
    const queryCategory = searchParams.get("category");
    if (queryCategory) return queryCategory.toLowerCase();

    if (pathname.includes("/shirts")) return "shirts";
    if (pathname.includes("/stickers")) return "stickers";
    if (pathname.includes("/all")) return "all";

    return defaultCategory.toLowerCase();
  }, [searchParams, pathname, defaultCategory]);

  // 2. Determine sorting option
  const activeSort = useMemo(() => {
    return searchParams.get("sort") || "relevance";
  }, [searchParams]);

  // 3. Determine search query
  const searchQuery = useMemo(() => {
    return searchParams.get("q") || "";
  }, [searchParams]);

  // Helper function to build collection/sort URLs
  const createQueryUrl = (category, sort, q) => {
    const params = new URLSearchParams();
    
    if (category && category !== "all") {
      params.set("category", category);
    }

    if (sort && sort !== "relevance") {
      params.set("sort", sort);
    }

    if (q) {
      params.set("q", q);
    }

    let path = "/all";
    if (category === "shirts" && !q) {
      path = "/shirts";
      params.delete("category");
    } else if (category === "stickers" && !q) {
      path = "/stickers";
      params.delete("category");
    } else if (q) {
      path = "/search";
    }

    const queryString = params.toString();
    return queryString ? `${path}?${queryString}` : path;
  };

  // 4. Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory && activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (activeSort === "price-asc") {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (activeSort === "latest") {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (activeSort === "trending") {
      result.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
    }

    return result;
  }, [activeCategory, searchQuery, activeSort]);

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 lg:px-6 py-8 transition-colors duration-200">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar: Collections */}
        <aside className="w-full lg:w-40 shrink-0 flex flex-col gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              Collections
            </h2>
            <nav className="flex flex-row lg:flex-col flex-wrap gap-2.5 text-sm">
              {COLLECTIONS.map((c) => {
                const isActive = activeCategory === c.id;
                return (
                  <Link
                    key={c.id}
                    href={createQueryUrl(c.id, activeSort, searchQuery)}
                    className={`transition-colors whitespace-nowrap lg:w-fit ${
                      isActive
                        ? "text-white font-semibold underline underline-offset-4 decoration-white/70"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {c.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Middle Content: Product Grid */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-900 bg-[#121212]/30 hover:border-blue-600 transition-all duration-300 flex items-center justify-center animate-in fade-in duration-300"
                >
                  {p.isSticker ? (
                    // Custom aesthetic sticker card
                    <div className="relative w-full h-full flex items-center justify-center p-12 bg-black">
                      <div className="w-full h-full flex items-center justify-center rounded-xl bg-zinc-900 shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-white"
                        >
                          <polygon points="12 4, 22 20, 2 20" />
                        </svg>
                      </div>
                    </div>
                  ) : p.isKeyboard ? (
                    // Custom mechanical keyboard card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <KeyboardGraphic />
                    </div>
                  ) : p.isCowboyHat ? (
                    // Custom cowboy hat card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <CowboyHatGraphic />
                    </div>
                  ) : p.isPrismTshirt ? (
                    // Custom prism t-shirt card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <PrismTshirtGraphic />
                    </div>
                  ) : p.isShoes ? (
                    // Custom slip-on shoes card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <ShoesGraphic />
                    </div>
                  ) : p.isRainbowSticker ? (
                    // Custom rainbow sticker card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <RainbowStickerGraphic />
                    </div>
                  ) : p.isCap ? (
                    // Custom cap card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <CapGraphic />
                    </div>
                  ) : p.isDogSweater ? (
                    // Custom dog sweater card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <DogSweaterGraphic />
                    </div>
                  ) : p.isBomberJacket ? (
                    // Custom bomber jacket card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <BomberJacketGraphic />
                    </div>
                  ) : p.isPacifier ? (
                    // Custom pacifier card
                    <div className="relative w-full h-full flex items-center justify-center p-4 bg-black">
                      <PacifierGraphic />
                    </div>
                  ) : (
                    // Standard product image
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <Image
                        src={p.image || "/tshirt.png"}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Price Pill Badge Overlay at bottom-left */}
                  <div className="absolute bottom-4 left-4 flex items-center rounded-full border border-zinc-800 bg-black/75 p-1 pl-4 pr-1 backdrop-blur-md">
                    <span className="text-[11px] font-semibold text-white truncate max-w-[120px] md:max-w-[150px]">
                      {p.name}
                    </span>
                    <span className="ml-4 rounded-full bg-blue-600 px-3 py-1.5 text-[10px] font-bold text-white whitespace-nowrap">
                      {p.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-zinc-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="text-sm">No products found matching your criteria.</p>
            </div>
          )}
        </main>

        {/* Right Sidebar: Sort By */}
        <aside className="w-full lg:w-40 shrink-0 flex flex-col gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              Sort by
            </h2>
            <nav className="flex flex-row lg:flex-col flex-wrap gap-2.5 text-sm">
              {SORT_OPTIONS.map((o) => {
                const isActive = activeSort === o.id;
                return (
                  <Link
                    key={o.id}
                    href={createQueryUrl(activeCategory, o.id, searchQuery)}
                    className={`transition-colors whitespace-nowrap lg:w-fit ${
                      isActive
                        ? "text-white font-semibold underline underline-offset-4 decoration-white/70"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {o.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

      </div>
    </div>
  );
}
