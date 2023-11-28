/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
