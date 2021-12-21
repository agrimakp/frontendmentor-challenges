module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          //Main Backround
          dark: "hsl(268, 75%, 9%)",
          //toggle background, keypad background, screen background
          veryDark: "hsl(268, 71%, 12%)",

          //keys
          dark1: "hsl(281, 89%, 26%)",
          darkest: "hsl(268, 47%, 21%)",
        },

        // text
        white: {
          neutral: "hsl(0, 0%, 100%)",
        },
        blue: {
          // main background ------theme 1
          desaturated: "hsl(222, 26%, 31%)",
          // screen background ------theme 1
          veryDark: "hsl(224, 36%, 15%)",
          // toggle background, keypad background ------theme 1
          dark1: "hsl(223, 31%, 20%)",
          // key background (del and reset)
          dark2: "hsl(225, 21%, 49%)",
          // key shadow (del and reset)
          dark3: "hsl(224, 28%, 35%)",
          // text
          darkGrayish: "hsl(221, 14%, 31%)",

          dark: "hsl(198, 20%, 13%)",
        },
        orange: {
          // key background
          lightGrayish: "hsl(30, 25%, 89%)",
          // key shadow
          grayishOrange: "hsl(28, 16%, 65%)",
        },
        red: {
          normal: "hsl(6, 63%, 50%)",
          dark: "hsl(6, 70%, 34%)",
        },
        yellow: {
          light: "hsl(52, 100%, 62%)",
        },

        // Keys

        magenta: {
          // key shadow
          vivid: "hsl(285, 91%, 52%)",
          //
          dark: "hsl(290, 70%, 36%)",
        },
        cyan: {
          // key background, toggle
          pure: " hsl(176, 100%, 44%)",

          soft: "hsl(177, 92%, 70%)",
        },
      },
      fontFamily: {
        body: ["Spartan"],
      },
      backgroundImage: {
        "icon-check": "url(../images/icon-check.svg)",
        "icon-slider": "url(../images/icon-slider.svg)",
        pattern: "url(../images/bg-pattern.svg)",
        "pattern-circles": "url(../images/pattern-circles.svg)",
        arrow: "url(../images/arrow.png)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
