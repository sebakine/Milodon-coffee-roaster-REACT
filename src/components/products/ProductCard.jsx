import React, { memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

const ProductCard = memo(({ product, onQuickView }) => {
  const { addToCart } = useCart()

  const handleAddToCart = useCallback(() => {
    addToCart(product)
  }, [product, addToCart])

  const handleQuickView = useCallback(() => {
    onQuickView(product)
  }, [product, onQuickView])

  if (!product) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i}
        className={`fa-solid fa-star ${i < rating ? 'text-warning' : 'text-muted'}`}
        aria-hidden="true"
      ></i>
    ))
  }

  return (
    <article className="card-product">
      <div className="container-img">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
        
        {product.discount > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            -{product.discount}%
          </span>
        )}
        
        {product.badges?.map((badge, index) => (
          <span 
            key={index}
            className={`badge bg-success position-absolute top-0 end-0 m-2 ${index > 0 ? 'mt-5' : ''}`}
          >
            {badge}
          </span>
        ))}

        <div className="button-group">
          <motion.button 
            type="button" 
            className="btn-quick-view"
            onClick={handleQuickView}
            title="Vista rápida"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-regular fa-eye" aria-hidden="true"></i>
          </motion.button>
          <motion.button 
            type="button" 
            title="Añadir a favoritos"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-regular fa-heart" aria-hidden="true"></i>
          </motion.button>
          <motion.button 
            type="button" 
            title="Comparar producto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-solid fa-code-compare" aria-hidden="true"></i>
          </motion.button>
        </div>
      </div>

      <div className="content-card-product">
        <div className="stars" aria-label={`Calificación: ${product.rating} de 5 estrellas`}>
          {renderStars(product.rating)}
        </div>
        
        <h3><a href="#">{product.name}</a></h3>
        
        <div className="stock-info mb-2">
          <small className="text-muted">Stock disponible:</small>
          <div className="progress" style={{ height: '6px' }}>
            <div 
              className={`progress-bar ${product.stock > 50 ? 'bg-success' : product.stock > 20 ? 'bg-warning' : 'bg-danger'}`}
              style={{ width: `${product.stock}%` }}
            ></div>
          </div>
        </div>

        <motion.button 
          type="button" 
          className="add-cart"
          onClick={handleAddToCart}
          title="Añadir al carrito"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fa-solid fa-basket-shopping" aria-hidden="true"></i>
        </motion.button>
        
        <p className="price">
          ${product.price.toLocaleString()}
          {product.originalPrice && (
            <s>${product.originalPrice.toLocaleString()}</s>
          )}
        </p>
      </div>
    </article>
  )
})

export default ProductCard