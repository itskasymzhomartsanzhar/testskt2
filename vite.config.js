import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
