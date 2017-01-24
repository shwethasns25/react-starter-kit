const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const DEBUG = process.env.NODE_ENV !== 'production'

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    path.join(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules'),
      'src'
    ],
    // modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html')
    }),
    new ExtractTextPlugin("app.[hash].css")
  ],
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        loader: 'url?prefix=images/&limit=8000&mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        loader: 'url?prefix=images/&limit=8000&mimetype=image/jpeg'
      },
      {
        test: /\.woff$/,
        loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/, loader: 'file?prefix=fonts/'
      },
      {
        test: /\.eot$/, loader: 'file?prefix=fonts/'
      },
      {
        test: /\.json$/, loader: 'json'
      },
      {
        test    : /(\.scss|\.css)$/,
        include : /react-toolbox/,
        loader: DEBUG ? 'style!css?sourceMap!sass?sourceMap' : ExtractTextPlugin.extract('style', 'css!sass'),
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "config";',
    includePaths: [path.resolve(__dirname, "./src/styles")]
  }
}

if (DEBUG) {
  config.entry.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ])
}

module.exports = config
