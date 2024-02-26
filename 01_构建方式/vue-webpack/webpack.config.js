const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
  vue2 -> npm i vue-loader@15.4.1 vue-template-compiler@2.6.14 -D
  vue3 -> npm i vue-loader@next @vue/compiler-sfc -D
*/

// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: {
    'vue': 'Vue'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    })
  ]
}
