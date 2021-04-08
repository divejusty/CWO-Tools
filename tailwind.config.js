const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
	  './src/**/*.vue',
	  './src/**/*.php',
	  './src/**/*.js',
  ],
  darkMode: 'class', // if a parent element had "dark" as a class, items will be rendered in dark mode
  theme: {
	  colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: colors.black,
		white: colors.white,
		gray: colors.blueGray,
		red: colors.red,
		blue: colors.blue,
	  },
    extend: {
		screens: {
			'print': {'raw': 'print'},
		}
	},
  },
  variants: {
    extend: {
		cursor: ['disabled'],
	},
  },
  plugins: [],
}
