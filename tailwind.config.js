/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Adding Poppins font
      },
      colors: {
        primary: '#8FA1B1',    // Adding primary color
        secondary: '#3680B9',
        primary1: '#444444',  // Adding secondary color
      },
    },
  },
  plugins: [],
}
