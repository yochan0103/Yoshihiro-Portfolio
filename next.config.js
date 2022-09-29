/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimaizeFonts: true,
  }
}

module.exports = nextConfig
