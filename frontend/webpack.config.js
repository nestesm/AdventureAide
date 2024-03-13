const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
let port = process.env.port;
let target = 'web';

if (process.argv[4] !== 'development') {
    mode = 'production';
    target = 'browserslist';
}

console.log("!!!mode =", process.argv[4]);


//

const plugins = [
    new MiniCssExtractPlugin({
        filename: mode === 'production' ? "[name].[contenthash].css" : "[name].css"
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode,
    target,
    plugins,
    devtool: mode === 'source-map',
    entry: './src/index.jsx',

    devServer: {
        port: port ?? 3000,
        open : true,
        historyApiFallback: true,
        static: './build',
        hot: mode === 'development',
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/[name][hash][ext][query]',
        clean: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/, use: ['html-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx','.scss','.module.scss','.css','.png'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
};
