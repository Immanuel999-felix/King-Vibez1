/** @type {import('tailwindcss').Config} */
// tailwind.config.js - CORRECTED
module.exports = {
  content: ["./pages/**/*.{js,jsx,tsx}", "./components/**/*.{js,jsx,tsx}"],
  // ... rest of the config

  theme: {
    extend: {
      colors: {
        kvblack: "#0b0b0b",
        kvred: "#d62828",
        kvgold: "#d4af37",
        kvgray: "#121212"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
