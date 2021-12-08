module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          strong: "hsl(172, 67%, 45%)",
          verydark: "hsl(183, 100%, 15%)",
          darkgrayish: "hsl(186, 14%, 43%)",
          darkgrayish1: "hsl(184, 14%, 56%)",
          lightgrayish: "hsl(185, 41%, 84%)",
          lightgrayish1: "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
          lightgray:"hsl(202.5, 50%, 96.9%)",
        },
      },
      fontFamily: {
        body: ["Space Mono"],
      },
      backgroundImage: {
        "icon-person": "url(../images/icon-person.svg)",
        "icon-dollar": "url(../images/icon-dollar.svg)",
        "logo": "url(../images/logo.svg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
