const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint'
            }
        ],

        loaders: [
            {
                test: /\.json$/,
                loaders: [
                    'json'
                ]
            },
            {
                test: /\.pug$/,
                loaders: [
                    'pug-html'
                ]
            },
            {
                test: /\.(css|scss)$/,
                include: [
                    path.resolve(__dirname, "../src/app")
                ],
                loaders: [
                    'raw',
                    'sass',
                    'postcss'
                ]
            },
            {
                test: /\.(css|scss)$/,
                exclude: [
                    path.resolve(__dirname, "../src/app")
                ],
                loaders: [
                    'style',
                    'css',
                    'sass',
                    'postcss'
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'ts'
                ]
            },
            {
                test: /\.html$/,
                loaders: [
                    'html'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file'
            },
            {
                test   : /\.(png|gif|jpe?g)$/,
                loader : 'file'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: conf.path.src('index.html'),
            inject: true
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    postcss: () => [autoprefixer],
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(process.cwd(), conf.paths.tmp),
        filename: 'index.js'
    },
    resolve: {
        extensions: [
            '',
            '.webpack.js',
            '.web.js',
            '.js',
            '.ts'
        ]
    },
    entry: `./${conf.path.src('index')}`,
    ts: {
        configFileName: 'tsconfig.json'
    },
    tslint: {
        configuration: require('../tslint.json')
    }
};
