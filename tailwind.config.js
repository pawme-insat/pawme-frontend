module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFDFC8",
          normal: "#ffa934",
        },
        secondary: {
          normal: "#b8dfd8",
          light: "#E8F6EF",
          lighter: "#F8F8FA",
        },
        gray: {
          normal: "#3E3E3E",
        }
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
