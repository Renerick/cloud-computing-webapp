let path = require('path');

module.exports = {
    entry: './src/main.js',
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.js', '.svelte'],
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
                        hotReload: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './public'
    }
};