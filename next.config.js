/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.builder.io"],
  },
  typescript: {
    // Ignore TypeScript errors during build for now
    ignoreBuildErrors: false,
  },
  eslint: {
    // Ignore ESLint errors during build for now
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
