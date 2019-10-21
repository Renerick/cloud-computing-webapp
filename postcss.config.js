const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.svelte',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        purgecss,
        require("cssnano")({
            preset: "default"
        })
    ]
}