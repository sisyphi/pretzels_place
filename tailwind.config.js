/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      brown: '#60514E',
      offwhite: '#F7EADA',
      orange: '#C68E75',
    },
    fontFamily: {
      'poppins': ['Poppins', 'san-serif'],
      'generalsans': ['"General Sans"', 'sans-serif'],
    },
    screens: {
      'xs': '525px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}