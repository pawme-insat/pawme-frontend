module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#F57600',
          normal: '#ffa934',
          light: '#FFDFC8',
        },
        secondary: {
          dark: '#1C7363',
          normal: '#2A8575',
          medium: '#9ADED2',
          light: '#b8dfd8',
          lighter: '#E8F6EF',
        },
        gray: {
          normal: '#636363',
        },
        backgrounds: {
          normal: '#f8f8fa',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'sign-in': "url('assets/signInPic.png')",
        'sign-up': "url('assets/signUpPic.png')",
        'add-pet': "url('assets/addPetBg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
