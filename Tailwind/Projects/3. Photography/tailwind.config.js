/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mob: {raw: "(max-width: 400px)"},
      }
    },
  },
  plugins: [],
};
