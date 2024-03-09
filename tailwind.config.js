/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
   'container':'1600px'
      },
      fontFamily: {
        'poppins': ["Poppins"],
      },
      colors:{
         'primaryclr':'#002147',
         'secondaryclr':'#91A3B0',
         'thirdclr':'#20B2AA',
         'badgetxt01clr':'#FAEBD7',
         'badgeBg01clr':'#F2BA49',
         'badgeTxt02clr':'#EE204D',
         'reviewbg':'#F0F0F0',

      },
  backgroundImage:{
'checkmark':"url('/src/assets/Checkmark.png')",

  },

   
    },
  },
  plugins: [],
}
