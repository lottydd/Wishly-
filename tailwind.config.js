/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      '4xl': '2.813rem',
      '5xl': '3.125rem',
    },
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
      custom1: '1rem',
      custom2: '1.25rem',
      custom3: '1.5rem',
      custom4: '1.75rem',
      custom5: '1.875rem',
      custom6: '2rem',
      custom7: '2.25rem',
      custom8: '2.5rem',
      custom9: '3rem',
      custom10: '3.125rem',
      custom11: '3.625rem',
      custom12: '4rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    extend: {
      size: {
        custom1: '15.625rem',
      },

      space: {
        '15px': '15px',
      },
    },
  },
  plugins: [],
};
