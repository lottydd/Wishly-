/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      '2sm': '0.438rem',
      '3sm': '0.896rem',
      '3xl': '1.25rem',
      '4xl': '2.813rem',
      '5xl': '3.125rem',
      '6xl': '67.5rem',
    },
    colors: {
      custompurple: {
        100: '#575CE3',
        200: '#4E53CC',
        300: '#888BE6',
        400: '#9CACED',
        500: '#B9BAE9',
      },
      customgray: {
        100: '#EAEAEC',
        200: '#FEFEFE',
      },
    },
    fontSize: {
      custom0: '0.875rem',
      custom1: '1rem',
      custom1_5: '1.125rem',
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
      custom12: '0.75rem',
      custom13: '1.125rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    extend: {
      padding: {
        '121px': '121px',
      },
      width: {
        49: '9.375rem',
        53: '14.375rem',
        65: '21.875rem',
        112: '27.5rem',
        115: '30rem',
        116: '50rem',
        117: '62.5rem',
        118: '73.75rem',
      },
      height: {
        49: '9.375rem',
        51: '10.625rem',
        53: '14.375rem',
        54: '20rem',
        65: '21.875rem',
        111: '18.75rem',
        112: '62.5rem',
        113: '75rem',
        116: '81.25rem',
        118: '86.25rem',
      },

      size: {
        custom1: '15.625rem',
        custom2: '30rem',
      },

      space: {
        '15px': '15px',
      },
    },
  },
  plugins: [],
};
