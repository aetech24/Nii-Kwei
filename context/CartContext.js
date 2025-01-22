"use client"

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, size) => {
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && (!size || item.size === size)
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && (!size || item.size === size)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity, size, id: product.id }];
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => 
      prev.filter(item => !(item.id === productId && (!size || item.size === size)))
    );
  };

  const updateQuantity = (productId, quantity, size) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && (!size || item.size === size)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 