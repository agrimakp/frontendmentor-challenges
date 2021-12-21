module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 81%)",
        grayish: "hsl(229, 7%, 55%)",
        lightgray: "hsl(212.7, 44%, 95.1%)",
        darkgray: "hsl(218.8, 18.9%, 35.3%)",
        purple: "hsl(262.8, 55.5%, 51.6%)",
        lightpurple: "hsl(264.1, 84.1%, 70.4%)",

      },
      fontFamily: {
        body: ["Barlow Semi Condensed"],
      },
      backgroundImage: {
        "quotation-pattern": "url('../images/bg-pattern-quotation.svg')",
        "icon-folder": "url(../images/icon-folder.svg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
