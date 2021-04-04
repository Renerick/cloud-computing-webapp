const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge:
        [
            "./public/**/*.html",
            "./src/**/*.{svelte,js}"
        ]
    ,
    theme: {
        fontFamily: {
            "primary": ["\"Inter var\"", ...defaultTheme.fontFamily.sans]
        },
        extend: {
            colors: {
                "light-blue": colors.lightBlue
            }
        }
    },
    plugins: []
};
