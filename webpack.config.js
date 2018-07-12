const path = require('path');
const htmlWebpackPlugins = require('html-webpack-plugin');
const firebase = require("firebase/app");
const firebaseDatabase = require('firebase/database');
const jQuery = require('jquery');

module.exports = {
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWebpackPlugins({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
                use: {
                    loader: 'file-loader'
                }
            },
        ]
    }
};