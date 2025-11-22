const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
});