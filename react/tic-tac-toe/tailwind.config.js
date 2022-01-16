module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      text: {
        primary: "var(--primary-text-color)",
        secondary: "var(--secondary-text-color)",
        button: "var(--button-text-color)",
      },

      backgroundColor: {
        main: "var(--main-bg-color)",
        yellowButton: "var(--yellow-button-bg)",
        yellowButtonHover: "var(--yellow-button-bg-hover)",

      },
    },
  },
  plugins: [],
  mode: "jit",
};
