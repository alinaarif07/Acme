"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  quantity: number;
  image?: string;
  isSticker?: boolean;
  isPrismTshirt?: boolean;
  isCowboyHat?: boolean;
  isKeyboard?: boolean;
  isShoes?: boolean;
  isRainbowSticker?: boolean;
  isCap?: boolean;
  isDogSweater?: boolean;
  isBomberJacket?: boolean;
  isPacifier?: boolean;
  selectedSize?: string;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: any, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("acme-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("acme-cart", JSON.stringify(newCart));
  };

  const addToCart = (product: any, size?: string) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    let newCart = [...cart];

    if (existingIndex > -1) {
      newCart[existingIndex].quantity += 1;
      if (size) newCart[existingIndex].selectedSize = size;
    } else {
      newCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        priceNumeric: product.priceNumeric,
        quantity: 1,
        image: product.image,
        isSticker: product.isSticker,
        isPrismTshirt: product.isPrismTshirt,
        isCowboyHat: product.isCowboyHat,
        isKeyboard: product.isKeyboard,
        isShoes: product.isShoes,
        isRainbowSticker: product.isRainbowSticker,
        isCap: product.isCap,
        isDogSweater: product.isDogSweater,
        isBomberJacket: product.isBomberJacket,
        isPacifier: product.isPacifier,
        selectedSize: size,
      });
    }

    saveCart(newCart);
    setIsCartOpen(true); // Automatically slide open the cart drawer!
  };

  const removeFromCart = (productId: string) => {
    const newCart = cart.filter((item) => item.id !== productId);
    saveCart(newCart);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    saveCart(newCart);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const clearCart = () => saveCart([]);

  const cartCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.priceNumeric * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        openCart,
        closeCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
