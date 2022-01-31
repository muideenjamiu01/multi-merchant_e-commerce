const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#46B2C8",
          "blue-light": "#EEF4F5",
          "blue-dark": "#0B4B58",
          gray: "#C4C4C4",
          "gray-light": "#796D6D",
          black: "#262626",
        },
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    minWidth: {
      88: "22rem",
    },
    fontFamily: {
      "br-sonoma": ["'BR Sonoma'"],
    },
    maxHeight: {
      128: "32rem",
    },
  },
  plugins: [],
};
