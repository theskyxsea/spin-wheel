/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "640px",
      // => @media (min-width: 768px) { ... }

      lg: "750px",
    },
  },
  plugins: [],
};
