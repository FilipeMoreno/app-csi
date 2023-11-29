/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'colegiosantoinacio.com.br',
        port: '',
      },
    ],
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
