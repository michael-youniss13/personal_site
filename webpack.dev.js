var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')



const PUBLIC = path.resolve(__dirname, 'src/js/public');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {path: path.resolve(__dirname, './build'), filename: 'bundle.js', publicPath: '/'},
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
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
        test: /\.(png|svg|jpg|gif|pdf|jar)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, './src/img/photos/icon.png')
    })
  ]
};
