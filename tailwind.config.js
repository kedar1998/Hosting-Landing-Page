/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {screens:{
    sm:'480px',
    md:'768px',
    lg:'1020px',
    xl:'1440px'
  },
    extend: {
      colors:{
        primary:'#056aeb',
        secondary: '#09b7f7',
      }
    },
  },
  plugins: [],
}
