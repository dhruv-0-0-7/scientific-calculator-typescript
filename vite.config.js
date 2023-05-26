import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: './public/dist',
        lib: {
            entry: './index.ts',
            formats: ['es'],
            fileName: 'bundle'
        },
        copyPublicDir: false
    }
});