import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Importación de Componentes de Diseño
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartOffcanvas from './components/cart/CartOffcanvas';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import CatLoader from './components/CatLoader';
import LoadingSpinner from './components/common/LoadingSpinner';
import PageTransition from './components/common/PageTransition';

// Importación del Contexto
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy Loading de Páginas
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  // 1. Estado para controlar si mostramos al gato o la web
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // 2. Efecto que espera 2.5 segundos y luego quita la carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Limpieza del timer por si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 3. Renderizado Condicional: ¿Cargando? Muestra Gato. ¿No? Muestra App. */}
      {loading ? (
        <CatLoader />
      ) : (
        <ThemeProvider>
          <CartProvider>
            <ErrorBoundary>
              <div className="App">
                <Header />
                
                <main>
                  <Suspense fallback={<LoadingSpinner />}>
                    <AnimatePresence mode="wait">
                      <Routes location={location} key={location.pathname}>
                        <Route path="/" element={
                          <PageTransition>
                            <Home />
                          </PageTransition>
                        } />
                        <Route path="/about" element={
                          <PageTransition>
                            <About />
                          </PageTransition>
                        } />
                        <Route path="/blog" element={
                          <PageTransition>
                            <Blog />
                          </PageTransition>
                        } />
                        <Route path="/contact" element={
                          <PageTransition>
                            <Contact />
                          </PageTransition>
                        } />
                      </Routes>
                    </AnimatePresence>
                  </Suspense>
                </main>

                {/* Componentes globales que no son páginas */}
                <CartOffcanvas />
                <ScrollToTopButton />
                <Footer />
              </div>
            </ErrorBoundary>
          </CartProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;