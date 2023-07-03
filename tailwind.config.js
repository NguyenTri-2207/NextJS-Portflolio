module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "red",
          },
        },
      }),
      colors: {
        main: "#08d565",
        yellow: "#feb633",
      },
      backgroundImage: {
        "gradient-main":
          " linear-gradient(90deg, rgba(63,163,106,1) 0%, rgba(12,208,95,1) 35%, rgba(9,121,56,1) 100%);",
        "bgHome-white": "url('/assets/bg-white.jpg')",
        "bgHome-dark":
          "linear-gradient(90deg, rgba(29,31,37,1) 0%, rgba(31,35,54,1) 52%, rgba(34,42,83,1) 100%);",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        Playfair: "'Playfair Display', 'serif'",
      },
      variants: {
        typography: ["dark"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1280px",
      },
      gridGutterWidth: "1.875rem",
    }),
  ],
};
