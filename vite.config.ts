import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173, // optional, default is 5173
  }
})