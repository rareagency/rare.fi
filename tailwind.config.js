module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#0C1E4F",
        },
        black: "#000F1F",
        white: "#F9F9F9",
      },
      height: {
        160: "40rem",
        152: "38rem",
        144: "36rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
