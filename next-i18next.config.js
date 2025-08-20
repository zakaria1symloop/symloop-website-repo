const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['fr', 'en', 'ar'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}