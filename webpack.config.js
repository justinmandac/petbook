const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
  entry : path.resolve(__dirname, './web/src/main.js'),
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'www'),
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './web/src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json', '.html', '.css'],
  },
};

module.exports = config;