/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
       
        main : "#ac441e",
        gray : "#707070",
        blck : "#0A0909"
      },
      fontFamily :{
        kr : ['Noto Sans KR', 'sans-serif'],
        en : ['Montserrat', 'sans-serif'],
      },
      fontSize : {
        title : '28px',
        subtitle : '18px',
        base : '16px',
        sm : '14px',
        xs : '12px',
      },
      fontWeight : {
        extraLight : '100',
        light : '100',
        thin : '300',
        regular : '400',
        medium : '500',
        semiBold : '600',
        bold : '700',
        black : '900',     
      }
  },
  plugins: [],
}
}

