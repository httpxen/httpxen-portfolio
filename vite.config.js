import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  based: process.env.VITE_BASED_PATH || "/httpxen-portfolio",
})
