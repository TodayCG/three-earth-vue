import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default ({ mode }: any) => defineConfig({
    base: '/',
    resolve: { alias: { '@': resolve(__dirname, './src') } },
    plugins: [
        vue(),
        eslintPlugin({
            include: [
                '/**/*.js',
                '/**/*.ts',
                '/**/*.vue',
                '/*.js',
                '/*.ts',
                '/*.vue'
            ]
        })
    ],
    // 打包配置
    build: {
        minify: 'terser',
        // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'，这是指 支持原生 ES 模块的浏览器。
        // target: 'es2015',
        // 指定生成静态资源的存放路径（相对于 build.outDir）。
        // outDir: 'dist',
        // 指定生成静态资源的存放路径（相对于 build.outDir）。
        // assetsDir: 'assets',
        /**
         * 构建后是否生成 source map 文件。如果为 true，
         * 将会创建一个独立的 source map 文件。如果为 'inline'，
         * source map 将作为一个 data URI 附加在输出文件中。'hidden' 的工作原理与 'true' 相似
         * ，只是 bundle 文件中相应的注释将不被保留。
         */
        // sourcemap: false,
        terserOptions: {
            /**
             * command 用来判断环境
             */
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})

// https://www.tslang.cn/docs/handbook/compiler-options.html