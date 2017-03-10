let webpackMerge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

let temp = webpackMerge(commonConfig, {

    entry: {
        'app': './src/main.ts'
    },

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/index.pug'
        }),

        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});

console.log(temp);

module.exports = temp;