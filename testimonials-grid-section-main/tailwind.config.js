module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          pale: "hsl(243, 100%, 93%)",
          grayish: "hsl(229, 7%, 55%)",
          dark: "hsl(228, 56%, 26%)",
          darkest:"hsl(229, 57%, 11%)",
          light: "hsl(228, 45%, 44%)",
          active: "hsl(244.5, 82.6%, 68.4%)",
        },
      },
      fontFamily: {
        'body': ['Raleway']
      },
      backgroundImage: {
        'desktop-pattern': "url('../images/bg-desktop.png')",
        'icon-folder': "url(../images/icon-folder.svg)",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
