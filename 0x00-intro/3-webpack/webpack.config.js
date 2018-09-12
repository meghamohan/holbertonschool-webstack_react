const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Holberton School webpack'})
  ]
};
