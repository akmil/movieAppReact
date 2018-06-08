const webpack = require('webpack'),
  path = require('path'),
  libPath = path.join(__dirname, 'app'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV !== 'production';
const pluginsWebpack = [
  new webpack.HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'index.html'),
  }),
];

module.exports = function (env, options) {
  const isProduction = options.mode === 'development';
  const config = {
    entry: [
      'react-hot-loader/patch',
      './app/app.js',
      './app/styles/main.scss',
    ],
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader', // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          }],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss'],
    },
    output: {
      path: path.resolve(`${__dirname}/dist`),
      publicPath: '/',
      filename: 'bundle.js',
    },
    watch: true,
    plugins: pluginsWebpack,
    devServer: {
      contentBase: './dist',
      historyApiFallback: true, // to serve the index.html instead of an 404 error when no other resource has been found at this location.
      hot: true,
    },
  };

  return config;
};
