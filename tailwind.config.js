/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      spacing: {
        50: "-50%",
        rate: "2%",
      },
      maxWidth: {
        48: "12rem",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(10rem,1fr))",
      },
    },
  },
  plugins: [],
};
