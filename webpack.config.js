const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
  entry : path.resolve(__dirname, './web/src/main.js'),
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'www'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './web/src/index.html',
    }),
  ]
};

module.exports = config;