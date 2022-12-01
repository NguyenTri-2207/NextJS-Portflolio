module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#08d565",
        yellow: "#feb633",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        Playfair: "'Playfair Display', 'serif'",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px",
      },
      gridGutterWidth: "1.875rem",
    }),
  ],
};
