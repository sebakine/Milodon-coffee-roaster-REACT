// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/main.scss'

// Limpieza de URL para evitar conflictos con HashRouter
// Si la URL tiene un pathname extraño (ej: /contact) lo redirige a la raíz
(function() {
  const path = window.location.pathname;
  const baseUrl = import.meta.env.BASE_URL; // '/' en dev, '/Milodon.../' en prod

  // Normalizar path para ignorar trailing slash si es necesario
  const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  const cleanBase = baseUrl.endsWith('/') && baseUrl !== '/' ? baseUrl.slice(0, -1) : baseUrl;

  // Si estamos en la raíz correcta, no hacemos nada
  if (path === baseUrl || path === baseUrl + 'index.html') return;

  // Si el path comienza con la base, extraemos la parte "extra"
  if (path.startsWith(baseUrl)) {
    const relative = path.substring(baseUrl.length);
    if (relative && !relative.startsWith('#')) {
       // Redirigir a base + #/ + relativa
       // Ej: /contact -> /#/contact
       window.location.replace(baseUrl + '#/' + relative);
    }
  } else if (baseUrl === '/') {
      // Caso especial localhost: path es /contact, base es /
      // Redirigir a /#/contact
      const relative = path.substring(1); // quitar el / inicial
      window.location.replace('/#/' + relative);
  }
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
