module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
  mode: "jit",
  theme: {
    extend: {

      backgroundColor: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
        tertiary: "var(--color-background-tertiary)",

        accent: "var(--color-background-accent)",
        muted: "var(--color-background-muted)",
        due: "var(--color-background-due)",
      },

      colors: {
        accent: "var(--color-border-accent)",
        muted: "var(--color-border-muted)",
        due: "var(--color-border-due)",
      },

      textColor: {
        main: "var(--color-text-main)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
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
};
