const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new MiniCssExtractPlugin(),
            new CopyPlugin({
                patterns: [{
                    from: 'src/assets/fonts',
                    to: './fonts'
                },
                    {
                        from: 'src/assets/images',
                        to: './images'
                    },
                    {
                        from: 'src/assets/videos',
                        to: './videos'
                    }
                ],
            }),
        ];

        return plugins;
    };

    return {
        mode: 'development',

        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, './build'),
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                            },
                        },
                        {
                            loader: "postcss-loader",
                        },
                        {
                            loader: "sass-loader",
                        }
                    ],
                }
            ]
        },

        resolve: {
            extensions: [
                '.js'
            ],
        },

        plugins: getPlugins(),

        devServer: {
            historyApiFallback: true,
            open: true
        }
    };
};
