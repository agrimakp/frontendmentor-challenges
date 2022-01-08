module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue : {
          veryDark: "#141D2F",
          dark:"#1E2A47",
          light: "#0079FF",
        }
      },
      fontFamily:{
        body:["Space Mono"],
      },
      backgroundImage:{
        "icon-company" : "url(../assets/icon-company.svg)",
        "icon-location" : "url(../assets/icon-location.svg)",
        "icon-moon" : "url(../assets/icon-moon.svg)",
        "icon-search" : "url(../assets/icon-search.svg)",
        "icon-sun" : "url(../assets/icon-sun.svg)",
        "icon-twitter" : "url(../assets/icon-twitter.svg)",
        "icon-website" : "url(../assets/icon-website.svg)",
      },
    },
  },
};
