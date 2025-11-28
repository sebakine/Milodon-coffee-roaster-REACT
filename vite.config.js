import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Milodon-coffee-roaster-REACT/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          ui: ['@fortawesome/fontawesome-free', 'bootstrap']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
