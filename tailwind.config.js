/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D121F',
        surface: '#1A1F2E', 
        primary: '#E042CE', 
        secondary: '#B1A6FF', 
        tertiary: '#4C6FFF', 
        quaternary: '#1CCAEC', 
      },
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #E042CE, #B1A6FF, #4C6FFF, #1CCAEC)',
      }
    },
  },
  plugins: [],
}
