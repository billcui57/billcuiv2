module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'console-white': "#BBBFC4"
      },
      keyframes: {
        'profile-fade-out': {
            '0%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
        },
       
        'profile-fade-in': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
    },
    animation: {
        'profile-fade-in': 'profile-fade-in 0.5s ease-out',
        'profile-fade-out': 'profile-fade-out 1s ease-in',
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