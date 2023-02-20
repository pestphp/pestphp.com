/** @type {import('vite').UserConfig} */

export default {
    base: 'www',
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
