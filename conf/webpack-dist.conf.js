const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        loaders: [
            {
                test: /.json$/,
                loaders: [
                    'json'
                ]
            },
             {
                test: /.pug$/,
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
                loaders: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css?minimize!sass!postcss'
                })
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'ts'
                ]
            },
            {
                test: /.html$/,
                loaders: [
                    'html'
                ]
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file'
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
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true
            }, // eslint-disable-line camelcase
            mangle: {
                //except: ['$super', '$', 'exports', 'require'],
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('index-[contenthash].css')
    ],
    postcss: () => [autoprefixer],
    output: {
        path: path.join(process.cwd(), conf.paths.dist),
        filename: '[name]-[hash].js'
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
    entry: {
        app: `./${conf.path.src('index')}`,
        // vendor: Object.keys(pkg.dependencies).filter(dep => ['zone.js', 'reflect-metadata'].indexOf(dep) === -1)
    },
    ts: {
        configFileName: 'tsconfig.json'
    },
    tslint: {
        configuration: require('../tslint.json')
    }
};
