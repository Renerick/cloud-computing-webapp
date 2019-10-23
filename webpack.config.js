const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    console.log(argv.mode);
    return {
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
    }
};