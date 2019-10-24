const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    entry: './src/main.js',
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true,
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'string-replace-loader',
                        options: {
                            multiple: [
                                { search: '\/zondicons\/browser-window-add.svg', replace: '../src/svg/browser-window-new.svg', flags: 'g' },
                                { search: 's-paper', replace: 'news-paper', flags: 'g' },
                                { search: '\/zondicons\/star.svg', replace: '../src/svg/star-full.svg', flags: 'g' },
                                { search: '\/zondicons', replace: '\.\.\/src\/svg', flags: 'g' }
                            ]
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                ctx: {
                                    env: argv.mode
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            }
        ]
    },
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
});