import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: true, // Change this line to false disable auto-refreshing.
  }
})
