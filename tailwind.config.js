module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          'primary': '#0277BD',
        },
        gray: {
          'primary': '#EEEEEE',
        },
      },
      keyframes: {
        flipInX: {
          '0%': {
            'transform': 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
            'animation-timing-function': 'ease-in',
            'opacity': 0
          },
          '40%': {
            'transform': 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
            'animation-timing-function': 'ease-in',
          },
          '60%': {
            'transform': 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
            'opacity': 1,
          },
          '80%': {
            'transform': 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
          },
          '100%': {
            'transform': 'perspective(400px)',
          },

        },
      },
      animation: {
        flipInX: 'flipInX 1s',  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
