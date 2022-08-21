// Libaries
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({})],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#005EB8',
          'border-radius-base': '3px',
          'font-size-base': '12px',
          'font-family': 'Roboto, sans-serif',
          'btn-font-weight': '500',
          'line-height-base': '1.2',
          'height-base': '28px',
        },
        javascriptEnabled: true,
      },
    },
  },
})
