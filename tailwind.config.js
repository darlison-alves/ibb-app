/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary-v1': '#E8BB2F',
        'primary-v1-light': '#e7d291',
        'primary': '#f46102',
        'primary-light': '#f46102a3',
        'primary-700': '#d36315c2',
        'secondary': '#92979A',
        'gray-lighter':'#E5E7EB',
        'gray-light': '#F9FAFB',
        'secudary-global-color': '#5B5B57'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
