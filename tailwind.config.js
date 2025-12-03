/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'feud-blue': '#0D3B66',        // Dark navy blue (background) - from UNLEASHED logo
        'feud-light-blue': '#5DADE2',  // Light blue (accents, team color) - from bear outline
        'feud-red': '#dc2626',         // Red (strikes) - keeping classic game show red
        'feud-gold': '#FDB927',        // Bright yellow (UNLEASHED text, answers, buttons)
      },
      fontFamily: {
        'game': ['Arial Black', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
