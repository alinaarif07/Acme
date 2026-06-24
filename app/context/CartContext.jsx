"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
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
  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("acme-cart", JSON.stringify(newCart));
  };

  const addToCart = (product, size) => {
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

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    saveCart(newCart);
  };

  const updateQuantity = (productId, quantity) => {
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
