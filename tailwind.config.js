/** @type {import('tailwindcss').Config} */

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
    extend: {},
  },
  plugins: [],
}