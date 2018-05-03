const webpack = require('webpack');
const path = require('path'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';
const pluginsWebpack = [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
];

module.exports = function(env, options) {
const isProduction = options.mode === "production";
const config = {
    entry: [
        'react-hot-loader/patch',
        './app/app.js',
        './app/styles/main.scss'
    ],
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        sourceMap: true
                    }
                }]
            },
            /*{
                test: /\.s?[ac]ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }*/
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    watch: true,
    plugins: pluginsWebpack,
    devServer: {
        contentBase: './dist',
        hot: true
    }
};

    return config;
};