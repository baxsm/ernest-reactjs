/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBorder: 'rgba(255,255,255,0.2)',
        grayText: '#818185',
      }
    },
  },
  plugins: [],
}

