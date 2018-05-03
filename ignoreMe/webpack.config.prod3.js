var path = require('path'),
    webpack = require("webpack"),
    libPath = path.join(__dirname, 'lib'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');
var bundleCss = ("production" === process.env.NODE_ENV) ? "bundle-[hash:6].css" : "bundle.css";
var pluginsWebpack = [
    new ExtractTextPlugin(bundleCss),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
        template: path.join(libPath, 'index.html')
    })
];

if (process.env.NODE_ENV === "production") {
    var prodEnv = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin()
    ];

    pluginsWebpack.concat(pluginsWebpack, prodEnv);
}

module.exports = {
    entry: path.join(libPath, 'index.js'),
    devtool: ("production" === process.env.NODE_ENV) ? "source-map" : "eval-source-map",
    output: {
        path: path.join(wwwPath),
        filename: ("production" === process.env.NODE_ENV) ? 'bundle-[hash:6].js' : 'bundle.js'
    },
    babel: {
        presets: ['es2015']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: ("production" === process.env.NODE_ENV) ? 'file?name=templates/[name]-[hash:6].html' : 'file?name=templates/[name].html'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=img/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for the rest
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss")
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }, {
                test: [
                    /\.svg/,
                    /\.eot/,
                    /\.ttf/,
                    /\.woff/,
                    /\.woff2/
                ],
                loader: 'file?name=fonts/[name].[ext]'
            }, {
                test: /\.(json)$/,
                loader: 'json' // inline base64 URLs for <=10kb images, direct URLs for the rest
            }
        ]
    },
    plugins: pluginsWebpack,
    //Module not found: Error: Can't resolve 'fs' in 'D:\projects\movieApp_react\movieAppReact\node_modules\make-dir'
    node: {
        fs: "empty"
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    //Can't resolve 'child_process' in '\node_modules\worker-farm\lib'
    externals:[nodeExternals()] // to ignore all modules in node_modules folder from bundling
};