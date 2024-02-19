/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heroBlue: "#2A4BA0",
      },
    },
  },
  plugins: [],
};
