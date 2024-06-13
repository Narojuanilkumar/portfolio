
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0A192F",
        "Secondary":"#ebb134",
        "teritery":"#34eba5"
      }
    },
    screens: {
     

      'lg': {'max': '2023px'},
    

      'sm': {'max': '639px'},
    
    },
  },
  plugins: [],
}