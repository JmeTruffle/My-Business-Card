import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/shared/styles/vars/fonts.scss"; @import "./src/shared/styles/vars/colors.scss"; @import "./src/shared/styles/vars/keyframes.scss"; @import "./src/shared/styles/vars/properties.scss"; @import "./src/shared/styles/mixins/transform.scss";`,
      },
    },
  },
})
