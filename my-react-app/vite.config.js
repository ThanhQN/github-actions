import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8', // or 'c8' if you prefer
      reporter: ['text', 'json', 'html'], // choose your preferred formats
    },

  },

})
