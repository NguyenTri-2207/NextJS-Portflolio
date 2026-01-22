module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.900'),
            },
            h3: {
              color: theme('colors.gray.900'),
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.main'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.main'),
            },
          },
        },
      }),
      colors: {
        main: "#FF9900",
        yellow: "#FF9900",
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(90deg, #FF9900 0%, #FF8C00 50%, #FF7F00 100%);",
        "bgHome-white": "linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)",
        "background-banner-image":
          "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        "background-banner-dark":
          "linear-gradient(to top, #09203f 0%, #537895 100%)",
        "background-title":
          "linear-gradient(90deg,#007eff -2.06%,#003e7e -2.05%,#007eff 97.16%)",

        "bgHome-dark":
          "linear-gradient(to bottom, #1f2937 0%, #111827 100%);",
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
