module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)",
          light: "hsl(225, 100%, 98%)",
          desaturated: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)",
          active: "hsl(244.5, 82.6%, 68.4%)",
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
