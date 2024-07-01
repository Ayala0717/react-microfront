import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'hostApp',
      remotes: {
        remoteUtils: 'http://localhost:5001/assets/remoteUtils.js',
        remoteComponents: 'http://localhost:5002/assets/remoteComponents.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    proxy: {
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      }
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist'
  },
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
