var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  entry: {
    yujian:'./src/yujian.js',
  },
  output: {
    path: './bundle',
    filename: '[name].min.js',
    publicaPath: './'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract( 'style-loader', "css!sass")
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png,limit=1"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: "file-loader"
      },
      {
        test:/jquery.min\.js$/,
        loader:"expose?$!expose?jQuery"
      },
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
        query: {
          engine: 'lodash'
        }
      }
    ]
  },
  plugins: [
    new Clean(['dist']),
    new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
    new ExtractTextPlugin("[name].css")
  ],
  resolve:{
      alias:{jquery:"jquery/dist/jquery.min.js"}
  },
  amd:{}
};