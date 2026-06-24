"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import {
  PRODUCTS,
  PrismTshirtGraphic,
  CowboyHatGraphic,
  KeyboardGraphic,
  ShoesGraphic,
} from "../../components/ProductCatalog";

/* ────────────────────────────────────────────────────────────
   Per-product extra data (colours, description, gallery count)
   ──────────────────────────────────────────────────────────── */
const PRODUCT_EXTRAS = {
  "tshirt-circles": {
    colors: ["Black", "White", "Blue"],
    unavailableColors: [],
    description:
      "60% combed ringspun cotton / 40% polyester jersey tee. Soft, breathable and built to last — features our signature circle motif printed in high-detail.",
    hasSizes: true,
    unavailableSizes: ["XS", "XXXL"],
  },
  "prism-tshirt": {
    colors: ["Black", "Charcoal"],
    unavailableColors: ["Charcoal"],
    description:
      "Premium 100% ringspun cotton. The Prism T-Shirt carries a hand-screen-printed iridescent triangle on the chest that catches light at every angle.",
    hasSizes: true,
    unavailableSizes: ["XS", "S", "XXXL"],
  },
  "tshirt-model": {
    colors: ["Black", "White", "Navy"],
    unavailableColors: ["Navy"],
    description:
      "Classic Acme tee. Ultra-soft 100% cotton construction with a relaxed fit that works for any occasion.",
    hasSizes: true,
    unavailableSizes: ["XXXL"],
  },
  "hoodie-1": {
    colors: ["Black", "Grey"],
    unavailableColors: [],
    description:
      "Heavyweight 400gsm fleece hoodie with a kangaroo pocket and embroidered Acme logo. Stays warm, stays sharp.",
    hasSizes: true,
    unavailableSizes: ["XS", "XXL", "XXXL"],
  },
  "bomber-jacket": {
    colors: ["Olive", "Black"],
    unavailableColors: ["Black"],
    description:
      "Military-grade nylon outer with a silky bomber lining. Ribbed cuffs and waistband keep things snug. Acme logo patch on the left chest.",
    hasSizes: true,
    unavailableSizes: ["XS", "S"],
  },
  "cowboy-hat": {
    colors: ["Black"],
    unavailableColors: [],
    description:
      "Hand-stitched premium felt cowboy hat with a custom Acme embossed crown. One size fits most, adjustable inner band.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "cap-1": {
    colors: ["Black", "White"],
    unavailableColors: ["White"],
    description:
      "6-panel structured cap with a pre-curved brim and embroidered Acme triangle on the front panel.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "keyboard-1": {
    colors: ["White", "Space Grey"],
    unavailableColors: ["Space Grey"],
    description:
      "Compact 75% mechanical keyboard with hot-swappable switches, PBT doubleshot keycaps, and a polycarbonate case that produces an unrivalled typing sound.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "shoes-1": {
    colors: ["Blue/White", "All White", "All Black"],
    unavailableColors: ["All Black"],
    description:
      "Slip-on sneakers with a vulcanised rubber sole and canvas upper. Lightweight, versatile and proudly bearing the Acme triangle on the lateral side.",
    hasSizes: true,
    unavailableSizes: ["XS", "XXXL"],
  },
  "sticker-1": {
    colors: ["Black"],
    unavailableColors: [],
    description:
      "Die-cut vinyl Acme sticker. UV-resistant, waterproof and 3-year outdoor rated. Ships in a protective sleeve.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "rainbow-sticker": {
    colors: ["Rainbow"],
    unavailableColors: [],
    description:
      "Holographic rainbow sticker — iridescent finish that shifts colour in the light. Same tough vinyl construction as all our stickers.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "mug-1": {
    colors: ["Black", "White"],
    unavailableColors: [],
    description:
      "11oz ceramic mug with a gloss finish and the Acme triangle printed in high-resolution. Dishwasher safe.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "cup-1": {
    colors: ["Black"],
    unavailableColors: [],
    description:
      "Insulated stainless steel travel cup with a leak-proof lid. Keeps cold drinks cold for 24 hours.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "dog-sweater": {
    colors: ["Black", "Navy"],
    unavailableColors: ["Navy"],
    description:
      "Cosy knit sweater for dogs. Stretchy ribbed fabric for a snug fit. Available in three sizes — check the size guide.",
    hasSizes: true,
    unavailableSizes: ["XL", "XXL", "XXXL"],
  },
  "bag-1": {
    colors: ["Black", "White"],
    unavailableColors: [],
    description:
      "Lightweight drawstring bag crafted from recycled polyester. Fits a 15\u201d laptop and has a hidden zip pocket on the back.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "babycap-1": {
    colors: ["White", "Pink", "Blue"],
    unavailableColors: ["Pink"],
    description:
      "Soft cotton baby cap with an adjustable velcro strap. Printed Acme logo on the front.",
    hasSizes: false,
    unavailableSizes: [],
  },
  "onesie-1": {
    colors: ["White", "Yellow"],
    unavailableColors: ["Yellow"],
    description:
      "100% organic cotton baby onesie. Snap buttons at the bottom for easy changes. Acme triangle embroidered on the chest.",
    hasSizes: true,
    unavailableSizes: ["XL", "XXL", "XXXL"],
  },
  "pacifier-1": {
    colors: ["Yellow", "Blue"],
    unavailableColors: [],
    description:
      "BPA-free silicone pacifier with a ventilated shield and orthodontic nipple. The Acme design is moulded in, never painted on.",
    hasSizes: false,
    unavailableSizes: [],
  },
};

const DEFAULT_EXTRAS = {
  colors: ["Black"],
  unavailableColors: [],
  description: "Premium Acme product — designed with purpose, built to last.",
  hasSizes: false,
  unavailableSizes: [],
};

const getColorFilter = (color) => {
  const c = color.toLowerCase();
  if (c === "black") return "";
  if (c === "white") return "invert(0.9) brightness(1.2)";
  if (c === "blue") return "sepia(1) saturate(10) hue-rotate(185deg) brightness(0.6) contrast(1.2)";
  if (c === "grey" || c === "gray") return "brightness(1.5) contrast(0.8)";
  if (c === "charcoal") return "brightness(0.6) contrast(1.2)";
  if (c === "olive") return "sepia(0.8) saturate(2) hue-rotate(45deg) brightness(0.7) contrast(1.2)";
  if (c === "space grey") return "brightness(0.8) contrast(1.1)";
  if (c === "blue/white") return "sepia(0.5) saturate(5) hue-rotate(185deg) brightness(0.8)";
  if (c === "all white") return "invert(0.9) brightness(1.2)";
  if (c === "all black") return "brightness(0.5)";
  if (c === "rainbow") return "hue-rotate(90deg)";
  if (c === "yellow") return "sepia(1) saturate(10) hue-rotate(10deg) brightness(0.9) contrast(1.2)";
  if (c === "pink") return "sepia(1) saturate(5) hue-rotate(290deg) brightness(0.8) contrast(1.2)";
  return "";
};

/* ────────────────────────────────────────────────────────────
   Detail graphic renderer (same as before + extra variants)
   ──────────────────────────────────────────────────────────── */
function DetailGraphic({ product, color }) {
  const filterStyle = color ? getColorFilter(color) : "";

  if (product.isSticker)
    return (
      <div className="w-full h-full flex items-center justify-center p-12 bg-black">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-40 w-40 text-white" style={{ filter: filterStyle }}>
          <polygon points="12 4, 22 20, 2 20" />
        </svg>
      </div>
    );

  if (product.isRainbowSticker)
    return (
      <div className="w-full h-full flex items-center justify-center p-12 bg-black">
        <div className="w-4/5 rounded-full bg-gradient-to-tr from-emerald-300 via-cyan-200 to-purple-400 flex items-center justify-center relative aspect-square shadow-2xl" style={{ filter: filterStyle }}>
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-24 w-24 text-zinc-900">
            <polygon points="12 4, 22 20, 2 20" />
          </svg>
        </div>
      </div>
    );

  if (product.isKeyboard)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden" style={{ filter: filterStyle }}>
        <KeyboardGraphic />
      </div>
    );

  if (product.isCowboyHat)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center" style={{ filter: filterStyle }}>
        <CowboyHatGraphic />
      </div>
    );

  if (product.isPrismTshirt)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center" style={{ filter: filterStyle }}>
        <PrismTshirtGraphic />
      </div>
    );

  if (product.isShoes)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center" style={{ filter: filterStyle }}>
        <ShoesGraphic />
      </div>
    );

  if (product.isCap)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 120 100" fill="none" className="w-3/5 h-3/5 text-zinc-800" style={{ filter: filterStyle }}>
          <path d="M20 70 C20 40, 35 25, 65 25 C95 25, 100 45, 100 70 Z" fill="#121212" stroke="#222" strokeWidth="1.2" />
          <path d="M65 25 C60 40, 50 60, 45 70" stroke="#1c1c1f" strokeWidth="1" />
          <path d="M65 25 C70 40, 80 60, 85 70" stroke="#1c1c1f" strokeWidth="1" />
          <polygon points="60 40, 68 54, 52 54" fill="#ffffff" />
          <polygon points="60 45, 64 52, 56 52" fill="#121212" />
          <path d="M10 72 C25 64, 55 64, 75 72 C55 80, 25 80, 10 72 Z" fill="#08080a" stroke="#18181b" strokeWidth="1" />
          <circle cx="65" cy="24" r="3" fill="#18181b" />
        </svg>
      </div>
    );

  if (product.isDogSweater)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5" style={{ filter: filterStyle }}>
          <path d="M45 15 L52 8 L58 13 L60 22 C62 25, 68 28, 72 26 L76 30 C76 30, 78 34, 75 36 C70 40, 60 40, 55 35 L45 35 Z" fill="#e0853c" />
          <polygon points="50 11, 52 8, 54 11" fill="#fca5a5" />
          <path d="M62 30 C65 32, 72 32, 74 30 L74 32 C70 36, 62 36, 60 33 Z" fill="#ffffff" />
          <circle cx="75" cy="30" r="1.5" fill="#000000" />
          <circle cx="62" cy="22" r="1" fill="#000000" />
          <path d="M42 35 C45 32, 50 35, 55 35 C60 42, 64 54, 66 65 L48 65 C45 54, 43 45, 42 35 Z" fill="#121212" stroke="#222" strokeWidth="1" />
          <path d="M42 35 C42 35, 48 37, 55 35 C56 38, 54 41, 48 40 C44 39, 42 35, 42 35 Z" fill="#1a1a1e" />
          <polygon points="52 46, 56 52, 48 52" fill="#222" />
          <path d="M48 65 L48 85 L54 85 L54 65 Z" fill="#ffffff" />
          <path d="M60 65 L60 85 L66 85 L66 65 Z" fill="#e0853c" />
          <path d="M36 68 C34 72, 36 85, 42 85 C44 85, 46 80, 44 72 Z" fill="#e0853c" />
          <path d="M36 68 C30 65, 25 58, 28 55 C30 55, 33 60, 36 65 Z" fill="#e0853c" />
        </svg>
      </div>
    );

  if (product.isBomberJacket)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5" style={{ filter: filterStyle }}>
          <path d="M30 20 L38 20 C42 24, 58 24, 62 20 L70 20 L88 38 L76 46 L76 85 L24 85 L24 46 L12 38 Z" fill="#6b705c" stroke="#4f5243" strokeWidth="1.5" />
          <path d="M38 20 C42 24, 58 24, 62 20 L50 24 Z" fill="#121212" />
          <line x1="50" y1="24" x2="50" y2="85" stroke="#121212" strokeWidth="2.5" />
          <line x1="50" y1="24" x2="50" y2="85" stroke="#a1a1aa" strokeWidth="0.75" strokeDasharray="2 1" />
          <path d="M12 38 L15 35 L20 40 L17 43 Z" fill="#121212" />
          <path d="M88 38 L85 35 L80 40 L83 43 Z" fill="#121212" />
          <path d="M24 80 L76 80 L76 85 L24 85 Z" fill="#121212" />
          <polygon points="62 38, 66 45, 58 45" fill="#121212" />
          <polygon points="62 41, 64 44, 60 44" fill="#6b705c" />
        </svg>
      </div>
    );

  if (product.isPacifier)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5" style={{ filter: filterStyle }}>
          <path d="M50 20 C42 20, 36 28, 40 40 C44 40, 56 40, 60 40 C64 28, 58 20, 50 20 Z" fill="#fde047" opacity="0.85" />
          <path d="M45 28 C48 24, 52 24, 55 28" stroke="#fef08a" strokeWidth="1.5" />
          <path d="M20 52 C20 42, 35 48, 50 48 C65 48, 80 42, 80 52 C80 62, 65 56, 50 56 C35 56, 20 62, 20 52 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          <circle cx="32" cy="52" r="3" fill="#000000" opacity="0.4" />
          <circle cx="68" cy="52" r="3" fill="#000000" opacity="0.4" />
          <circle cx="50" cy="52" r="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <polygon points="50 47, 54 55, 46 55" fill="#000000" />
          <path d="M38 56 C38 72, 62 72, 62 56" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M38 56 C38 72, 62 72, 62 56" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  if (product.isSticker)
    return (
      <div className="w-full h-full flex items-center justify-center p-12 bg-black">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-40 w-40 text-white">
          <polygon points="12 4, 22 20, 2 20" />
        </svg>
      </div>
    );

  if (product.isRainbowSticker)
    return (
      <div className="w-full h-full flex items-center justify-center p-12 bg-black">
        <div className="w-4/5 rounded-full bg-gradient-to-tr from-emerald-300 via-cyan-200 to-purple-400 flex items-center justify-center relative aspect-square shadow-2xl">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-24 w-24 text-zinc-900">
            <polygon points="12 4, 22 20, 2 20" />
          </svg>
        </div>
      </div>
    );

  if (product.isKeyboard)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
        <KeyboardGraphic />
      </div>
    );

  if (product.isCowboyHat)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <CowboyHatGraphic />
      </div>
    );

  if (product.isPrismTshirt)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <PrismTshirtGraphic />
      </div>
    );

  if (product.isShoes)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <ShoesGraphic />
      </div>
    );

  if (product.isCap)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 120 100" fill="none" className="w-3/5 h-3/5 text-zinc-800">
          <path d="M20 70 C20 40, 35 25, 65 25 C95 25, 100 45, 100 70 Z" fill="#121212" stroke="#222" strokeWidth="1.2" />
          <path d="M65 25 C60 40, 50 60, 45 70" stroke="#1c1c1f" strokeWidth="1" />
          <path d="M65 25 C70 40, 80 60, 85 70" stroke="#1c1c1f" strokeWidth="1" />
          <polygon points="60 40, 68 54, 52 54" fill="#ffffff" />
          <polygon points="60 45, 64 52, 56 52" fill="#121212" />
          <path d="M10 72 C25 64, 55 64, 75 72 C55 80, 25 80, 10 72 Z" fill="#08080a" stroke="#18181b" strokeWidth="1" />
          <circle cx="65" cy="24" r="3" fill="#18181b" />
        </svg>
      </div>
    );

  if (product.isDogSweater)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M45 15 L52 8 L58 13 L60 22 C62 25, 68 28, 72 26 L76 30 C76 30, 78 34, 75 36 C70 40, 60 40, 55 35 L45 35 Z" fill="#e0853c" />
          <polygon points="50 11, 52 8, 54 11" fill="#fca5a5" />
          <path d="M62 30 C65 32, 72 32, 74 30 L74 32 C70 36, 62 36, 60 33 Z" fill="#ffffff" />
          <circle cx="75" cy="30" r="1.5" fill="#000000" />
          <circle cx="62" cy="22" r="1" fill="#000000" />
          <path d="M42 35 C45 32, 50 35, 55 35 C60 42, 64 54, 66 65 L48 65 C45 54, 43 45, 42 35 Z" fill="#121212" stroke="#222" strokeWidth="1" />
          <path d="M42 35 C42 35, 48 37, 55 35 C56 38, 54 41, 48 40 C44 39, 42 35, 42 35 Z" fill="#1a1a1e" />
          <polygon points="52 46, 56 52, 48 52" fill="#222" />
          <path d="M48 65 L48 85 L54 85 L54 65 Z" fill="#ffffff" />
          <path d="M60 65 L60 85 L66 85 L66 65 Z" fill="#e0853c" />
          <path d="M36 68 C34 72, 36 85, 42 85 C44 85, 46 80, 44 72 Z" fill="#e0853c" />
          <path d="M36 68 C30 65, 25 58, 28 55 C30 55, 33 60, 36 65 Z" fill="#e0853c" />
        </svg>
      </div>
    );

  if (product.isBomberJacket)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M30 20 L38 20 C42 24, 58 24, 62 20 L70 20 L88 38 L76 46 L76 85 L24 85 L24 46 L12 38 Z" fill="#6b705c" stroke="#4f5243" strokeWidth="1.5" />
          <path d="M38 20 C42 24, 58 24, 62 20 L50 24 Z" fill="#121212" />
          <line x1="50" y1="24" x2="50" y2="85" stroke="#121212" strokeWidth="2.5" />
          <line x1="50" y1="24" x2="50" y2="85" stroke="#a1a1aa" strokeWidth="0.75" strokeDasharray="2 1" />
          <path d="M12 38 L15 35 L20 40 L17 43 Z" fill="#121212" />
          <path d="M88 38 L85 35 L80 40 L83 43 Z" fill="#121212" />
          <path d="M24 80 L76 80 L76 85 L24 85 Z" fill="#121212" />
          <polygon points="62 38, 66 45, 58 45" fill="#121212" />
          <polygon points="62 41, 64 44, 60 44" fill="#6b705c" />
        </svg>
      </div>
    );

  if (product.isPacifier)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M50 20 C42 20, 36 28, 40 40 C44 40, 56 40, 60 40 C64 28, 58 20, 50 20 Z" fill="#fde047" opacity="0.85" />
          <path d="M45 28 C48 24, 52 24, 55 28" stroke="#fef08a" strokeWidth="1.5" />
          <path d="M20 52 C20 42, 35 48, 50 48 C65 48, 80 42, 80 52 C80 62, 65 56, 50 56 C35 56, 20 62, 20 52 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          <circle cx="32" cy="52" r="3" fill="#000000" opacity="0.4" />
          <circle cx="68" cy="52" r="3" fill="#000000" opacity="0.4" />
          <circle cx="50" cy="52" r="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <polygon points="50 47, 54 55, 46 55" fill="#000000" />
          <path d="M38 56 C38 72, 62 72, 62 56" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M38 56 C38 72, 62 72, 62 56" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );

  // Standard image fallback
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 bg-black">
      <Image
        src={product.image || "/tshirt.png"}
        alt={product.name}
        fill
        className="object-contain p-6"
        priority
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Small related-product card graphic (mini version)
   ──────────────────────────────────────────────────────────── */
function MiniGraphic({ product, color }) {
  if (product.isSticker)
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12 text-white">
          <polygon points="12 4, 22 20, 2 20" />
        </svg>
      </div>
    );
  if (product.isRainbowSticker)
    return (
      <div className="w-full h-full flex items-center justify-center bg-black p-3">
        <div className="w-full rounded-full bg-gradient-to-tr from-emerald-300 via-cyan-200 to-purple-400 flex items-center justify-center aspect-square">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-zinc-900">
            <polygon points="12 4, 22 20, 2 20" />
          </svg>
        </div>
      </div>
    );
  if (product.isKeyboard)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 60" fill="none" className="w-4/5 h-auto">
          <path d="M15 40 L75 22 L85 24 L25 43 Z" fill="#f4f4f5" />
          <path d="M15 40 L25 43 L25 46 L15 43 Z" fill="#e4e4e7" />
          <path d="M25 43 L85 24 L85 27 L25 46 Z" fill="#d4d4d8" />
        </svg>
      </div>
    );
  if (product.isCowboyHat)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M25 52C25 38 32 30 50 30C68 30 75 38 75 52C67 52 50 50 50 50C50 50 33 52 25 52Z" fill="#0f0f11" />
          <path d="M10 52C25 52 35 56 50 56C65 56 75 52 90 52C95 56 85 64 50 64C15 64 5 56 10 52Z" fill="#0f0f11" />
        </svg>
      </div>
    );
  if (product.isPrismTshirt)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M30 15 L38 15 C41 18 45 20 50 20 C55 20 59 18 62 15 L70 15 L85 30 L74 38 L74 85 L26 85 L26 38 L15 30 Z" fill="#121212" stroke="#333" strokeWidth="1.5" />
          <polygon points="50 44, 59 60, 41 60" stroke="#ffffff" strokeWidth="1.5" fill="#121212" />
        </svg>
      </div>
    );
  if (product.isShoes)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-4/5 h-4/5">
          <path d="M15 55 C15 55, 25 38, 55 38 C70 38, 80 48, 85 52 L90 56 L90 62 L15 62 Z" fill="#2563eb" />
          <path d="M13 62 C13 62, 50 62, 90 62 C92 62, 93 63, 92 65 C90 67, 85 68, 50 68 C15 68, 11 67, 11 65 Z" fill="#ffffff" />
        </svg>
      </div>
    );
  if (product.isCap)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 120 100" fill="none" className="w-4/5 h-4/5">
          <path d="M20 70 C20 40, 35 25, 65 25 C95 25, 100 45, 100 70 Z" fill="#121212" />
          <polygon points="60 40, 68 54, 52 54" fill="#ffffff" />
          <polygon points="60 45, 64 52, 56 52" fill="#121212" />
          <path d="M10 72 C25 64, 55 64, 75 72 C55 80, 25 80, 10 72 Z" fill="#08080a" />
        </svg>
      </div>
    );
  if (product.isDogSweater)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M45 15 L52 8 L58 13 L60 22 C62 25, 68 28, 72 26 L76 30 C76 30, 78 34, 75 36 C70 40, 60 40, 55 35 L45 35 Z" fill="#e0853c" />
          <path d="M42 35 C45 32, 50 35, 55 35 C60 42, 64 54, 66 65 L48 65 C45 54, 43 45, 42 35 Z" fill="#121212" stroke="#222" strokeWidth="1" />
        </svg>
      </div>
    );
  if (product.isBomberJacket)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M30 20 L38 20 C42 24, 58 24, 62 20 L70 20 L88 38 L76 46 L76 85 L24 85 L24 46 L12 38 Z" fill="#6b705c" stroke="#4f5243" strokeWidth="1.5" />
          <line x1="50" y1="24" x2="50" y2="85" stroke="#121212" strokeWidth="2.5" />
        </svg>
      </div>
    );
  if (product.isPacifier)
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" className="w-3/5 h-3/5">
          <path d="M50 20 C42 20, 36 28, 40 40 C44 40, 56 40, 60 40 C64 28, 58 20, 50 20 Z" fill="#fde047" opacity="0.85" />
          <path d="M20 52 C20 42, 35 48, 50 48 C65 48, 80 42, 80 52 C80 62, 65 56, 50 56 C35 56, 20 62, 20 52 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          <circle cx="50" cy="52" r="10" fill="#ffffff" />
          <polygon points="50 47, 54 55, 46 55" fill="#000000" />
        </svg>
      </div>
    );

  // Standard image
  return (
    <div className="relative w-full h-full bg-black">
      <Image
        src={product.image || "/tshirt.png"}
        alt={product.name}
        fill
        className="object-contain p-3"
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Page
   ──────────────────────────────────────────────────────────── */
const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

export default function ProductPage({ params }) {
  const resolvedParams = use(params);
  const { addToCart, openCart } = useCart();

  // Helper to convert names to lowercase hyphenated slugs
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const product = PRODUCTS.find(
    (p) =>
      p.id === resolvedParams.id ||
      slugify(p.name) === resolvedParams.id
  );

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeThumb, setActiveThumb] = useState(0);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/all" className="text-blue-500 hover:underline">
          Back to Catalog
        </Link>
      </div>
    );
  }

  const extras = PRODUCT_EXTRAS[product.id] ?? DEFAULT_EXTRAS;
  const hasSizes = extras.hasSizes;
  const activeColor =
    selectedColor ||
    extras.colors.find((c) => !extras.unavailableColors.includes(c)) ||
    extras.colors[0] ||
    "Black";

  // Thumbnail slots (3) — same graphic, treated as different "views"
  const THUMB_LABELS = ["Front", "Side", "Detail"];

  // Related products: 10 products from the available catalog (excluding current product)
  const relatedFull = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 10);

  const handleAddToCart = () => {
    addToCart(product, hasSizes ? selectedSize : undefined);
    openCart();
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* ── Main product area ── */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── LEFT: Image Gallery ── */}
          <div className="w-full lg:w-[70%] flex flex-col gap-4">

            {/* Main image viewport */}
            <div className="relative w-full aspect-square bg-black overflow-hidden flex items-center justify-center">
              <DetailGraphic product={product} color={activeColor} />

              {/* Arrow navigation pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center bg-black/60 border border-zinc-800/80 rounded-full h-10 px-4 backdrop-blur-md text-zinc-400">
                <button
                  onClick={() => {
                    if (extras.colors.length > 1) {
                      const currentIndex = extras.colors.indexOf(activeColor);
                      const nextIndex = (currentIndex - 1 + extras.colors.length) % extras.colors.length;
                      setSelectedColor(extras.colors[nextIndex]);
                    } else {
                      setActiveThumb((p) => (p - 1 + 3) % 3);
                    }
                  }}
                  className="hover:text-white transition-colors px-2 py-1"
                  aria-label="Previous view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <div className="w-[1px] h-4 bg-zinc-800 mx-2" />
                <button
                  onClick={() => {
                    if (extras.colors.length > 1) {
                      const currentIndex = extras.colors.indexOf(activeColor);
                      const nextIndex = (currentIndex + 1) % extras.colors.length;
                      setSelectedColor(extras.colors[nextIndex]);
                    } else {
                      setActiveThumb((p) => (p + 1) % 3);
                    }
                  }}
                  className="hover:text-white transition-colors px-2 py-1"
                  aria-label="Next view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex justify-center gap-3">
              {extras.colors.length > 1 ? (
                extras.colors.map((color) => {
                  const isActive = activeColor === color;
                  return (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative h-20 w-20 shrink-0 rounded-xl border overflow-hidden transition-all duration-200 ${
                        isActive
                          ? "border-blue-600 ring-2 ring-blue-600/40"
                          : "border-zinc-800 hover:border-zinc-600"
                      }`}
                    >
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <MiniGraphic product={product} color={color} />
                      </div>
                    </button>
                  );
                })
              ) : (
                THUMB_LABELS.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    className={`relative h-20 w-20 shrink-0 rounded-xl border overflow-hidden transition-all duration-200 ${
                      activeThumb === i
                        ? "border-blue-600 ring-2 ring-blue-600/40"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <MiniGraphic product={product} />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6">

            {/* Name + Price */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                {product.name}
              </h1>
              <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
                {product.price}
              </span>
            </div>

            <hr className="border-zinc-900" />

            {/* Color Selector */}
            {extras.colors.length > 0 && (
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
                  Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {extras.colors.map((color) => {
                    const isUnavailable = extras.unavailableColors.includes(color);
                    const isActive =
                      !isUnavailable &&
                      (selectedColor === color ||
                        (!selectedColor && color === extras.colors.find(
                          (c) => !extras.unavailableColors.includes(c)
                        )));
                    return (
                      <button
                        key={color}
                        disabled={isUnavailable}
                        onClick={() => !isUnavailable && setSelectedColor(color)}
                        title={isUnavailable ? `${color} — Out of stock` : color}
                        className={`relative h-9 px-4 rounded-full border text-sm font-medium transition-all duration-200 overflow-hidden ${
                          isUnavailable
                            ? "border-zinc-800 bg-transparent text-zinc-600 cursor-not-allowed"
                            : isActive
                            ? "border-white bg-zinc-800 text-white font-semibold"
                            : "border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-500 hover:text-white"
                        }`}
                      >
                        {color}
                        {/* Diagonal strikethrough line for unavailable */}
                        {isUnavailable && (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 flex items-center justify-center"
                          >
                            <svg
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 w-full h-full"
                            >
                              <line
                                x1="8" y1="92" x2="92" y2="8"
                                stroke="#52525b"
                                strokeWidth="1.5"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector — only for clothing/footwear */}
            {hasSizes && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                    Size
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => {
                    const isUnavailable = extras.unavailableSizes.includes(size);
                    const isSelected = !isUnavailable && selectedSize === size;
                    return (
                      <button
                        key={size}
                        disabled={isUnavailable}
                        onClick={() => !isUnavailable && setSelectedSize(size)}
                        title={isUnavailable ? `${size} — Out of stock` : size}
                        className={`relative flex h-10 min-w-[2.75rem] px-3 items-center justify-center rounded-full border text-sm font-medium transition-all duration-200 overflow-hidden ${
                          isUnavailable
                            ? "border-zinc-800 bg-transparent text-zinc-600 cursor-not-allowed"
                            : isSelected
                            ? "border-white bg-zinc-900 text-white font-semibold"
                            : "border-zinc-800 bg-transparent text-zinc-300 hover:border-zinc-500 hover:text-white"
                        }`}
                      >
                        {size}
                        {/* Diagonal strikethrough for unavailable sizes */}
                        {isUnavailable && (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 flex items-center justify-center"
                          >
                            <svg
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 w-full h-full"
                            >
                              <line
                                x1="8" y1="92" x2="92" y2="8"
                                stroke="#52525b"
                                strokeWidth="1.5"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {extras.description}
              </p>
            </div>

            {/* Add to Cart */}
            <button
              id={`add-to-cart-${product.id}`}
              onClick={handleAddToCart}
              className={`relative w-full flex items-center justify-center py-4 rounded-full text-sm font-bold transition-all duration-300 active:scale-[0.98] mt-2 ${
                addedFeedback
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 hover:bg-blue-500 text-white"
              }`}
            >
              <span className="absolute left-6 flex items-center">
                {addedFeedback ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                )}
              </span>
              <span>{addedFeedback ? "Added to Cart!" : "Add To Cart"}</span>
            </button>

            {/* Simplified spacing placeholder */}
            <div className="pt-1" />
          </div>
        </div>
      </div>{/* end max-w-6xl */}

      {/* ── Related Products (full-width, homepage carousel style) ── */}
      {relatedFull.length > 0 && (
        <section className="w-full px-6 lg:px-12 pb-12">
          <h2 className="text-lg font-bold text-white mb-5 tracking-tight">
            Related Products
          </h2>

          {/* Horizontal scrollable strip — same as homepage carousel */}
          <div
            className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar focus:outline-none rounded-xl"
          >
            {relatedFull.map((rp) => (
              <Link
                key={rp.id}
                href={`/product/${rp.id}`}
                className="group relative flex h-[160px] w-[200px] md:h-[180px] md:w-[230px] lg:h-[200px] lg:w-[260px] flex-none overflow-hidden rounded-xl border border-zinc-800/80 bg-black hover:border-blue-600 transition-all duration-300 shrink-0"
              >
                {/* Product image */}
                <div className="relative h-full w-full flex items-center justify-center">
                  {rp.image ? (
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      fill
                      sizes="(max-width: 768px) 300px, 480px"
                      className="object-contain p-0 transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black transition-transform duration-300 group-hover:scale-105">
                      <MiniGraphic product={rp} />
                    </div>
                  )}
                </div>

                {/* Price pill badge — same as homepage */}
                <div className="absolute bottom-[12%] left-6 flex items-center rounded-full border border-zinc-800/80 bg-black/70 p-1 pl-4 pr-1 backdrop-blur-md">
                  <span className="text-[10px] md:text-xs font-semibold text-white">
                    {rp.name}
                  </span>
                  <span className="ml-3 rounded-full bg-blue-600 px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold text-white whitespace-nowrap">
                    {rp.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
