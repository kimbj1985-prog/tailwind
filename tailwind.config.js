/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1550': '1550px'
      },
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
        title : '30px',
        navi : '24px',
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
      },
      screens: {
      xs: '375px',   // 모바일 소형
      sm: '578px',   // 모바일
      md: '820px',   // 태블릿
      xl: '1550px',  // 대형 데스크탑
    },
  },
  plugins: [],
}
}

