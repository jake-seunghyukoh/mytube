const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({ cssModules: true });

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve = {
      alias: {
        '@styles': path.join(__dirname, 'styles'),
        '@components': path.join(__dirname, 'components'),
        '@layouts': path.join(__dirname, 'layouts'),
      },
      ...config.resolve,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['i.ytimg.com'],
  },
};
