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
        blue: 'hsl(209, 59%, 35%)',
        gold: 'hsl(37, 54%, 63%)',
        white:  'hsl(144, 33%, 97%)',
        lightblue1: 'hsl(205, 33%, 68%)',
        lightgold1: '	hsl(40, 72%, 80%)',
        lightblue2:  'hsl(203, 61%, 85%)',
        darkblue1:  'hsl(220, 15%, 55%)',
        darkgold1: 'hsl(29, 25%, 72%)',
        lightblue3: 'hsl(210, 50%, 60%)',
        lightblue4: 'hsl(202, 43%, 60%)'
      }
    },
  },
  plugins: [],
}
