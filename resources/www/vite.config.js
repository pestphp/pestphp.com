/** @type {import('vite').UserConfig} */

export default {
    base: 'www',
    // fixed port so it never races the docs Vite server (5173) under `composer dev`
    server: {
        port: 5174,
        strictPort: true,
    },
    build: {
        outDir: '../../public/www',
        emptyOutDir: true,
        rollupOptions: {

            output: {
                entryFileNames: '[name].[hash].js',
                assetFileNames: '[name]-[hash][extname]',
            },
        }
    },
}
