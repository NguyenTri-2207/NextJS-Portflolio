const path = require("path");

module.exports = {
  trailingSlash: false,
  pageExtensions: ['index.tsx', 'index.ts', 'index.jsx', 'index.js'],
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
