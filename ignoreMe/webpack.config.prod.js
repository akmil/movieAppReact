const webpack = require('webpack');
const path = require('path');

const autoprefixer = require('autoprefixer');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');


module.exports = function(env, options) {
    const config = {
        entry: [
            './index.html',
            './app/app.js',
            './app/styles/main.scss'
        ],
        bail: true,
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
        /*resolve: {
            modules: ['node_modules'],
            extensions: ['*', '.js', '.jsx', '.scss']
        },*/
        /*output: {
            path: path.resolve(__dirname + '/dist'),
            publicPath: '/',
            filename: 'bundle.js'
        },*/
        output: {

            path: path.resolve(__dirname, '../dist'),

            filename: '[name].js', // -[hash].min

            sourceMapFilename: '[name].map', // -[hash]

            chunkFilename: '[id]-[chunkhash].js'

        },
        watch: true,
        plugins: [
            new CleanWebpackPlugin(['./dist'], {
                root: path.resolve(__dirname, '..'),
                exclude: '.gitignore'
            }),
            new ExtractTextPlugin('[name].css'), // -[chunkhash].min
            new LoaderOptionsPlugin({
                options: {
                    context: '/',
                    sassLoader: {
                        includePaths: [path.resolve(__dirname, '../app/styles')]
                    },
                    postcss: function () {
                        return [autoprefixer()];
                    }
                }
            })
        ]

    };

    return config;
};