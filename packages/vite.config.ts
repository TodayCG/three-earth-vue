import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            external: ['vue'],
            input: ['index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].mjs',
                    preserveModules: true,
                    exports: 'named',
                    dir: '../dist/es'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    exports: 'named',
                    dir: '../dist/lib'
                }
            ]
        },
        lib: {
            entry: './index.ts'
        }
    },
    plugins: [
        vue(),
        dts({
            entryRoot: './three-earth',
            outDir: [
                '../dist/es/packages/three-earth',
                '../dist/lib/packages/three-earth'
            ]
        })
    ]
})
