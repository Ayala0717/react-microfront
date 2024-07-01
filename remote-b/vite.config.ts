import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteComponents',
      filename: 'remoteComponents.js',
      exposes: {
        './Button': './src/components/Ui/Button/index.tsx',
        './Card': './src/components/Ui/Card/index.tsx',
        './Input': './src/components/Ui/Input/index.tsx',
        './List': './src/components/Ui/List/index.tsx',
        './Toggle': './src/components/Ui/Toggle/index.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: true,
    outDir: 'dist',
    manifest: true
  },
  preview: {
    host: 'localhost',
    port: 5002,
    strictPort: true
  },
  server: {
    cors: true
  }
})
