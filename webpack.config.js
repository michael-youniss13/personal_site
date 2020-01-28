var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PUBLIC = path.resolve(__dirname, 'src/js/public');

module.exports = {
  entry: './src/js/index.js',
  output: {path: path.resolve('./build'), filename: 'bundle.js', publicPath: path.resolve('./build/')},
  devServer: {
    publicPath: path.resolve('./build/')
  },
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
        loaders: ["style-loader", "css-loader","sass-loader"]
      },
      {
       test: /\.(png|jpg)$/,
       include: path.resolve(__dirname, 'src/img'),
       loader: 'url-loader?limit=10000000'
     }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./index.html')
    })

  ]
};
