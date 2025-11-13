import { useState, useEffect, useCallback } from 'react';
import { saveCart, getCart, clearCart as clearStoredCart } from '../utils/localStorage';

export const useCart = () => {
  const [cart, setCart] = useState({ items: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = getCart();
    if (storedCart && storedCart.items.length > 0) {
      setCart(storedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.items.length > 0) {
      saveCart(cart);
    }
  }, [cart]);

  // Add item to cart
  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.id === product.id);

      if (existingItem) {
        // If item exists, increment quantity
        return {
          ...prevCart,
          items: prevCart.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        // Add new item
        return {
          ...prevCart,
          items: [...prevCart.items, { ...product, quantity: 1 }]
        };
      }
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.filter(item => item.id !== productId)
    }));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart => ({
        ...prevCart,
        items: prevCart.items.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      }));
    }
  }, [removeFromCart]);

  // Increment quantity
  const incrementQuantity = useCallback((productId) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }));
  }, []);

  // Decrement quantity
  const decrementQuantity = useCallback((productId) => {
    setCart(prevCart => {
      const item = prevCart.items.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        return {
          ...prevCart,
          items: prevCart.items.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      } else {
        // Remove item if quantity would be 0
        return {
          ...prevCart,
          items: prevCart.items.filter(item => item.id !== productId)
        };
      }
    });
  }, []);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCart({ items: [] });
    clearStoredCart();
  }, []);

  // Calculate total price
  const getCartTotal = useCallback(() => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  // Get total item count
  const getItemCount = useCallback(() => {
    return cart.items.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  // Check if product is in cart
  const isInCart = useCallback((productId) => {
    return cart.items.some(item => item.id === productId);
  }, [cart]);

  // Get cart item by product id
  const getCartItem = useCallback((productId) => {
    return cart.items.find(item => item.id === productId);
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    getCartTotal,
    getItemCount,
    isInCart,
    getCartItem
  };
};