const defaultTheme = require('tailwindcss/defaultTheme');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: production,
    content: [
      './**/*.html',
      './**/*.svelte',
    ],
  },
  theme: {
    fontFamily: {
      'primary': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      'primary': "#2589BD",
      'primary-dark': "#16425B",
      'text': "#242F40",
      'background': "#F7FAFC",
      'white': "#FFFFFF",
      'active': "#E7ECF0"
    },
    extend: {
      maxWidth: {
        '1/5': '20%',
        '2/5': '40%',
      },
      inset: {
        '-full': '-100%'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover'],
  },
  plugins: []
}
