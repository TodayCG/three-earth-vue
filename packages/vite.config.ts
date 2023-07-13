// vite.config.js
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'ThreeEarth',
            fileName: (format) => `three-earth.${format}.ts`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [
        vue(),
        dts()
    ]
})
