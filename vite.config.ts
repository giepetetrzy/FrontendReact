import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FrontendReact/',
  server: {
    port: 3030,
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    manifest: true,
  },
  preview: {
    host: true,
    port: 8081,
    open: true,
  },
  plugins: [react()],
})
