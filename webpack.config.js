const path = require('path');
const miniCss = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean : true,
        assetModuleFilename : 'assets/images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js)$/i,
                exclude: '/node_modules',
                use: {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js']
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    mode: 'development',
    plugins: [
        new miniCss(),
        new HtmlWebpackPlugin({
            title : 'Star wars',
            filename : 'index.html',
            template : 'src/index.html'
        })
    ]
};
