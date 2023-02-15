import react from '@vitejs/plugin-react';
import * as fs from 'fs';
import { join } from 'path';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

const alias: Record<string, string> = {};
fs.readdirSync(join(__dirname, 'src')).forEach((file) => {
    const fullPath = join(__dirname, 'src', file);
    if (fs.lstatSync(fullPath).isDirectory()) alias[file] = fullPath;
});

export default defineConfig({
    plugins: [react(), mkcert()],
    server: { https: true, port: 3000 },
    resolve: { alias },
    build: {
        outDir: 'build',
        sourcemap: false,
    },
});
