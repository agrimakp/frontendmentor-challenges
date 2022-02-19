module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
        tertiary: "var(--color-background-tertiary)",
      },
      textColor: {
        main: "var(--color-text-main)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      colors: {
        accent: "var(--color-border-accent)",
        muted: "var(--color-border-muted)",
      },
      backgroundImage: {
        "icon-home1": "url(./assets/bg-pattern-home-1.svg)",
        "icon-home2": "url(./assets/bg-pattern-home-2.svg)",
        "icon-home3": "url(./assets/bg-pattern-home-3.svg)",

        "icon-menu": "url(./assets/icon-hamburger.svg)",
        "icon-logo": "url(./assets/logo.svg)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  mode: "jit",
};
