const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
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
          "blue-sharpen": "#ebf8fe",
          "green-light": "#e8f8ea",
          "gold-light": "#f8f6da",
          "purple-light": "#fbeaf8",
		  "purple-deep":"#da30b5",
          "blue-dark": "#0B4B58",
          gray: "#C4C4C4",
          "gray-light": "#796D6D",
          "gray-text": "#8D8888",
          black: "#262626",
		  gold:"#ABA519",
		  green:"#1EB62D",
		  purple:"#DA30B5",
		  peach:"#FFEFEF",
		  
		  
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
  plugins: [require('tw-elements/dist/plugin')],

  
};
