/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');



var dir_src = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(dir_src, 'index.js'),
    output: {
        path: dir_build,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: dir_src

            }

        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_src+ '/datas'}
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
