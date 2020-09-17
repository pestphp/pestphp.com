const mix = require("laravel-mix");

require("laravel-mix-tailwind");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/main.js", "public/js/main.js")
    .sass("resources/sass/app.scss", "public/css/app.css")
    .tailwind("./tailwind.config.js")

if (mix.inProduction()) {
    mix.version();
}
