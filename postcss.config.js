// module.exports = (env) => ({
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         options: { importLoaders: 1 }
//                     },
//                     'postcss-loader'
//                 ]
//             }
//         ]
//     }
// })

module.exports = {
    plugins: [
        require('postcss-easy-import')({prefix: '_'}), // keep this first
        require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
    ]
}
//If your stylesheets import fonts
//Install postcss-url and insert require('postcss-url')({ url: 'inline' }) as the 2nd element of the plugins array in postcss.config.js.