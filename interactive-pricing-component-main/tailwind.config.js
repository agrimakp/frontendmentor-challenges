module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          //Full Slider Bar
          soft: "hsl(174, 77%, 80%)",
          //Slider Backround
          strong: "hsl(174, 86%, 45%)",
        },
        red: {
          //Discount Background
          lightGrayish: "hsl(14, 92%, 95%)",
          //Discount Text
          light: "hsl(15, 100%, 70%)",
        },
        blue: {
          //CTA Text
          pale: "hsl(226, 100%, 87%)",
          //Main Background
          veryPale: "hsl(230, 100%, 99%)",
          //Empty Slider Bar
          lightGrayish: "hsl(224, 65%, 95%)",
          //Toggle Background
          mediumGrayish1: "hsl(223, 50%, 87%)",
          //Text
          grayish: " hsl(225, 20%, 60%)",
          //Text & CTA Background
          darkDesaturated: "hsl(227, 35%, 25%)",
        },
        white: {
          //Pricing Component Background
          neutral: "hsl (0, 0%, 100%)",
        },
      },
      fontFamily: {
        body: ["Manrope"],
      },
      backgroundImage: {
        "icon-check": "url(../images/icon-check.svg)",
        "icon-slider": "url(../images/icon-slider.svg)",
        "bg-pattern": "url(../images/bg-pattern.svg)",
        "pattern-circles": "url(../images/pattern-circles.svg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
