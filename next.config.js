const path = require("path");

module.exports = {
  trailingSlash: false,
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
  },
  // i18n: {
  //   /**
  //    * Provide the locales you want to support in your application
  //    */
  //   locales: ["en", "vi"],
  //   /**
  //    * This is the default locale you want to be used when visiting
  //    * a non-locale prefixed path.
  //    */
  //   defaultLocale: "en",
  // },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
