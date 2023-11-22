/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#E5E5E680",
          100: "#E5E5E6",
          200: "#CACBCC",
          300: "#B0B1B3",
          400: "#96979A",
          900: "#19191A",
        },
      },
    },
  },
  plugins: [],
};
