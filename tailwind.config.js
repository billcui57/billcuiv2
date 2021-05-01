const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',

  theme: {
    theme: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
    extend: {
      
      colors: {
        'console-white': "#BBBFC4"
      },
      keyframes: {
        'fade-out': {
            '0%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
        },
       
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },

        'fade-in-stay': {
          '0%': {
              opacity: '0',

          },
          '100%': {
              opacity: '1',

          },
      },
    },
    animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-stay': 'fade-in-stay 0.5s ease-out',
        'fade-out': 'fade-out 1s ease-in',
    }
    },
    fontFamily: {
      console: ['source-code-pro'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}