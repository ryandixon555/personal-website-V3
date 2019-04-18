const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ryan Dixon | Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Ryan Dixon Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Ryan Dixon Portfolio', // short_name for manifest
  siteHeadline: 'Ryan Dixon Portfolios', // Headline for schema.org JSONLD
  siteUrl: 'https://www.ryandixonportfolio.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Ryan Dixon Portfolio',
  author: 'Ryan Dixon', // Author for schema.org JSONLD

  // Google Analytics
  googleAnalyticsID: 'UA-138619516-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
