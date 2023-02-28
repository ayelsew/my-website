/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.behance.net"
      }
    ]
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
