/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/template/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        magenta: '#FF00FF',
        darkBlue : '#002374',
        darkPurple: '#3730D9',
      },
      fontFamily:{
        poppins: ['poppins'],
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
