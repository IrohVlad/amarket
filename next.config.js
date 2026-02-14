/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/visit_example/",
  assetPrefix: "/visit_example/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-apple-store.ru",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.fishki.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
