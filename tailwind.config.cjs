/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-kb-theme="dark"]'],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {}
    },
    plugins: [
      // default prefix is "ui"
      require("@kobalte/tailwindcss"),
    ]
  };