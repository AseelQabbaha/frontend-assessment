const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
});