const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

const production = process.env.RELEASE;

module.exports = {
  purge: {
    enabled: production,
    content: [
      './public/**/*.html',
      './src/**/*.{svelte,js}',
    ],
  },
  theme: {
    fontFamily: {
      'primary': ['"Inter var"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      ringWidth: ['group-hover']
    }
  },
  plugins: []
}
