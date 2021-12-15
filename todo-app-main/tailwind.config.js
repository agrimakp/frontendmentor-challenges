module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {



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
  variants: {
    extend: {},
  },
  plugins: [],
};
