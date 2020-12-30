/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-27 10:24:00
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-27 16:01:53
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
  //解析resolveloader 不然无法找到我们自定义的loader
  resolveLoader:{
    modules:[
      path.resolve(__dirname,'./webpack-loader/'),'./node_modules'
    ]
  },
  module:{
   rules:[
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
  new DefineWebpack({

   }),
  new BuildList()
  ] 
}