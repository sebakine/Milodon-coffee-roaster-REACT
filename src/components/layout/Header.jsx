import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useTheme } from '../../context/ThemeContext'
import { useSearch } from '../../hooks/useSearch'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { theme, toggleTheme } = useTheme()
  const { query, setQuery, filteredProducts } = useSearch()
  const [showResults, setShowResults] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
    setShowResults(true)
  }

  const handleBlur = () => {
    // Delay hiding results to allow clicking on them
    setTimeout(() => setShowResults(false), 200)
  }

  return (
    <header className="header-elegante">
      <div className="container-hero">
        <div className="container hero">
          <div className="customer-support">
            <i className="fa-solid fa-headset" aria-hidden="true"></i>
            <div className="content-customer-support">
              <span className="text">Soporte al Cliente</span>
              <span className="number">+56 9 1234 5678</span>
            </div>
          </div>

          <div className="container-logo">
            <img 
              src="/img/gatosgoldoscafelogo.png" 
              alt="Milodón Coffee Roasters" 
              className="logo-img" 
            />
            <h1 className="logo">
              <Link to="/">Milodón Coffee Roasters</Link>
            </h1>
          </div>

          <div className="container-user">
            <button 
              onClick={toggleTheme} 
              className="btn-theme-toggle"
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1.5rem' }}
            >
              <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>

            <Link to="#" aria-label="Acceder a mi cuenta">
              <i className="fa-solid fa-user" aria-hidden="true"></i>
            </Link>
            <a 
              href="#" 
              className="shopping-cart-link position-relative"
              data-bs-toggle="offcanvas" 
              data-bs-target="#cartOffcanvas"
              aria-label={`Ver carrito de compras (${cartCount} items)`}
              role="button"
            >
              <i className="fa-solid fa-basket-shopping" aria-hidden="true"></i>
              <div className="content-shopping-cart">
                <span className="text">Carro</span>
                <span className="number badge-style">({cartCount})</span>
              </div>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>

      <div className="container-navbar">
        <nav className="navbar container">
          <button 
            className="navbar-toggle" 
            aria-label="Abrir menú de navegación" 
            aria-controls="menu-principal" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
          
          <ul 
            className={`menu ${isMenuOpen ? 'active' : ''}`} 
            id="menu-principal" 
            role="menubar"
          >
            <li role="none"><Link to="/" role="menuitem">Inicio</Link></li>
            <li role="none"><Link to="/about" role="menuitem">Nosotros</Link></li>
            <li role="none"><Link to="/blog" role="menuitem">Blog</Link></li>
            <li role="none"><Link to="/contact" role="menuitem">Contacto</Link></li>
          </ul>

          <div className="search-container position-relative">
            <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search-input" className="visually-hidden">Buscar café</label>
              <input 
                type="search" 
                id="search-input" 
                placeholder="Buscar café..." 
                value={query}
                onChange={handleSearchChange}
                onFocus={() => setShowResults(true)}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <button className="btn-search" type="submit" aria-label="Buscar">
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              </button>
            </form>

            <AnimatePresence>
              {showResults && query && filteredProducts.length > 0 && (
                <motion.div 
                  className="search-results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    width: '300px',
                    background: 'var(--bg-color)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    zIndex: 1000,
                    padding: '1rem',
                    marginTop: '0.5rem',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {filteredProducts.slice(0, 5).map(product => (
                      <li key={product.id} style={{ marginBottom: '0.8rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                        <Link to="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img src={product.image} alt={product.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                          <div>
                            <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-color)', fontSize: '1.4rem' }}>{product.name}</p>
                            <small style={{ color: 'var(--accent-color)' }}>${product.price.toLocaleString()}</small>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header