/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        humane: 'Humane, sans-serif',
        nohemi: 'Nohemi, sans-serif'
      },
      backgroundImage: {
        main: "url('./src/assets/Background.svg')"
      }
    }
  },
  plugins: []
}
