
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
          cyan: '#2acfcf',
          darkViolet:'hsl(257, 27%, 26%)',
          Red: 'hsl(0, 87%, 67%)',
          Grays: 'hsl(0, 0%, 75%)',
          GrayiViolet: 'hsl(257, 7%, 63%)',
          DarkBlue: 'hsl(255, 11%, 22%)',
          DarkViolet: 'hsl(260, 8%, 14%)'
        
      },
      fontFamily: {
        poppins: ['poppins']
       
      },
    },
  },
  plugins: [],
}