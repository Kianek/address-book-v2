const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: 'http://localhost:5001',
    overlay: {
      warnings: false,
      errors: false
    }
  }
};
