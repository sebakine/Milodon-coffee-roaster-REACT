import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: El nombre debe coincidir EXACTO con tu repositorio en GitHub
  // Debe empezar y terminar con barra /
  base: "/Milodon-coffee-roaster-REACT/",
})