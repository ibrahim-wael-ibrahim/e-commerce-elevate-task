/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#333", // Custom gray color
        customYellow: "#F9BA48", // Custom yellow color
      },
      animation: {
        cartLines: "cartLines 2s ease-in-out infinite",
        cartTop: "cartTop 2s ease-in-out",
        cartWheel1: "cartWheel1 2s linear infinite",
        cartWheel2: "cartWheel2 2s linear infinite",
        cartWheelStroke: "cartWheelStroke 2s ease-in-out",
        msg: "msg 2s ease-in-out", // Custom message animation
      },
      keyframes: {
        msg: {
          "0%": { opacity: 1, visibility: "visible" },
          "99.9%": { opacity: 0, visibility: "visible" },
          "100%": { opacity: 0, visibility: "hidden" },
        },
        cartLines: {
          "from, to": { opacity: 0 },
          "8%, 92%": { opacity: 1 },
        },
        cartTop: {
          "0%": { "stroke-dashoffset": "-338" },
          "50%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "338" },
        },
        cartWheel1: {
          from: { transform: "rotate(-0.25turn)" },
          to: { transform: "rotate(2.75turn)" },
        },
        cartWheel2: {
          from: { transform: "rotate(0.25turn)" },
          to: { transform: "rotate(3.25turn)" },
        },
        cartWheelStroke: {
          "from, to": { "stroke-dashoffset": "81.68" },
          "50%": { "stroke-dashoffset": "40.84" },
        },
      },
    },
  },
  plugins: [],
};
