/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        primary: "#8B2E1F",
        secondary: "#C44A2A",
        dark: "#0A0A0A",
      },
     screens: {
        xs: "480px",
        tablet: "900px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
}