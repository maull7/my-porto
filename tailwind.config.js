/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔥 Tambahkan ini agar mode gelap bisa diaktifkan secara manual dengan class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Inter','sans-serif']
      }
    },
  },
  plugins: [],
};
