const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const appVersion = require("./package.json").version
const { resolve } = require('path')

const SOURCE_DIR = resolve('src')
const OUTPUT_DIR = resolve('dist')

module.exports = {
  output: {
    filename: `bundle.${appVersion}.js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new CleanWebpackPlugin(OUTPUT_DIR), // Eliminate old bundle versions
    new htmlWebpackPlugin({
      template: 'webpack.html.template'
    })
  ]
}