const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

if (process.argv.includes('--development')) {
    baseConfig.entry.app.unshift('react-hot-loader/patch');
    baseConfig.entry.app.push('webpack-hot-middleware/client');
    baseConfig.output.filename = '[name].js';
} 

const devConfig = {
    devtool: '#source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HTMLPlugin({
            template: 'src/index.template.html'
        })
    ]
}

const prodConfig = {
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new HTMLPlugin({
            template: 'src/index.template.html'
        }),
        new ExtractTextPlugin('[name].[contenthash:7].css')
    ]
}

const resultConfig = process.argv.includes('--development') ? devConfig : prodConfig;

module.exports = Object.assign({}, baseConfig, resultConfig);