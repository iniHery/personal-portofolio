/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan mencakup path file Anda
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#f3f4f6", // Ganti dengan warna yang Anda inginkan
      },

      textColor: {
        foreground: "#333333", // Ganti dengan warna sesuai kebutuhan
      },
    },
  },
  plugins: [],
};
