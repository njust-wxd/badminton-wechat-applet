const path = require('path');

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/global.less')],
    },
  },
};
