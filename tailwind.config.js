/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'custom-image': "url('./images/Heart-icon.svg')",
      }),

      width: {
        custom: '90%',
        custom70: '72%',
        custom80: '76%',
        custom8: '8%',
      },

      fontWeight: {
        moreMedium: '550',
      },
    },
    colors: {
      transparent: 'transparent',
      textColorFooter: 'hsla(0, 0%, 100%, 0.5)',
      columnColor: 'hsla(210, 2%, 20%, 1)',
      bedroomColor: 'hsla(0, 94%, 52%, 1)',
      colorWhiteBorder: 'hsla(240, 1%, 67%, 0.6)',
      colorBlack: 'hsla(210, 2%, 20%, 1)',
      colorGray: 'hsla(0, 0%, 77%, 1)',
      colorYellow: 'hsla(45, 86%, 62%, 1)',
      colorOrange: 'hsla(28, 87%, 62%, 1)',
      colorPeach: 'hsla(0, 79%, 63%, 1)',
      colorPurple: 'hsla(284, 59%, 64%, 1)',
      colorBlue: 'hsla(195, 86%, 64%, 1)',
      colorLightGreen: 'hsla(145, 50%, 62%, 1)',
      colorDarkGreen: 'hsla(146, 64%, 36%, 1)',
      colorDarkBlue: 'hsla(214, 84%, 56%, 1)',
      colorRed: 'hsla(0, 85%, 47%, 1)',
      colorMaroon: 'hsla(0, 92%, 24%, 1)',
      colorDarkestBlue: 'hsla(202, 86%, 29%, 1)',
      colorBrown: 'hsla(28, 81%, 37%, 1)',
      colorDarkPurple: 'hsla(271, 82%, 30%, 1)',
      colorDullBlue: 'hsla(195, 87%, 30%, 1)',
      colorGreen: 'hsla(112, 84%, 20%, 1)',
      filterColor: 'hsla(210, 2%, 20%, 1)',
      buttonColor: '#323334',
      textWhite: '#ffffff',
      quantityBorderColor: 'hsla(0, 0%, 0%, 0.3)',
      oneAndfourColor: 'hsla(210, 2%, 20%, 1)',
      formBackGroundColor: 'hsla(40, 7%, 92%, 0.7)',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
