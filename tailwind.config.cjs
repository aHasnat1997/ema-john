/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1c2b35",

          "secondary": "#FFE0B3",

          "accent": "#ff9900",

          "neutral": "#2a414f",

          "base-100": "#ffffff",

          "info": "#A3C7E1",

          "success": "#95A0A7",

          "warning": "#F8911B",

          "error": "#F34447",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
