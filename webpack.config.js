const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url?limit=25000'
      }
    ],
  }
};

module.exports = config;
