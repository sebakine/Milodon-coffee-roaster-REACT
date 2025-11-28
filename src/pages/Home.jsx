import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import QuickViewModal from '../components/products/QuickViewModal';
import RevealOnScroll from '../components/common/RevealOnScroll';
import { useProducts } from '../hooks/useProducts';

// Import Carousel Images
import carousel1 from '../assets/img/vista-superior-de-granos-de-cafe-con-accesorios.webp';
import carousel2 from '../assets/img/vista-superior-de-accesorios-de-cafe-sobre-la-mesa.webp';
import carousel3 from '../assets/img/el-barista-diligente-esta-preparando-un-cafe-con-leche-fresco-para-los-clientes-para-tomar-un-cafe-en-la-cafeteria.webp';
import carousel4 from '../assets/img/taza-de-cafe-con-leche.webp';
import carousel5 from '../assets/img/cafe-oscuro-en-un-tazon-sobre-una-mesa-marron.webp';

const Home = () => {
  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('popular');

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Filter products based on active tab
  const getFilteredProducts = () => {
    let filtered = products;
    if (activeTab === 'new') {
      filtered = products.filter(p => p.badges.includes('Nuevo'));
    } else if (activeTab === 'rated') {
      filtered = products.filter(p => p.rating === 5);
    }
    // Default 'popular' just takes the first 4 (or logic from useProducts)
    return filtered.slice(0, 4);
  };

  const topProducts = getFilteredProducts();
  const specialProducts = products.slice(4); // Assuming the rest are specials

  return (
    <>
      {/* Alerta de Promoción Especial */}
      <div className="alert alert-warning alert-dismissible fade show mb-0 text-center alert-promocion" role="alert">
        <strong>🎉 ¡Oferta Especial!</strong> Envío gratis en compras superiores a $30.000 | Descuento del 15% en tu primera compra con el código: <strong>CAFE15</strong>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>

      <RevealOnScroll>
        <section className="banner" aria-labelledby="banner-heading">
          <div className="content-banner">
            <p>Café de especialidad recién tostado</p>
            <h2 id="banner-heading">100% Natural Café Fresco Artesanal</h2>
            <motion.a 
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Descubrir Ahora
            </motion.a>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="container top-products" id="products" aria-labelledby="products-heading">
          <h2 className="heading-1" id="products-heading">Cafés Destacados</h2>

          <div className="container-options" role="tablist" aria-label="Filtrar cafés destacados">
            <button 
              role="tab" 
              aria-selected={activeTab === 'popular'} 
              className={activeTab === 'popular' ? 'active' : ''}
              onClick={() => setActiveTab('popular')}
            >
              Más Populares
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === 'new'} 
              className={activeTab === 'new' ? 'active' : ''}
              onClick={() => setActiveTab('new')}
            >
              Novedades
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === 'rated'} 
              className={activeTab === 'rated' ? 'active' : ''}
              onClick={() => setActiveTab('rated')}
            >
              Mejor Calificados
            </button>
          </div>

          <div className="container-products">
            {topProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={handleQuickView} 
              />
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <section className="container py-5" role="region" aria-label="Galería de imágenes">
          <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carousel1} className="d-block w-100" alt="Vista cenital de granos de café tostado" loading="eager" decoding="async" />
              </div>
              <div className="carousel-item">
                <img src={carousel2} className="d-block w-100" alt="Accesorios para preparar café" loading="lazy" decoding="async" />
              </div>
              <div className="carousel-item">
                <img src={carousel3} className="d-block w-100" alt="Barista vertiendo leche" loading="lazy" decoding="async" />
              </div>
              <div className="carousel-item">
                <img src={carousel4} className="d-block w-100" alt="Taza de café con leche" loading="lazy" decoding="async" />
              </div>
              <div className="carousel-item">
                <img src={carousel5} className="d-block w-100" alt="Tazón de granos de café" loading="lazy" decoding="async" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>
      </RevealOnScroll>

      {products.length > 0 && (
        <RevealOnScroll delay={0.4}>
          <section className="container specials" aria-labelledby="specials-heading">
            <h2 className="heading-1" id="specials-heading">Ofertas Especiales</h2>
            <div className="container-products">
              {/* We can reuse products or show specific ones. For now showing the rest + some duplicates to match layout if needed */}
              {/* Based on index.html, it shows Irish, English, Viena, Liqueurs */}
              <ProductCard product={products.find(p => p.id === 1)} onQuickView={handleQuickView} />
              <ProductCard product={products.find(p => p.id === 2)} onQuickView={handleQuickView} />
              <ProductCard product={products.find(p => p.id === 5)} onQuickView={handleQuickView} />
              <ProductCard product={products.find(p => p.id === 6)} onQuickView={handleQuickView} />
            </div>
          </section>
        </RevealOnScroll>
      )}

      <RevealOnScroll delay={0.5}>
        <section className="container container-features" aria-label="Beneficios de Milodón Coffee">
          <div className="card-feature">
            <i className="fa-solid fa-truck" aria-hidden="true"></i>
            <div className="feature-content">
              <span>Envío gratuito</span>
              <p>En pedidos superiores a $30.000</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
            <div className="feature-content">
              <span>Devoluciones</span>
              <p>30 días de garantía</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-credit-card" aria-hidden="true"></i>
            <div className="feature-content">
              <span>Pago seguro</span>
              <p>100% protegido</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-headset" aria-hidden="true"></i>
            <div className="feature-content">
              <span>Soporte 24/7</span>
              <p>Llamanos cualquier hora</p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {selectedProduct && (
        <QuickViewModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default Home;
