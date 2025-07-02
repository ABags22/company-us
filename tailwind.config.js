// tailwind.config.js
module.exports = {
  darkMode: "class", // Pastikan ini adalah 'class', bukan 'media'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // tambahkan path lainnya jika perlu
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
