import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error)
      return []
    }
  })
  
  const [cartCount, setCartCount] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      const items = savedCart ? JSON.parse(savedCart) : []
      return items.reduce((sum, item) => sum + item.quantity, 0)
    } catch (error) {
      return 0
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems))
      const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
      setCartCount(count)
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [cartItems])

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const item = prev.find(i => i.id === productId)
      return prev.filter(item => item.id !== productId)
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prev => {
      const updated = prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
      return updated
    })
  }

  const clearCart = () => {
    setCartItems([])
    setCartCount(0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider