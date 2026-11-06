const mix = require('laravel-mix');

mix.js('resources/js/app.tsx', 'public/js/app.js')
   .react()
   .postCss('resources/css/app.css', 'public/css/app.css', [])
   .setPublicPath('public');