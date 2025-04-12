/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        boxblue: "#007bff",
        boxwhite: "ffffff",
        boxyellow: "#fff13e", // warna tombol "Book Now"
      },
    },
  },
  plugins: [],
};
