/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'feud-blue': '#1e3a8a',
        'feud-red': '#dc2626',
        'feud-gold': '#fbbf24',
      },
      fontFamily: {
        'game': ['Arial Black', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
