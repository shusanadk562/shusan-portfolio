import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/http://www.shusanadhikari.com.np//', // 👈 must start and end with a slash
})
