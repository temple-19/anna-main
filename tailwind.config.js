/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-white": "#fff5ea",
        "buttons-primary": "#5d5341",
        lightgray: "#d4d4d4",
        white: "#fff",
        background: "#fcfdfc",
        "extra-stuff-dark-white": "#d7d7d7",
        "primary-greeen": "#5d5340",
        "primary-black": "#111",
        "extra-stuff-70-blak": "rgba(17, 17, 17, 0.7)",
        black: "#000",
        orange: {
          "100": "#eb9b02",
          "200": "#e89802",
        },
        gray: {
          "100": "#272423",
          "200": "#060a05",
          "300": "rgba(6, 10, 5, 0.8)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.7)",
        },
        dimgray: "rgba(93, 83, 65, 0.2)",
        oldlace: "#fff5e9",
        darkslategray: "#414b3b",
      },
      spacing: {},
      fontFamily: {
        caption: "'Circular Std'",
      },
      borderRadius: {
        "7xs-9": "5.9px",
        "14xl-4": "33.4px",
        "25xl": "44px",
        "468xl-8": "487.8px",
        base: "16px",
        "232xl-9": "251.9px",
        "39xl": "58px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      mini: "15px",
      "25xl": "44px",
      "4xl": "23px",
      "36xl": "55px",
      "16xl": "35px",
      "27xl-6": "46.6px",
      "lgi-5": "19.5px",
      "3xl": "22px",
      "7xl": "26px",
      "13xl": "32px",
      "13xl-9": "32.9px",
      "50xl": "69px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
