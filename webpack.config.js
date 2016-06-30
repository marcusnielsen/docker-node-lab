var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/lib'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                query: {
                name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(json)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                query: {
                name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                query: {
                name: '[path][name].[ext]'
                }
            }
        ]
    }
}