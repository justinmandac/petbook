const path = require('path');
const config = {
  entry : path.resolve(__dirname, './web/src/main.js'),
  output: {
    filename: 'app.bundle.js',
    path: path(__dirname, 'wwww'),
  },
};

module.exports = config;