/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        inshad:'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
        shad:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      },
      borderColor:{
        hrg:'rgba( 255, 255, 255, 0.18 )',
      },
      borderWidth:{
        one:'1px'
      },
      fontFamily:{
        cherry:'"Cherry Bomb One", cursive',
      },
      zIndex:{
        togg:1000,
        head:999,
        foot:-9,
      }
    },
  },
  plugins: [],
}

