/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Enable i18n for all builds  
  i18n
}

module.exports = nextConfig