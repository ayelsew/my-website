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
      }
    ]
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
