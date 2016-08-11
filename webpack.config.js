var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    //specigies the input is a file called index.js
  entry: APP_DIR + '/js/index.js',
    //the output file will be in the build directory and called bundle.js
  output: {
	  path: BUILD_DIR,
	  filename: 'bundle.js'
  },
  module : {
	  loaders:[
      {
        // babel compiles all js and jsx files in the app directory
        test:/\jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders:['style', 'css' ,'sass']
      }
    ]
  }
}

module.exports = config;
