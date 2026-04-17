/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://accidentpros.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  exclude: ['/thank-you', '/api/*'],
}
