module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    fontFamily: {
      TTAutonomousExtraBold: ["TTAutonomous-ExtraBold"],
      TTAutonomousExtraLight: ["TTAutonomous-ExtraLight"],
      TTAutonomousMonoRegular: ["TTAutonomousMono-Regular"],
      TTAutonomousMonoMedium: ["TAutonomousMono-Medium"],
      TTAutonomousMonoBold: ["TTAutonomousMono-Bold"],
      Altone: ["Altone-Regular"],
      AltoneMedium: ["Altone-Medium"],
      AltoneBold: ["Altone-Bold"],
    },
    extend: {
      colors: {
        blue: {
          dark: "#0C1E4F",
          light: "#1941AA",
          mid: "#34517E",
        },
        black: "#000F1F",
        white: "#F9F9F9",
      },
      height: {
        112: "28rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        240: "60rem",
        420: "105rem",
      },
      width: {
        112: "28rem",
        160: "40rem",
        240: "60rem",
      },
      gridColumn: {
        all: "span 8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
