/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-08 08:46:34
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-09 11:14:18
 */
// const title = require('./title')
import './index.css'
// require('lodash')
var a = 6;
console.log(a)
// console.log(title)

import moment from 'moment'

console.log(moment)
// require('bootstrap') 

const path = require("path");
module.exports = {
  mode: "development",
  devtool: 'source-map',
  context: process.cwd(),
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  }
};
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack5-plugin');
const smw = new SpeedMeasureWebpackPlugin();
module.exports = smw.wrap({
  mode: "development",
  devtool: 'source-map',

});
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
 module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
            generateStatsFile: true, // 是否生成stats.json文件 }),
        })
          ]
        } 
 