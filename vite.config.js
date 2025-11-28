import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    // En desarrollo (npm run dev) usamos '/'
    // En producción (npm run build) usamos el nombre del repo para GitHub Pages
    base: mode === 'production' ? "/Milodon-coffee-roaster-REACT/" : "/",
  }
})