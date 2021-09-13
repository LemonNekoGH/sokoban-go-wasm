const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'build/main.wasm'},
                { from: 'public/wasm_exec.js' }
            ]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    entry: './src/js/index.js',
    devServer: {
        port: '3000'
    }
}