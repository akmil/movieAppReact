let path = require('path'),
  webpack = require('webpack'),
  libPath = path.join(__dirname, 'app'),
  wwwPath = path.join(__dirname, 'dist'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssPlugin = new ExtractTextPlugin('bundle-[hash:6].css');

const pluginsWebpack = [
  cssPlugin,
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(libPath, 'index.html'),
  }),
];

module.exports = {
  entry: [
    path.join(libPath, 'app.js'),
    path.join(libPath, 'styles', 'main.scss'),
  ],
  devtool: 'none',
  output: {
    path: path.join(wwwPath),
    filename: 'bundle-[hash:6].js',
  },
  // optimization: {
  //
  // }
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]', // inline base64 URLs for <=10kb images, direct URLs for the rest
      }, {
        test: /\.s?css$/,
        loader: cssPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 'postcss-loader', 'sass-loader',
          ],
        }),
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: [
          /\.svg/,
          /\.eot/,
          /\.ttf/,
          /\.woff/,
          /\.woff2/,
        ],
        loader: 'file-loader?name=fonts/[name].[ext]',
      }, {
        test: /\.(json)$/,
        loader: 'json-loader', // inline base64 URLs for <=10kb images, direct URLs for the rest
      },
    ],
  },
  plugins: pluginsWebpack,
};
