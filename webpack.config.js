const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/index.js',
        macauDaily: './src/macauDaily.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/asset'),
        publicPath: '/asset/'
    },
    externals: {
        jquery: 'jQuery'
    },
    devServer: {
        port: 8080,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/macau-daily-api': {
                target: 'http://h5.newaircloud.com',
                pathRewrite: { '^/macau-daily-api': '' }
            }
        }
    }
}