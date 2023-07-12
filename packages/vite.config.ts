import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        outDir: resolve(__dirname, '../dist'),
        cssCodeSplit: true,
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'three-earth',
            formats: ['cjs', 'es', 'umd'],
            fileName: (format) => `three-earth.${format}.ts`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: { vue: 'Vue' }
            }
        }
    },
    plugins: [
        dts(),
        vue()
    ]
})
