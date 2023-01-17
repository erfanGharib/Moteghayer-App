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
          750: '#292929',
          780: '#212121',
          800: '#181818',
          900: '#141414',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      maxWidth: {
        1360: '1360px',
        1200: '1200px',
        750: '750px'
      },
      maxHeight: {
        800: '800px'
      },
      width: {
        '5/6': '90%',
        '2.5/5': '48%'
      },
      height: {
        '95vh': '95vh',
        '79vh': '79vh',
        '85vh': '85vh',
      },
      transitionDelay: {
        400: '400ms'
      }
    },
  },
  plugins: [],
}
