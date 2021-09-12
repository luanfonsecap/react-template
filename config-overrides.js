const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@common': path.resolve(__dirname, 'src/modules/common'),
      '@components': path.resolve(__dirname, 'src/modules/common/components'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@services': path.resolve(__dirname, 'src/modules/common/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  };
  return config;
};
