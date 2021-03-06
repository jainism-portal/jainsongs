import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: ['hover:tw-bg-facebook', 'hover:tw-bg-twitter', 'hover:tw-bg-linkedin', 'hover:tw-bg-pinterest'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'linkblue': '#2952a3', // hsl(220, 60%, 40%)
        'facebook': '#3b5999',
        'twitter': '#55acee',
        'linkedin': '#0077B5',
        'pinterest': 'p#bd081c',
        'instagram': '#e4405f',
        'whatsapp': '#25D366',
        'youtube': '#cd201f',
        'telegram': '#0088cc',
        'github': '#211f1f'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
  prefix: 'tw-',
})