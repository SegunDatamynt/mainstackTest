/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'



export default defineConfig({
  plugins: [
      react(),
    vitePluginRequire(),
    esbuildCommonjs(['react-calendar','react-date-picker','CanvasJSReact'])
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',

    css: true,
  },
})
