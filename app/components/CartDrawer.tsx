"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

// Small thumbnail graphic renderers for custom graphics in cart
const CustomThumb = ({ item }: { item: any }) => {
  if (item.isSticker) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-2 rounded-lg">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-white">
          <polygon points="12 4, 22 20, 2 20" />
        </svg>
      </div>
    );
  }
  if (item.isRainbowSticker) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1 rounded-lg">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-emerald-300 via-cyan-200 to-purple-400 flex items-center justify-center relative aspect-square">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-3 w-3 text-zinc-900">
            <polygon points="12 4, 22 20, 2 20" />
          </svg>
        </div>
      </div>
    );
  }
  if (item.isKeyboard) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1 rounded-lg">
        <svg viewBox="0 0 100 60" fill="none" className="w-[85%] h-auto z-10">
          <path d="M15 40 L75 22 L85 24 L25 43 Z" fill="#f4f4f5" />
          <path d="M15 40 L25 43 L25 46 L15 43 Z" fill="#e4e4e7" />
          <path d="M25 43 L85 24 L85 27 L25 46 Z" fill="#d4d4d8" />
        </svg>
      </div>
    );
  }
  if (item.isCowboyHat) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1.5 rounded-lg">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-zinc-800">
          <path d="M25 52C25 38 32 30 50 30C68 30 75 38 75 52C67 52 50 50 50 50C50 50 33 52 25 52Z" fill="#0f0f11" />
          <path d="M10 52C25 52 35 56 50 56C65 56 75 52 90 52C95 56 85 64 50 64C15 64 5 56 10 52Z" fill="#0f0f11" />
        </svg>
      </div>
    );
  }
  if (item.isPrismTshirt) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1.5 rounded-lg">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M30 15 L38 15 C41 18 45 20 50 20 C55 20 59 18 62 15 L70 15 L85 30 L74 38 L74 85 L26 85 L26 38 L15 30 Z" fill="#121212" stroke="#333" strokeWidth="1" />
          <polygon points="50 44, 59 60, 41 60" stroke="#ffffff" strokeWidth="1" fill="#121212" />
        </svg>
      </div>
    );
  }
  if (item.isShoes) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1 rounded-lg">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M15 55 C15 55, 25 38, 55 38 C70 38, 80 48, 85 52 L90 56 L90 62 L15 62 Z" fill="#2563eb" />
          <path d="M13 62 C13 62, 50 62, 90 62 C92 62, 93 63, 92 65 C90 67, 85 68, 50 68 C15 68, 11 67, 11 65 Z" fill="#ffffff" />
        </svg>
      </div>
    );
  }
  if (item.isCap) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1 rounded-lg">
        <svg viewBox="0 0 120 100" fill="none" className="w-full h-full text-zinc-800">
          <path d="M20 70 C20 40, 35 25, 65 25 C95 25, 100 45, 100 70 Z" fill="#121212" />
          <path d="M10 72 C25 64, 55 64, 75 72 C55 80, 25 80, 10 72 Z" fill="#08080a" />
        </svg>
      </div>
    );
  }
  if (item.isDogSweater) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1 rounded-lg">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M45 15 L52 8 L58 13 L60 22 C62 25, 68 28, 72 26 L76 30 C76 30, 78 34, 75 36 C70 40, 60 40, 55 35 Z" fill="#e0853c" />
          <path d="M42 35 C45 32, 50 35, 55 35 C60 42, 64 54, 66 65 L48 65 C45 54, 43 45, 42 35 Z" fill="#121212" />
        </svg>
      </div>
    );
  }
  if (item.isBomberJacket) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1.5 rounded-lg">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M30 20 L38 20 C42 24, 58 24, 62 20 L70 20 L88 38 L76 46 L76 85 L24 85 L24 46 L12 38 Z" fill="#6b705c" />
          <line x1="50" y1="24" x2="50" y2="85" stroke="#121212" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }
  if (item.isPacifier) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1.5 rounded-lg">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M50 20 C42 20, 36 28, 40 40 C44 40, 56 40, 60 40 C64 28, 58 20, 50 20 Z" fill="#fde047" opacity="0.8" />
          <path d="M20 52 C20 42, 35 48, 50 48 C65 48, 80 42, 80 52 C80 62, 65 56, 50 56 Z" fill="#1e293b" />
        </svg>
      </div>
    );
  }

  // Fallback to standard Image
  return (
    <div className="relative w-full h-full p-1.5 flex items-center justify-center bg-zinc-950 rounded-lg">
      <Image
        src={item.image || "/tshirt.png"}
        alt={item.name}
        fill
        className="object-contain p-1"
      />
    </div>
  );
};

export default function CartDrawer() {
  const { isCartOpen, closeCart, cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on clicking outside the drawer pane
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isCartOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        closeCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen, closeCart]);

  // Prevent background scrolling when cart drawer is active
  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end transition-all duration-300">
      
      {/* Inner Drawer Pane */}
      <div
        ref={drawerRef}
        className="relative flex h-full w-full max-w-md flex-col justify-between border-l border-zinc-900 bg-black text-white p-6 shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Header section */}
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-xl font-bold text-white tracking-wide">My Cart</h2>
          <button
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 bg-transparent hover:bg-zinc-900 hover:text-white transition-colors"
            aria-label="Close Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable list of items */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 flex flex-col gap-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 border-b border-zinc-900 pb-4"
              >
                
                {/* Product image block with overlay delete cross */}
                <div className="relative h-16 w-16 shrink-0 rounded-lg border border-zinc-800 bg-[#121212]/30">
                  <CustomThumb item={item} />
                  
                  {/* Small round delete cross button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute -top-1.5 -left-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 hover:scale-105 active:scale-95 text-zinc-300 hover:text-white border border-zinc-700 transition-all text-xs"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ×
                  </button>
                </div>

                {/* Name and size details */}
                <div className="flex-1 flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-white truncate">
                    {item.name}
                  </span>
                  {item.selectedSize && (
                    <span className="text-xs text-zinc-500">
                      Size: {item.selectedSize}
                    </span>
                  )}
                </div>

                {/* Price and quantity Pill controls */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-sm font-semibold text-white">
                    {item.price}
                  </span>
                  
                  {/* Quantity control pill: - count + */}
                  <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-950 p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors text-sm"
                      aria-label="Decrease quantity"
                    >
                      －
                    </button>
                    <span className="px-2 text-xs font-semibold w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors text-sm"
                      aria-label="Increase quantity"
                    >
                      ＋
                    </button>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-zinc-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p className="text-sm font-medium">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Totals Section — only shown when cart has items */}
        {cart.length > 0 && (
          <div className="border-t border-zinc-900 pt-6 flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Taxes</span>
              <span className="font-semibold text-white">$0.00 USD</span>
            </div>
            <div className="flex items-center justify-between text-sm border-t border-zinc-900 pt-3">
              <span className="text-zinc-500">Shipping</span>
              <span className="text-zinc-500">Calculated at checkout</span>
            </div>
            <div className="flex items-center justify-between text-sm border-t border-zinc-900 pt-3">
              <span className="text-zinc-500">Total</span>
              <span className="font-bold text-white text-base">
                ${cartTotal.toFixed(2)} USD
              </span>
            </div>

            {/* Proceed button */}
            <button
              onClick={() => alert("Checkout process has started!")}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-full text-center text-sm transition-colors mt-2"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
