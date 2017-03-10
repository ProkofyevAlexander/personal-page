let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.pug/,
                loader: ['html-loader', 'pug-html-loader?exports=false']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.(css|scss)$/,
                exclude: [helpers.root('src', 'app'), helpers.root('compiled', 'app')],
                loader: ExtractTextPlugin.extract({
                    loader: [
                        {
                            loader: 'css-loader?importLoaders=1'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    fallbackLoader: 'style-loader'
                })
            },
            {
                test: /\.(css|scss)$/,
                include: [helpers.root('src', 'app'), helpers.root('compiled', 'app')],
                loaders: [
                    'raw-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]
}
;