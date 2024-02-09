import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#8C8C8C',
        tertiary: '#696969',
        accentPrimary: '#000000'
        // You can add more colors as needed
      },
      backgroundImage: {
        'hero-img-mobile': "url('./public/mobile/image-hero.jpg')"
      }
    }
  },
  plugins: []
} satisfies Config
