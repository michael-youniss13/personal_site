var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const PUBLIC = path.resolve(__dirname, 'src/js/public');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {path: path.resolve(__dirname, './build'), filename: 'bundle.js', publicPath: '/'},
  optimization: {
    minimizer: [new UglifyJsPlugin()]
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
      template: path.resolve(__dirname, './index.html')
    })

  ]
};
