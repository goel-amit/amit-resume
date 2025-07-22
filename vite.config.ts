import { defineConfig } from 'vite'

export default defineConfig({
  // Serve static files from the root directory
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    host: true,
    port: 5173
  }
})