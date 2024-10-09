/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      margin: {
        'm': '7.95rem'
      },
      height: {
        'h': '30rem',
        'h1': '38rem'
      },
      backgroundColor: {
        'bg-3': '#f4ede4',
        'bg-4': '#4a154b'
      },
      textColor: {
        'txt-clr': '#1264a3'
      },
      backgroundImage: {
        'BG': 'url(./Images/BG202.jpg)'
      },
      transformOrigin:{
        'translateX' : 'translateX(2)'
      },
      fontFamily:{
        'font':'Geologica'
      }
    },
  },
plugins: [],
}

