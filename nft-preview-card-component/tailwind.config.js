module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: "hsl(178, 100%, 50%)",
        blue: {
          soft: "hsl(215, 51%, 70%)",
          dark: "hsl(216, 50%, 16%)",
          darker: "hsl(217, 54%, 11%)",
          light: "hsl(215, 32%, 27%)",
        },
      },
      fontFamily: {
        'body': ['Outfit']
      },
      backgroundImage: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
