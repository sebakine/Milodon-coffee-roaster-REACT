import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <div className="menu-footer">
          
          <div className="contact-info">
            <h4 className="title-footer">Información de Contacto</h4>
            <ul>
              <li>Dirección: Av. Libertad 123, Viña del Mar, Chile</li>
              <li>Teléfono: +56 9 1234 5678</li>
              <li>Email: hola@milodoncoffee.cl</li>
              <li>Horario: Lunes a Sábado 8:00 - 20:00</li>
            </ul>
            <div className="social-icons">
              <a href="#" className="facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
              <a href="#" className="twitter" aria-label="Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>
              <a href="#" className="youtube" aria-label="YouTube"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a>
              <a href="#" className="instagram" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className="information">
            <h4 className="title-footer">Información</h4>
            <ul>
              <li><Link to="/about">Acerca de Nosotros</Link></li>
              <li><a href="#">Información de Delivery</a></li>
              <li><a href="#">Políticas de Privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><Link to="/contact">Contáctanos</Link></li>
            </ul>
          </div>

          <div className="my-account">
            <h4 className="title-footer">Mi cuenta</h4>
            <ul>
              <li><a href="#">Mi cuenta</a></li>
              <li><a href="#">Historial de órdenes</a></li>
              <li><a href="#">Lista de deseos</a></li>
              <li><a href="#">Boletín</a></li>
              <li><a href="#">Reembolsos</a></li>
            </ul>
          </div>

          <div className="newsletter">
            <h4 className="title-footer">Boletín informativo</h4>
            <form className="content" action="#" method="post">
              <p>
                Suscríbete a nuestros boletines ahora y mantente al día con nuevas colecciones y ofertas exclusivas.
              </p>
              <label htmlFor="newsletter-email" className="visually-hidden">Ingresa tu correo aquí...</label>
              <input type="email" id="newsletter-email" placeholder="Ingresa tu correo aquí..." required />
              <button type="submit">Suscríbete</button>
            </form>
          </div>
        </div>

        <div className="copyright">
          <p>
            Desarrollado por Milodón Coffee Roasters &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
