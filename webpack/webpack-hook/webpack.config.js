/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-27 10:24:00
 * @LastEditors: Mfy
 * @LastEditTime: 2021-01-04 19:52:04
 */

const {MyWebpackPlugin,DefineWebpack} = require('./webpack-plugins/mywebpack.js')
const BuildList = require('./webpack-plugins/buildList')
const path = require('path');


module.exports={
  mode:'development',
  entry: {
    index:'./src/index.js',
    // app:'./src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true
 },
  //解析resolveloader 不然无法找到我们自定义的loader
  resolveLoader:{
    modules:[
      path.resolve(__dirname,'./webpack-loader/'),'./node_modules'
    ]
  },
  module:{
   rules:[
    {
      test:/\.(css|less)$/,
      use:['style-loader','css-loader'],
      include:path.resolve(__dirname,'./src'),
      exclude:path.resolve(__dirname,'./node_modules'),
    },
     {
       test:/\.(js)$/,
       loader:'js-loader',
       include:path.resolve(__dirname,'./src'),
       exclude:path.resolve(__dirname,'./node_modules'),
       options:{
         name:'index'
       }
     }
   ]
  },
  plugins:[
  //  new  MyWebpackPlugin({
  //   param:'paramValue'
  //  }),
  // new DefineWebpack({

  //  }),
  // new BuildList()
  ] 
}