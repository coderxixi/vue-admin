import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "./vite/alias"
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
  alias,
  },
  plugins: [vue()],
  server:{
    open:true
  }
})
