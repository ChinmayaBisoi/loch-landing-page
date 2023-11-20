/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#E5E5E6",
          200: "#CACBCC",
          300: "#B0B1B3",
          900: "#19191A",
        },
      },
    },
  },
  plugins: [],
};
