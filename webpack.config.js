const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'cheap-module-source-map',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS
                ]
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader', // compiles TS to JS
                exclude: /node_modules/
            }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        // Generates entry HTML from template.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html',
        })
    ],

    devServer: {
        stats: {
            colors: true,
            assets: false,
            chunks: false,
            modules: false
        }
    }
};
