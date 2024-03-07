import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), viteTsConfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000'
      }
    }
  }
})
