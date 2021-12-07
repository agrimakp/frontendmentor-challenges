module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          Strong: "hsl(172, 67%, 45%)",
          verydark: "hsl(183, 100%, 15%)",
          darkgrayish: "hsl(186, 14%, 43%)",
          darkgrayish: "hsl(184, 14%, 56%)",
          lightgrayish: "hsl(185, 41%, 84%)",
          lightgrayish1: "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        body: ["Barlow Semi Condensed"],
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
