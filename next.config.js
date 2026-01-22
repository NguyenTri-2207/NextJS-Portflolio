/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.bbcincorp.com",
        pathname: "/assets/flags/**",
      },
    ],
  },
};

module.exports = nextConfig;
