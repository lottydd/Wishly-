/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      custompurple: {
        100: '#4E53CC',
        200: '#575CE3',
        300: '#888BE6',
        400: '#9CACED',
        500: '#B9BAE9',
      },
      customgray: {
        100: '#EAEAEC',
      },
    },
    fontSize: {
      custom1: '1.25rem',
      custom2: '1.5rem',
      custom3: '1.75rem',
      custom4: '2rem',
      custom5: '2.25rem',
      custom6: '2.5rem',
      custom7: '3rem',
      custom8: '3.125rem',
      custom9: '3.625rem',
      custom10: '4rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};
