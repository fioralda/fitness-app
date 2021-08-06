const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        yellow: "url('images/bg-1.svg')",
        circle: "url('images/bg-2.svg')",
      }),
      colors: {
        fioralda: {
          orange: '#E18553',
          blue: '#569EBA',
          yellow: '#FFD062',
          pink: '#F3CAB2',
          dark: {
            orange: '#DF8556',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
};
