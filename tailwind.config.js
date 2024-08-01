/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html', // For static HTML files
    './src/**/*.{js,jsx,ts,tsx}', // For all JavaScript and TypeScript files in src directory
  ],
  darkMode: 'class', // Enables dark mode based on class applied to the HTML tag
  theme: {
    extend: {},
  },
  plugins: [],
}
