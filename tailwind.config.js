/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#000875",
        "main-black": "#050A18",
      },

      gridTemplateColumns: {
        "home-lg": "5fr 3fr",
      },

      fontFamily: {
        space: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
