/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'primary': '#F5F5F5',
        'secondary': '#B0B0B0',
        'accent': '#D4AF37',
      }
    },
  },
  plugins: [],
} 