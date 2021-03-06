 
const {merge} = require('webpack-merge');
const webpack = require('webpack');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
  devtool: 'source-map',
  mode:'production',
   plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
           'process.env.NODE_ENV': JSON.stringify('production')
    })
   ]
 });