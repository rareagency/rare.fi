module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#0C1E4F"
        },
        black: "#000F1F",
        white: "#F9F9F9"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
