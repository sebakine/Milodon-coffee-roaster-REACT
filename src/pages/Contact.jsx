import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Contact = () => {
  return (
    <>
      <RevealOnScroll>
        <section className="banner-interno">
          <div className="content-banner">
            <h1>Contáctanos</h1>
            <p>Estamos aquí para ayudarte</p>
          </div>
        </section>
      </RevealOnScroll>

      <main className="main-content">
        <RevealOnScroll delay={0.2}>
          <section className="container info-contacto py-5">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="heading-1 text-start mb-4">Envíanos un Mensaje</h2>
                <form className="formulario-contacto">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre Completo *</label>
                      <input type="text" className="form-control" id="nombre" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="telefono" className="form-label">Teléfono</label>
                      <input type="tel" className="form-control" id="telefono" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="asunto" className="form-label">Asunto *</label>
                      <select className="form-select" id="asunto" required>
                        <option value="">Selecciona un asunto</option>
                        <option value="consulta">Consulta General</option>
                        <option value="eventos">Barra Móvil para Eventos</option>
                        <option value="membresias">Club de Membresías</option>
                        <option value="productos">Información de Productos</option>
                        <option value="pedidos">Estado de Pedidos</option>
                        <option value="otros">Otros</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                    <textarea className="form-control" id="mensaje" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn-enviar">Enviar Mensaje</button>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="informacion-contacto">
                  <h3>Información de Contacto</h3>
                  
                  <div className="item-contacto">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                      <h4>Dirección</h4>
                      <p>Av. Libertad 123<br />Viña del Mar, Chile</p>
                    </div>
                  </div>

                  <div className="item-contacto">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                      <h4>Teléfono</h4>
                      <p>+56 9 1234 5678</p>
                    </div>
                  </div>

                  <div className="item-contacto">
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <h4>Email</h4>
                      <p>hola@milodoncoffee.cl</p>
                    </div>
                  </div>

                  <div className="item-contacto">
                    <i className="fa-solid fa-clock"></i>
                    <div>
                      <h4>Horario de Atención</h4>
                      <p>Lunes a Sábado: 8:00 - 20:00 hrs<br />Domingo: 9:00 - 18:00 hrs</p>
                    </div>
                  </div>

                  <div className="redes-contacto">
                    <h4>Síguenos</h4>
                    <div className="social-icons-contact">
                      <a href="#" className="facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                      <a href="#" className="instagram" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                      <a href="#" className="twitter" aria-label="Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>
                      <a href="#" className="whatsapp" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <section className="mapa-ubicacion py-5 bg-light">
            <div className="container">
              <h2 className="heading-1 text-center mb-5">Nuestra Ubicación</h2>
              <div className="mapa-container">
                <div className="mapa-placeholder">
                  <div className="mapa-content">
                    <i className="fa-solid fa-map-location-dot"></i>
                    <h3>Mapa de Ubicación</h3>
                    <p>Av. Libertad 123, Viña del Mar, Chile</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-ver-mapa">Ver en Google Maps</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <section className="servicios-contacto py-5">
            <div className="container">
              <h2 className="heading-1 text-center mb-5">¿En qué podemos ayudarte?</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card-servicio-contacto text-center">
                    <i className="fa-solid fa-champagne-glasses"></i>
                    <h4>Barra Móvil para Eventos</h4>
                    <p>Cotiza nuestro servicio de barra móvil para tu evento especial</p>
                    <a href="#" className="btn-servicio">Solicitar Cotización</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-servicio-contacto text-center">
                    <i className="fa-solid fa-gem"></i>
                    <h4>Club de Membresías</h4>
                    <p>Únete a nuestro club y recibe café exclusivo cada mes</p>
                    <a href="#" className="btn-servicio">Más Información</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-servicio-contacto text-center">
                    <i className="fa-solid fa-truck"></i>
                    <h4>Pedidos y Envíos</h4>
                    <p>Consulta por tus pedidos y opciones de envío disponible</p>
                    <a href="#" className="btn-servicio">Consultar Pedido</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <section className="faq-contacto py-5 bg-light">
            <div className="container">
              <h2 className="heading-1 text-center mb-5">Preguntas Frecuentes</h2>
              <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      ¿Cuál es el tiempo de entrega de los pedidos?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
                    <div className="accordion-body">
                      Los pedidos dentro de Viña del Mar se entregan en 24-48 horas. Para regiones, 
                      el tiempo de entrega es de 3-5 días hábiles.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      ¿Ofrecen servicio de barra móvil para empresas?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                    <div className="accordion-body">
                      Sí, ofrecemos servicio de barra móvil para empresas, eventos corporativos, 
                      matrimonios y todo tipo de celebraciones. Contamos con diferentes paquetes 
                      personalizables.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      ¿Cómo funciona el club de membresías?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                    <div className="accordion-body">
                      Nuestro club de membresías te envía café tostado fresco cada mes, con 
                      variedades exclusivas y accesos a cursos especiales. Puedes elegir entre 
                      diferentes planes según tus necesidades.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
};

export default Contact;
