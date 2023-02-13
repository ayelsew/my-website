/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR","en-US"],
    defaultLocale: "pt-BR"
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
