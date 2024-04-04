const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader');
const autoprefixer = require('autoprefixer');

/*
  vue2 -> npm i vue-loader@15.4.1 vue-template-compiler@2.6.14 -D
  vue3 -> npm i vue-loader@next @vue/compiler-sfc -D
*/


/*
  sass less -> sass sass-loader
  postcss postcss-loader -> 浏览器样式兼容autoprefixer
  css-loader: css模块化解析
  vue-style-loader
*/

const _ = './41_pinia实现/';

module.exports = {
  mode: 'development',
  entry: _ + 'src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: {
    'vue': 'Vue'
  },
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js'
  //   }
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  devtool: 'source-map',
  // 将自定义 loader 与 node_modules 合并
  // resolveLoader: {
  //   modules: [
  //     'node_modules',
  //     resolve(__dirname, _ + '/loaders')
  //   ]
  // },
  module: {
    rules: [
      // {
      //   test: /\.tpl$/,
      //   loader: 'tpl-loader',
      //   options: {
      //     consoleLog: false
      //   }
      // },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // template: resolve(__dirname, 'public/index.html')
      template: resolve(__dirname, _ + 'public/index.html')
    })
  ]
}
