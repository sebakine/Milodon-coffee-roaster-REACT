import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Blog = () => {
  return (
    <>
      <RevealOnScroll>
        <section className="banner-interno">
          <div className="content-banner">
            <h2>Nuestro Blog</h2>
            <p>Descubre el mundo del café de especialidad</p>
          </div>
        </section>
      </RevealOnScroll>

      <main className="main-content">
        <RevealOnScroll delay={0.2}>
          <section className="container blog-principal py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Artículo Destacado */}
                <article className="card-articulo-destacado mb-5">
                  <div className="container-img">
                    <img src="/img/cafe-oscuro-en-un-tazon-sobre-una-mesa-marron.webp" alt="Arte del Tostado Artesanal" className="img-fluid" loading="eager" decoding="async" />
                    <div className="badge-destacado">Destacado</div>
                  </div>
                  <div className="content-articulo">
                    <span className="fecha-articulo"><i className="fa-regular fa-calendar"></i> 15 Enero 2024</span>
                    <h2>El Arte del Tostado Artesanal: De la Cereza a la Taza</h2>
                    <p className="resumen-articulo">
                      Descubre el fascinante proceso que transforma las cerezas de café en los deliciosos granos que llegan a tu taza. Desde la selección de los mejores lotes hasta el punto exacto de tostado que realza cada nota de sabor.
                    </p>
                    <div className="meta-articulo">
                      <span className="autor"><i className="fa-regular fa-user"></i> Por Carlos Mendoza</span>
                      <span className="categoria"><i class="fa-regular fa-folder"></i> Procesos</span>
                      <span className="tiempo-lectura"><i class="fa-regular fa-clock"></i> 5 min lectura</span>
                    </div>
                    <a href="#" className="btn-leer-mas gradient-button"><span className="gradient-text">Leer Artículo Completo</span></a>
                  </div>
                </article>

                {/* Lista de Artículos */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <article className="card-articulo">
                      <div className="container-img">
                        <img src="/img/cafeteria-movil.webp" alt="Barra Móvil para Eventos" className="img-fluid" loading="lazy" decoding="async" />
                      </div>
                      <div className="content-articulo">
                        <span className="fecha-articulo">10 Enero 2024</span>
                        <h3>Barra Móvil para Eventos: Llevando la Experiencia Milodón a tu Celebración</h3>
                        <p>Descubre cómo transformamos cualquier evento en una experiencia única de café.</p>
                        <a href="#" className="enlace-articulo">Leer más</a>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 mb-4">
                    <article className="card-articulo">
                      <div className="container-img">
                        <img src="/img/manos-sosteniendo-sacos-y-granos-de-cafe.webp" alt="Club de Membresías" className="img-fluid" loading="lazy" decoding="async" />
                      </div>
                      <div className="content-articulo">
                        <span className="fecha-articulo">5 Enero 2024</span>
                        <h3>Club de Membresías: Tu Pasaporte al Mundo del Café de Especialidad</h3>
                        <p>Únete a nuestra comunidad y descubre cafés exclusivos cada mes.</p>
                        <a href="#" className="enlace-articulo">Leer más</a>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 mb-4">
                    <article className="card-articulo">
                      <div className="container-img">
                        <img src="/img/taza-de-cafe-con-leche.webp" alt="Métodos de Preparación" className="img-fluid" loading="lazy" decoding="async" />
                      </div>
                      <div className="content-articulo">
                        <span className="fecha-articulo">28 Diciembre 2023</span>
                        <h3>Métodos de Preparación: Encuentra tu Forma Perfecta de Hacer Café</h3>
                        <p>Desde Chemex hasta AeroPress, guía completa de métodos de extracción.</p>
                        <a href="#" className="enlace-articulo">Leer más</a>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 mb-4">
                    <article className="card-articulo">
                      <div className="container-img">
                        <img src="/img/primer-plano-de-manos-barista-hacer-cafe-con-leche-arte-pintura.webp" alt="Orígenes del Café" className="img-fluid" loading="lazy" decoding="async" />
                      </div>
                      <div className="content-articulo">
                        <span className="fecha-articulo">20 Diciembre 2023</span>
                        <h3>Viaje por los Orígenes: Etiopía, la Cuna del Café Arábica</h3>
                        <p>Exploramos las regiones cafetaleras más emblemáticas de Etiopía.</p>
                        <a href="#" className="enlace-articulo">Leer más</a>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Paginación */}
                <nav aria-label="Paginación del blog" className="mt-5">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Siguiente</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <section className="newsletter-blog bg-light py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2>Suscríbete a Nuestro Newsletter</h2>
                  <p>Recibe artículos exclusivos, tips de café y ofertas especiales directamente en tu email.</p>
                  <form className="form-newsletter">
                    <input type="email" placeholder="Tu correo electrónico" required />
                    <button type="submit">Suscribirse</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
};

export default Blog;
