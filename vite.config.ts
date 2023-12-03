import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //경로 별칭 방식을 지정해줌
    alias: [
      {
        find: '~',
        replacement: '/src'
      }
    ]
  }
})
