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
        purple: {
          100: '#ffe3ff',
          200: '#ffcaff',
          300: '#f7b0ff',
          400: '#dd96ff',
          500: '#c47dff',
          600: '#ab64ff',
          700: '#914AFF',
          800: '#7831FF',
          900: '#5e17eb',
        },
        green: {
          100: '#ffffe4',
          200: '#ffffe4',
          300: '#ffffe4',
          400: '#ffffe4',
          500: '#ffffcb',
          600: '#ffffb2',
          700: '#fcff98',
          800: '#e3fc7f',
          900: '#c9e265',
        },
        pink: {
          100: '#ffdcff',
          200: '#ffdcff',
          300: '#ffdcff',
          400: '#ffdcff',
          500: '#ffdcff',
          600: '#ffc3ff',
          700: '#ffa9ff',
          800: '#ff90f5',
          900: '#f476db',
        },
        grey: {
          100: '#d9d9d9',
          200: '#d9d9d9',
          300: '#d9d9d9',
          400: '#d9d9d9',
          500: '#d9d9d9',
          600: '#d9d9d9',
          700: '#d9d9d9',
          800: '#c0c0c0',
          900: '#a6a6a6',
        },
        black: '#000000',
        white: '#ffffff'
      },
      fontFamily: {
        mono: ['SFMono-Regular', 'ui-monospace'/*, 'SFMono-Regular'*/],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
