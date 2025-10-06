/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { colors: { brand: "#1D66A8", brandDark: "#0F2F4A", ink: "#0B0F19" } },
  },
  plugins: [],
};
