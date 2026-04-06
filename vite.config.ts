import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/moda-sapka-yeni/', // Burası klasör adınla aynı olmalı
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
