import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    // allow the Herd origin (pestphp.com.test) to load assets from the dev server —
    // recent Vite versions block cross-origin module requests by default
    server: {
        cors: true,
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
