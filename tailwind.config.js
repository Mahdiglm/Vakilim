/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': 'rgba(212, 175, 55, 0.5)',
        'gold-dark': '#AD8C28',
        black: {
          DEFAULT: '#000000',
          50: 'rgba(0, 0, 0, 0.5)',
          80: 'rgba(0, 0, 0, 0.8)',
          90: 'rgba(0, 0, 0, 0.9)',
          95: 'rgba(0, 0, 0, 0.95)',
        }
      },
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 5px 0 rgba(212, 175, 55, 0.2)',
        'gold': '0 0 15px 0 rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 30px 0 rgba(212, 175, 55, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% 50%' },
          '50%': { backgroundPosition: '-100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #D4AF37, #FFE062, #D4AF37)',
      },
    },
  },
  plugins: [],
} 