import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/loopstudios-landing-page/'
  // server: {
  //   host: true,
  // }
})
