const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        100: 100,
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
      },
      width: {
        '23px': '23px',
        '25px': '25px',
        '65px': '65px',
        '222px': '222px'
      },
      height: {
        '2px': '2px',
        '23px': '23px',
        '25px': '25px',
        '27px': '27px',
        '29px': '29px',
        '35px': '35px',
        '39px': '39px',
        '40px': '40px',
        '45px': '45px',
        '47px': '47px',
        '50px': '50px',
        '58px': '58px',
        '60px': '60px',
        '63px': '63px',
        '70px': '70px',
        '80px': '80px',
        '100px': '100px',
        '150px': '150px',
        '154px': '154px',
        '222px': '222px',
        '320px': '320px',
      },
      lineHeight: {
        '6px': '6px',
        '45px': '45px',
      },
      boxShadow: {
        card: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        toggle: '0px 0px 2px 1.5px rgba(0, 0, 0, 0.25)'
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
