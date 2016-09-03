var path = require('path');
var webpack = require('webpack');

const PUBLIC = path.resolve(__dirname, 'src/js/public');

module.exports = {
  entry: './src/js/index.js',
  output: {path: PUBLIC, filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  },
};
