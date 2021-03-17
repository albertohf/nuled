module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': { 'min': '450px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px', 'max': '1919px' },
      '2xl': { 'min': '1920px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
