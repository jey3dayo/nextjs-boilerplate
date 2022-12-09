/** @type {import('next').NextConfig} */
const { NODE_ENV, APP_NAME } = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    env: NODE_ENV,
    appName: APP_NAME,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
