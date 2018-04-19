const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './public/js/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './')
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
};
