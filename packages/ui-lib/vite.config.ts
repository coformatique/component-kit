import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import copy from 'rollup-plugin-copy';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'MyLib',
            formats: ['es', 'umd'],
            fileName: (format) => `ui-lib.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
            // plugins: [
            //     copy({
            //         targets: [
            //             { src: 'src/theme/fonts/eof/*', dest: 'dist/theme/fonts/eof' },
            //             { src: 'src/theme/fonts/woff/*', dest: 'dist/theme/fonts/woff' },
            //             { src: 'src/theme/fonts/woff2/*', dest: 'dist/theme/fonts/woff2'},
            //         ],
            //     })]
        },
    },
});
