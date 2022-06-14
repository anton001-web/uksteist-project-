const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`


module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: `./js/main/${filename('js')}`,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `assets/fonts/${filename('[ext]')}`
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Test",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: `./styles/${filename('css')}`
        })
    ],
    devServer: {
        port: 3001
    },
    mode: 'development'
}