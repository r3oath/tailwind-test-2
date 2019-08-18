const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config) => {
    const customConfig = Object.assign({}, config);

    customConfig.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@app': __dirname,
    });

    return customConfig;
  },
});
