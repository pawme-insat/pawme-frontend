module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFDFC8",
          normal: "#ffa934",
        },
        secondary: {
          dark: "#2A8575",
          normal: "#b8dfd8",
          light: "#E8F6EF",
          lighter: "#F8F8FA",
        },
        gray: {
          normal: "#636363",
        },
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ['"Open Sans"', "sans-serif"],
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
