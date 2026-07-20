/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.athosoo.com",
      },
    ],
  },
};

module.exports = nextConfig;
