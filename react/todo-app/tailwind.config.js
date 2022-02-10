module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue : {
          veryDark: "var(--color-background-primary)",
          desaturated: "var(--color-background-secondary)",
          grayish: "var(--color-text-main)",
          darkGrayish: "var(--color-text-secondary)",
          accent:"var(--color-text-accent)",
          brightblue:"var(--color-text-brightBlue)",
        }
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
};
