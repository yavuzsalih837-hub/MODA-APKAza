import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base ayarı, GitHub Pages'deki alt klasör isminle aynı olmalıdır
  base: '/moda-sapka-yeni/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
