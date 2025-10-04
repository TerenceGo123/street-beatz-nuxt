/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      'phone': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
        transitionDuration: {
            DEFAULT: '333ms'
        },
        transitionTimingFunction: {
            DEFAULT: 'ease-in-out',
        },
      colors: {
        brand: {
          orange: '#FFBE3C',
          yellow: '#FCD83A',
          darkGray: '#202020'
        },
      }},
  },
}

