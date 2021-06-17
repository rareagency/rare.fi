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
      xl: { max: "1280px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "540px" },
    },
    fontFamily: {
      header: ["TTAutonomous"],
      "header-mono": [
        "TTAutonomousMono",
        "source-code-pro",
        "Menlo",
        "Monaco",
        "Consolas",
        "Courier New",
        "monospace",
      ],
      default: [
        "Altone",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        // Colors from Figma
        "off-white": "#F9F9F9",
        "action-purple": "#1941AA",
        "mid-blue": "#34517E",
        "dark-blue": "#0C1E4F",
        "notification-red": "#EF6969",
        "notification-green": "#84A849",
        "notification-yellow": "#FDB127",
        "light-green": "#CBE2D1",
        "light-red": "#F3D4CD",
        "light-yellow": "#F8F2E7",
        "light-blue": "#D5D9E3",

        // Colors not available in Figma
        black: "#000F1F",
        light: "#D5D9E3",
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
      scale: {
        125: "1.25",
      },
    },
    // Used in logo SVG
    fill: (theme) => ({
      "action-purple": theme("colors.action-purple"),
      "dark-blue": theme("colors.dark-blue"),
      "off-white": theme("colors.off-white"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
