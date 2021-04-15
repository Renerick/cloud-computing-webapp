const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    purge:
        [
            "./public/**/*.html",
            "./src/**/*.{svelte,js}"
        ]
    ,
    theme: {
        extend: {
            colors: {
                "light-blue": colors.lightBlue
            }
        }
    },
    plugins: []
};
