import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),federation({
    name: 'host-app',
    remotes: {
        remote_app: "http://127.0.0.1:4173/assets/remoteEntry.js",
    },
    shared: ['vue']
})],
  server:{
    port:5000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
