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
        "background-banner-image":
          "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        "background-banner-dark":
          "linear-gradient(to top, #09203f 0%, #537895 100%)",
        "background-title":
          "linear-gradient(90deg,#007eff -2.06%,#003e7e -2.05%,#007eff 97.16%)",

        "bgHome-dark":
          "linear-gradient(90deg, rgba(29,31,37,1) 0%, rgba(31,35,54,1) 52%, rgba(34,42,83,1) 100%);",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"], // auto

        // roboto: ['var(--font-roboto)', 'sans-serif'],  // Hoặc nếu bạn muốn tạo class riêng:
      },
      variants: {
        typography: ["dark"],
      },
    },
  },
  corePlugins: {
    // ...
    container: false,
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
