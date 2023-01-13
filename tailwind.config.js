/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{html,js}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          800: '#C38227',
          900: '#EF9E2C'
        },
        lenearWhite: {
          900: '#FFECD2'
        },
        black: {
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#181818',
          900: '#141414',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
