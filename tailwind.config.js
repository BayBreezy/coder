module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f2fb",
          100: "#e6e6f8",
          200: "#c0bfed",
          300: "#9b99e2",
          400: "#4f4dcd",
          500: "#0400b7",
          600: "#0400a5",
          700: "#030089",
          800: "#02006e",
          900: "#02005a",
        },
      },
      animation: {
        "fade-down": "fade-down 0.3s linear",
        "bounce-out": "bounce-out 0.5s",
      },
      keyframes: {
        "fade-down": {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { opacity: 1 },
        },
        "bounce-out": {
          "0%": { transform: "scale(0)" },
          "40%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["'Roboto Mono'"],
      },
    },
  },
  plugins: [],
};
