const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~app': path.resolve(__dirname, 'src', 'app'),
      '~env': path.resolve(__dirname, 'src', 'env'),
      '~lib': path.resolve(__dirname, 'src', 'lib'),
    },
  },
};
