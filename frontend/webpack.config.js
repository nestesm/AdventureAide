const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

let mode = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;
let target = 'web';

const isDevelopment = mode === 'development';

const cssLoader = (extra) => {
    const loaders = [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [tailwindcss, autoprefixer],
                },
            },
        },
    ];
    if (extra) {
        loaders.push(extra);
    }
    return loaders;
};

const plugins = [
    new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
];

if (isDevelopment) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode,
    target,
    plugins,
    devtool: isDevelopment ? 'source-map' : false,
    entry: './src/app/index.tsx',

    devServer: {
        port,
        open: true,
        historyApiFallback: true,
        static: path.join(__dirname, 'build'), // Изменение пути для devServer
        hot: isDevelopment,
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][hash][ext][query]',
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: cssLoader(),
                exclude: /\.module\.css$/,
            },
            {
                test: /\.module\.css$/,
                use: cssLoader({
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: isDevelopment ? '[name]__[local]' : '[hash]',
                        },
                    },
                }),
            },
            {
                test: /\.module\.scss$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: isDevelopment ? '[name]__[local]' : '[hash]',
                            },
                        },
                    },
                    'postcss-loader', // добавлено для автопрефиксов
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.ts(x?)$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss', '.module.scss', '.css', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: {
        minimize: !isDevelopment,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
};
