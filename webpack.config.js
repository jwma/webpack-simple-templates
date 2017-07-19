const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/index.js',
        macauDaily: './src/macauDaily.js',
        wechatOAuth2: './src/wechatOAuth2.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/asset'),
        publicPath: '/asset/'
    },
    externals: {
        jquery: 'jQuery',
        Vue: 'Vue'
    },
    devServer: {
        port: 8080,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/macau-daily-api': {
                changeOrigin: true,
                target: 'http://h5.newaircloud.com',
                pathRewrite: { '^/macau-daily-api': '' }
            },
            '/wechat-oa2': {
                target: 'http://e1.zhyxzc.com',
                changeOrigin: true,
                pathRewrite: { '^/wechat-oa2': '' }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

if (process.env.NODE_ENV === 'prod') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
}
