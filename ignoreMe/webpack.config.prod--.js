const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        './app/app.js',
        './app/styles/main.scss'
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?modules=false&localIdentName=[local]&minimize&importLoaders=2&url=true', // &sourceMap
                        'postcss-loader',
                        'sass-loader?outputStyle=expanded' // &sourceMap&sourceMapContents
                    ]
                })
            }
        ]
    },
    resolve: {
        root: path.resolve("./app"),
        modules: ['./node_modules'],
        extensions: ['*', '.scss', '.js', '.jsx']
    },
    output: {
        // path: path.resolve(__dirname + '/dist'),
        // publicPath: '/',
        // filename: 'bundle.js',
        filename: '[name].js', // -[hash].min

        sourceMapFilename: '[name].map', // -[hash]

        // chunkFilename: '[id]-[chunkhash].js'
    },
    watch: true,
    plugins: [
        new LoaderOptionsPlugin({
            options: {
                context: '/',
                sassLoader: {
                    includePaths: [path.resolve(__dirname, '../app')]
                },
                postcss: function () {
                    return [autoprefixer];
                }
            }
        })
    ]
};
