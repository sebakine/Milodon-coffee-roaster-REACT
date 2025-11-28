import { useState, useEffect } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeFilter, setActiveFilter] = useState('popular')

  const sampleProducts = [
    {
      id: 1,
      name: "Café Irish Blend",
      price: 12500,
      originalPrice: 14700,
      image: "/img/cafe-irish.webp",
      discount: 15,
      badges: ["Nuevo", "Oferta"],
      rating: 4,
      stock: 75,
      category: "popular",
      description: "Una mezcla exquisita con notas de whisky y crema, perfecta para los amantes de sabores intensos."
    },
    {
      id: 2,
      name: "Café English Roast",
      price: 13200,
      originalPrice: 16500,
      image: "/img/dos-tazas-de-cafe-expres-debajo-de-la-cafetera.webp",
      discount: 20,
      badges: ["Destacado"],
      rating: 3,
      stock: 45,
      category: "popular",
      description: "Tostado medio-oscuro, ideal para un desayuno energético con sabor tradicional."
    },
    {
      id: 3,
      name: "Café Australian Blend",
      price: 15800,
      originalPrice: null,
      image: "/img/primer-plano-de-barista-haciendo-arte-latte.webp",
      discount: 0,
      badges: ["Más Vendido"],
      rating: 5,
      stock: 90,
      category: "popular",
      description: "Perfil suave y afrutado, inspirado en la cultura de café de Melbourne."
    },
    {
      id: 4,
      name: "Café Cold Brew",
      price: 9900,
      originalPrice: null,
      image: "/img/primer-plano-de-cafe-capuchino-con-latte-de-arte-en-la-mesa-de-madera.webp",
      discount: 0,
      badges: ["Popular"],
      rating: 4,
      stock: 100,
      category: "popular",
      description: "Molienda gruesa especial para extracción en frío, baja acidez y gran dulzor."
    },
    {
      id: 5,
      name: "Café Viena Style",
      price: 14500,
      originalPrice: 20700,
      image: "/img/concepto-de-servicio-de-preparacion-de-cafe-barista-cafe.webp",
      discount: 30,
      badges: ["Mejor Oferta"],
      rating: 5,
      stock: 60,
      category: "specials",
      description: "Elegante y sofisticado, con notas a chocolate y especias."
    },
    {
      id: 6,
      name: "Café Liqueurs",
      price: 16800,
      originalPrice: null,
      image: "/img/primer-plano-de-cafe-capuchino-con-latte-de-arte-en-la-mesa-de-madera.webp",
      discount: 0,
      badges: ["Popular"],
      rating: 4,
      stock: 85,
      category: "specials",
      description: "Infusionado con esencias de licores finos para una experiencia post-cena."
    }
  ]

  useEffect(() => {
    setProducts(sampleProducts)
    setFilteredProducts(sampleProducts)
  }, [])

  const filterProducts = (filter) => {
    setActiveFilter(filter)
    if (filter === 'popular') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.category === filter))
    }
  }

  return {
    products: filteredProducts,
    activeFilter,
    filterProducts
  }
}