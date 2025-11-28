import { useState, useEffect } from 'react'
import { useProducts } from './useProducts'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const { products } = useProducts()

  useEffect(() => {
    if (!query.trim()) {
      setFilteredProducts([])
      return
    }

    const lowerQuery = query.toLowerCase()
    const results = products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description?.toLowerCase().includes(lowerQuery)
    )
    setFilteredProducts(results)
  }, [query, products])

  return {
    query,
    setQuery,
    filteredProducts
  }
}
