/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dodgerblue: '#1E90FF',
        charcoal: '#0A0A0B',
        darkgray: '#141416',
        softwhite: '#F5F5F7',
        mutedgray: '#86868B',
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
