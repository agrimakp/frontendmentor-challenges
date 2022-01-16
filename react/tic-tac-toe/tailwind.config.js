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

        blueButton: "var( --blue-button-bg)",
        blueButtonHover: "var(--blue-button-bg-hover)",

        grayButton: "var(--gray-button-bg)",
        grayButtonHover: "var(--gray-button-bg-hover)",

        playerSelect:"var(--player-select-bg-color)",
        selector: "var(--selector-bg-color)",
      },

      shadow: {
        yellowButton: "var(--yellow-button-shadow)",
        blueButtonShadow: "var(--blue-button-shadow)",
        grayButtonShadow: "var(--gray-button-shadow)",
      },

      fontFamily: {
        body:["Outfit"],
      }
    },
  },
  plugins: [],
  mode: "jit",
};
