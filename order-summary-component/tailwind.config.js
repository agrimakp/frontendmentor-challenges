module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: "hsl(178, 100%, 50%)",
        blue: {
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)",
          light: "hsl(225, 100%, 98%)",
          desaturated: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)",
        },
      },
      fontFamily: {
        'body': ['Red Hat Display']
      },
      backgroundImage: {
        'desktop-pattern': "url('../images/pattern-background-desktop.svg')",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
