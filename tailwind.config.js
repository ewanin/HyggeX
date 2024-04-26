/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navText': '#3A3740',
        'darkBlue': '#06286E',
        'blue': '#164EC0',
        'gray': '#696671',
        'cyanBlue': "#202B37",
        'blackNew': '#28262C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-sarif'],
      }
    },
  },
  plugins: [],
}