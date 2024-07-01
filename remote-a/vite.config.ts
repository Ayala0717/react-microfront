import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteUtils',
      filename: 'remoteUtils.js',
      exposes: {
        './utils': './src/utils/index.ts'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist'
  },
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true
  },
  server: {
    cors: true
  }
})
