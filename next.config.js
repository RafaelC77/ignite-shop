/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    image: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
