import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shusan-portfolio/', // 👈 must start and end with a slash
})
