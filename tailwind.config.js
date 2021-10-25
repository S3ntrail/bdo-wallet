const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#29303C',
          850: '#15181E'
        },
        blue: {
          350: '#4BA1C5',
        },
        yellow: {
          450: '#C5B84B'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
