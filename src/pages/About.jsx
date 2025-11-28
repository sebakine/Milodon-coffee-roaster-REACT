import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

// Import Images
import imgHistoria from '../assets/img/coffee-business-concept-closeup-lady-barista-en-delantal-preparando-y-vertiendo-leche-en-una-taza-caliente-mientras-esta-de-pie-en-el-cafe.webp';
import imgFounder from '../assets/img/barista-en-la-marca-de-la-cara-en-la-cafeteria-en-new-normal.webp';
import imgBarista from '../assets/img/coffee-business-concept-closeup-lady-barista-en-delantal-preparando-y-vertiendo-leche-en-una-taza-caliente-mientras-esta-de-pie-en-el-cafe.webp';
import imgManager from '../assets/img/logosalem-miauricio.png';

const About = () => {
  return (
    <>
      <RevealOnScroll>
        <section className="banner-interno">
          <div className="content-banner">
            <h2>Sobre Nosotros</h2>
            <p>Conoce nuestra historia y pasión por el café</p>
          </div>
        </section>
      </RevealOnScroll>

      <main className="main-content">
        <RevealOnScroll delay={0.2}>
          <section className="container sobre-nosotros py-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="heading-1 text-center mb-4">Nuestra Historia</h2>
                <p className="historia-texto">
                  Milodón Coffee Roasters nació en 2018 en el corazón de Viña del Mar, Chile, 
                  fruto de la pasión compartida por el café de especialidad de sus fundadores. 
                  Lo que comenzó como un pequeño proyecto familiar se ha transformado en una 
                  tostaduría reconocida por su compromiso con la calidad y la sostenibilidad.
                </p>
                <p className="historia-texto">
                  Nuestro nombre rinde homenaje al Milodón, animal prehistórico que habitó 
                  la Patagonia chilena, simbolizando nuestra conexión con las raíces locales 
                  y nuestra búsqueda de sabores auténticos y perdurables.
                </p>
                <div className="datos-empresa mt-4">
                  <div className="row g-3 stats-row">
                    <div className="col-12 col-md-4">
                      <div className="stat-card text-center p-4">
                        <div className="stat-number">5000+</div>
                        <div className="stat-label">Clientes Satisfechos</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="stat-card text-center p-4">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Eventos Realizados</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="stat-card text-center p-4">
                        <div className="stat-number">3</div>
                        <div className="stat-label">Años de Experiencia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="imagen-historia">
                  <img src={imgHistoria} alt="Nuestra tostaduría" className="img-fluid rounded" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <section className="container mision-vision py-5 bg-light">
            <div className="row">
              <div className="col-md-6">
                <div className="card-mision text-center">
                  <i className="fa-solid fa-bullseye"></i>
                  <h3>Nuestra Misión</h3>
                  <p>
                    Transformar la experiencia del café en Chile through el tostado artesanal, 
                    educación y servicio personalizado, llevando los mejores granos del mundo 
                    a cada taza con pasión y expertise. 
                    Ser el referente de calidad y sostenibilidad en la tostaduría de café.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-vision text-center">
                  <i className="fa-solid fa-eye"></i>
                  <h3>Nuestra Visión</h3>
                  <p>
                    Ser la tostaduría de café de especialidad más reconocida de Chile, 
                    destacándonos por nuestra innovación, calidad excepcional y compromiso 
                    con la comunidad cafetalera local y global.
                    Ser el destino preferido de los amantes del café en Viña del Mar, Chile.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <section className="container valores py-5">
            <h2 className="heading-1 text-center mb-5">Nuestros Valores</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card-valor text-center">
                  <i className="fa-solid fa-heart"></i>
                  <h4>Pasión</h4>
                  <p>Amamos lo que hacemos y eso se refleja en cada taza de café que servimos.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-valor text-center">
                  <i className="fa-solid fa-leaf"></i>
                  <h4>Sostenibilidad</h4>
                  <p>Trabajamos con productores que practican agricultura responsable y sostenible.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-valor text-center">
                  <i className="fa-solid fa-gem"></i>
                  <h4>Calidad</h4>
                  <p>No comprometemos la excelencia en ningún paso de nuestro proceso.</p>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <section className="container equipo py-5 bg-light">
            <h2 className="heading-1 text-center mb-5">Nuestro Equipo</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card-miembro text-center">
                  <img src={imgFounder} alt="Fundador" className="img-fluid rounded-circle" loading="lazy" decoding="async" />
                  <h4>Sebastián Muñoz Rivera</h4>
                  <p className="cargo">Fundador & Tostador Maestro</p>
                  <p>+10 años de experiencia en café de especialidad</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-miembro text-center">
                  <img src={imgBarista} alt="Barista" className="img-fluid rounded-circle" loading="lazy" decoding="async" />
                  <h4>Ma José Astudillo</h4>
                  <p className="cargo">Barista Principal</p>
                  <p>Campeona regional de barismo 2022</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-miembro text-center">
                  <img src={imgManager} alt="Gerente" className="img-fluid rounded-circle" loading="lazy" decoding="async" />
                  <h4>Don Miauricio y Salem</h4>
                  <p className="cargo">Gerente de Operaciones Gato Goldo y Salem</p>
                  <p>Especialista en eventos, comida y catering</p>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
};

export default About;
