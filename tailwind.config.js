/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { lime: '#B8F28A', ink: '#111111', paper: '#FAFAF7', mist: '#EDEDE8' },
      fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
