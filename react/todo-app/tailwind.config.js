module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue : {
          veryDark: "hsl(235, 21%, 11%)",
          desaturated: "hsl(235, 24%, 19%)",
          grayish: "hsl(234, 39%, 85%)",
          darkGrayish: "hsl(234, 11%, 52%)",
        }
      },
      fontFamily: {
        body: ["Josefin Sans"],
      },
      backgroundImage: {

        "icon-check": "url(../images/icon-check.svg)",
        "icon-cross": "url(../images/icon-cross.svg)",
        "icon-moon": "url(../images/icon-moon.svg)",
        "icon-sun": "url(../images/icon-sun.svg)",


        "desktop-dark": "url(../images/bg-desktop-dark.jpg)",
        "desktop-light": "url(../images/bg-desktop-light.jpg)",
        "mobile-dark": "url(../images/bg-mobile-dark.jpg)",

      },
    },
  },
};
