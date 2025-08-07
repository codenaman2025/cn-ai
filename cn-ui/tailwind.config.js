/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 30s linear infinite'
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        }
      },colors: {
        logo: {
          start: '#04D1FC',
          mid: '#7078F9',
          end: '#F55BB0',
          dark: '#1C1E26',
          light: '#F7F9FB',
        },
        primary: {
          DEFAULT: '#6366F1', // Violet like Fluent Design
          light: '#A5B4FC',
          dark: '#4F46E5',
        },
        secondary: '#22D3EE', // Cyan accent
        background: {
          light: '#ffffff',
          dark: '#0D0D0D',
        },
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(90deg, #04D1FC 0%, #7078F9 50%, #F55BB0 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

