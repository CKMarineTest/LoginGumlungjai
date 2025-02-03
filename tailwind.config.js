module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '128': '32rem', 
        '144': '36rem',
        '160': '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
