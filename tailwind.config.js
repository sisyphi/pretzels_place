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
    screens: {
      'xs': '525px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}