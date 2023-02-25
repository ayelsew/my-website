/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR","en-US"],
    defaultLocale: "pt-BR"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
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
