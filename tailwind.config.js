const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        100: 100,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.clickable': {
          position: 'relative',
          cursor: 'pointer',
          'user-select': 'none',
        },
      };

      addUtilities(newUtilities, ['before', 'after']);
    }),
  ],
};
