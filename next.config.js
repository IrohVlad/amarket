/** @type {import('next').NextConfig} */
const nextConfig = {
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
