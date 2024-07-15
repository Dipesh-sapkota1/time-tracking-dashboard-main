/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/input.css",
  ],
  theme: {
    extend: {
      colors:{
        accent_blue:{
          100:'hsl(236, 100%, 87%)',
          200:'hsl(235, 45%, 61%)',
          400:'hsl(246, 80%, 60%)',
          800:'hsl(235, 46%, 20%)',
          900:'hsl(226, 43%, 10%)',
          play:'hsl(195, 74%, 62%)',
        },
        red:{
          work: 'hsl(15, 100%, 70%)',
          study: 'hsl(348, 100%, 68%)',
        },
        violet_social: 'hsl(264, 64%, 52%)',
        green_exercise: 'hsl(145, 58%, 55%)',
        orange_care: 'hsl(43, 84%, 65%)',
      },
      fontFamily:{
        rubik: ["Rubik", 'sans-serif']
      }
    },
  },
  plugins: [],
}

