/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{// Here we can specify the screen sizes
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        purple: '#5e17eb',
        green: '#c9e265',
        pink: '#ee33c9',
        grey: '#a6a6a6',
        black: '#000000',
        white: '#ffffff'
      }
    },
  },
  plugins: [],
}
